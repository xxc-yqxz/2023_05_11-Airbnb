import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import { Button } from "antd";

import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

const Home = memo(() => {
  /* 从redux中获取数据 */
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  // 发起进行的网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <Rating name="read-only" value={5} readOnly />
          <>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </>

          <SectionHeader title={goodPriceInfo.title} />
          <ul className="room-list">
            {goodPriceInfo?.list?.slice(0, 8).map((item) => {
              return <RoomItem itemData={item} key={item.id} />;
            })}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
