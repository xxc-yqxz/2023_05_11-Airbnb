import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  /* 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
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
        {/* 折扣数据 */}
        <div className="discount">
          <SectionHeader
            title={discountInfo.title}
            subtitle={discountInfo.subtitle}
          />
          <SectionRooms
            roomList={discountInfo.dest_list?.["成都"]}
            itemWidth="33.33%"
          />
        </div>

        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
