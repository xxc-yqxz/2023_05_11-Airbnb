import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";

const Entire = memo(() => {
  // 注意：hook只能在函数组件最外层使用
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
