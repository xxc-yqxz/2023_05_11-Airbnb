import React, { memo, useState } from "react";

import SearchTitles from "@/assets/data/search_titles";
import { CenterWrapper } from "./style";
import SearchTabs from "./c-cpns/search-tabs";
import SearchSections from "./c-cpns/search-sections";

const HeaderCenter = memo(() => {
  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.title);

  return (
    <CenterWrapper>
      {/* <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div> */}

      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={setTabIndex} />
        <div className="infos">
          <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
