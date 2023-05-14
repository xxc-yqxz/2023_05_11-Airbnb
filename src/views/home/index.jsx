import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";

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
        <div className="section">
          <div className="title">
            <h2>{goodPriceInfo.title}</h2>
            <ul>
              {goodPriceInfo.list.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
