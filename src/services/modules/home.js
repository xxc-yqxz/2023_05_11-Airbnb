import hyReuqest from "..";

export function getHomeGoodPriceData() {
  return hyReuqest.get({
    url: "/home/goodPrice",
  });
}
