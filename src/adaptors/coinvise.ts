import { ComputeConfig } from '../types';
import { fetcher, gqlFetcher } from '../utils';

interface TokenResult {
  id: string;
  createdAt: string;
  updatedAt: string;
  address: string;
  name: string;
  symbol: string;
  description: string;
  decimals: number;
  tokenSupply: string;
  user_addr: string;
  network_chain_id: string;
  slope: number;
  slopeDecimals: number;
  type: string;
}

interface NftResult {
  nfts: Array<{
    sold: boolean;
    symbol: string;
    price: string;
  }>;
}

interface PoolsResult {
  data: {
    pools: Array<{
      id: string;
      totalValueLockedUSD: string;
      token0: {
        id: string;
      };
      token1: {
        id: string;
      };
    }>;
  };
}

interface UserResult {
  user: {
    followers: number;
    following: number;
  };
}

interface SendsResult {
  data: Array<{
    senderAddr: string;
    type: string;
    user_addr: string;
  }>;
}

export default async function getCoinviseData(
  address: string,
  computeConfig: ComputeConfig
) {
  if (Boolean(computeConfig?.maticPriceInUsd) === false) {
    throw new Error(
      'getCoinviseData: computeConfig does not contain maticPriceInUsd'
    );
  }

  async function getPoolData(tokenAddress: string) {
    const response = (await gqlFetcher(
      'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
      `{
        pools (where : {token0: "${tokenAddress.toLowerCase()}"}) {
          id
          totalValueLockedUSD
          token0 {
            id
          }
          token1 {
            id
          }
        }
      }`
    )) as PoolsResult;
    return response['data']['pools'];
  }

  const promiseArray = [
    fetcher(
      'GET',
      `https://coinvise-prod.herokuapp.com/token?userAddress=${address}&production=true`
    ),
    fetcher(
      'GET',
      `https://www.coinvise.co/api/nft?chain=137&address=${address}`
    ),
    fetcher('GET', 'https://coinvise-prod.herokuapp.com/sends?size=1000'),
    fetcher('GET', `https://coinvise-prod.herokuapp.com/user?slug=${address}`),
  ];
  const data = await Promise.allSettled(promiseArray);

  // 0 - social tokens
  let totalPoolCount = 0;
  let totalPoolTvl = 0;
  let totalTokens = 0;
  if (data[0].status === 'fulfilled') {
    const tokenData = data[0] as PromiseFulfilledResult<Array<TokenResult>>;
    totalTokens = tokenData.value.length;
    const promiseArray2 = [];
    if (tokenData.value.length > 0) {
      for (let index = 0; index < tokenData.value.length; index++) {
        promiseArray2.push(getPoolData(tokenData.value[index].address));
      }
    }
    const resp = await Promise.allSettled(promiseArray2);
    for (let index = 0; index < resp.length; index++) {
      if (resp[index].status === 'fulfilled') {
        const poolDatas = resp[index] as PromiseFulfilledResult<
          {
            id: string;
            totalValueLockedUSD: string;
            token0: { id: string };
            token1: { id: string };
          }[]
        >;
        for (let ind = 0; ind < poolDatas.value.length; ind++) {
          const poolData = poolDatas.value[ind];
          totalPoolCount += 1;
          totalPoolTvl += parseFloat(poolData.totalValueLockedUSD);
        }
      }
    }
  }

  // 1 - nfts
  let totalCountNft = 0;
  let totalCountSold = 0;
  let totalAmountSold = 0;
  if (data[1].status === 'fulfilled') {
    const nfts = data[1] as PromiseFulfilledResult<NftResult>;
    totalCountNft = nfts.value.nfts.length;
    for (let index = 0; index < nfts.value.nfts.length; index++) {
      const nft = nfts.value.nfts[index];
      if (nft.sold === true) {
        totalCountSold += 1;
        if (nft.symbol === 'MATIC') {
          totalAmountSold +=
            parseFloat(nft.price) * computeConfig.maticPriceInUsd;
        }
        if (nft.symbol === 'USDC') {
          totalAmountSold += parseFloat(nft.price);
        }
      }
    }
  }

  // 2 - sends

  let multisendCount = 0;
  let airdropCount = 0;
  const sendsData = data[2] as PromiseFulfilledResult<SendsResult>;

  for (let index = 0; index < sendsData.value.data.length; index++) {
    const item = sendsData.value.data[index];
    if (item.type === 'multisend' && item.senderAddr === address) {
      multisendCount += 1;
    } else if (item.type === 'airdrop' && item.user_addr === address) {
      airdropCount += 1;
    }
  }

  // 3 - user
  let followers = 0;
  let following = 0;
  if (data[3].status === 'fulfilled') {
    const userData = data[3] as PromiseFulfilledResult<UserResult>;
    followers = userData.value.user.followers;
    following = userData.value.user.following;
  }

  return {
    tokensCreated: totalTokens,
    nftsCreated: totalCountNft,
    totalPoolCount,
    totalPoolTvl,
    totalCountSold,
    totalAmountSold,
    multisendCount,
    airdropCount,
    following,
    followers,
  };
}
