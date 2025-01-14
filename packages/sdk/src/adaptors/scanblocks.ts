import { AdaptorDeets, ScanblocksResult } from '../types';
import { fetcher } from '../utils';

export default async function getScanblocksData(address: string) {
  const json = (await fetcher(
    'GET',
    `https://scanblocks.io/api/get?apikey=b4db18b757294ba9&blockchain=all&address=${address.toLowerCase()}`
  )) as Array<ScanblocksResult>;

  if (json.length > 0) return json;
  else return false;
}

export const ScanblocksAdaptorDeets: AdaptorDeets = {
  id: 'scanblocks',
  name: 'ScanBlocks',
  projectThumbnail:
    'ipfs://bafybeidv3bh24wn6if7gxuyoq7nsydwytrhnvfefcdqkpigshq7zu3niru/scanblocks.webp',
  projectUrl: 'https://scanblocks.io/',
  requiredConfigKeys: [],
};
