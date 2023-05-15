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

export function getHomeDiscountData() {
  return hyReuqest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return hyReuqest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData() {
  return hyReuqest.get({
    url: "/home/longfor",
  });
}
