import { fetcher } from '../utils';

interface ArcxResult {
  account: string;
  protocol: string;
  score: string;
}

export default async function getArcxData(address: string) {
  try {
    const data = (await fetcher(
      'GET',
      `https://api.arcx.money/scores/${address}`
    )) as Array<ArcxResult>;

    let totalScore = 0;

    for (let index = 0; index < data.length; index++) {
      const scoreData = data[index];
      if (scoreData['score'] !== null) {
        totalScore += parseFloat(scoreData['score']) / 10;
      }
    }
    return {
      totalScore,
      details: data,
    };
  } catch (error) {
    return {
      totalScore: 0,
      details: [],
    };
  }
}
