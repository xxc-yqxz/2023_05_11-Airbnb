import IconSearch from "@/assets/svg/icon_search";
import classNames from "classnames";
import React, { memo, Fragment } from "react";
import { SectionsWrapper } from "./style";

const SearchSections = memo((props) => {
  const { searchInfos } = props;
  return (
    <SectionsWrapper>
      {searchInfos.map((item, index) => {
        return (
          <Fragment key={item.title}>
            <div className="search-content">
              <div className="title">{item.title}</div>
              <div
                className={classNames(
                  { global: index === 0 && searchInfos.length >= 3 },
                  "desc"
                )}
              >
                {item.desc}
              </div>
              {index === searchInfos.length - 1 && (
                <div className="icon_search">
                  <IconSearch size={16} />
                </div>
              )}
            </div>
            {index !== searchInfos.length - 1 && <div className="line"></div>}
          </Fragment>
        );
      })}
    </SectionsWrapper>
  );
});

export default SearchSections;
