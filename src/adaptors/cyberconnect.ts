import { gqlFetcher } from '../utils';

export default async function getCyberconnectData(address: string) {
  const data = await gqlFetcher(
    'https://api.cybertino.io/connect/',
    `query {
      identity(address: "${address.toString()}") {
        displayName
        address
        followingCount
        followerCount
        social {
          twitter
        }
      }
    }`
  );

  return data;
}