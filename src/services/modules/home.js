import hyReuqest from "..";

export function getHomeGoodPriceData() {
  return hyReuqest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return hyReuqest.get({
    url: "/home/highscore",
  });
}
