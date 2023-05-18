import React, { memo, useState } from "react";
import { SearchTabWrapper } from "./style";
import PropTypes from "prop-types";
import classNames from "classnames";

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props;
  const [uIndex, setIndex] = useState(0);
  function indexHandle(i) {
    tabClick(i);
    setIndex(i);
  }
  return (
    <SearchTabWrapper>
      {titles.map((item, i) => {
        return (
          <div
            className={classNames({ active: i === uIndex }, "search-item")}
            key={item}
            onClick={() => indexHandle(i)}
          >
            <span className="search-content">{item}</span>
            <span className="line"></span>
          </div>
        );
      })}
    </SearchTabWrapper>
  );
});

SearchTabs.propTypes = {
  tabs: PropTypes.array,
};

export default SearchTabs;
