import hyReuqest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return hyReuqest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
