import styled from "styled-components";

export const SectionsWrapper = styled.div`
  display: flex;
  height: 66px;
  width: 850px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 32px;
  .search-content {
    &:hover {
      background: #ebebeb;
      border-radius: 32px;
    }
  }
  .search-content {
    flex: 1;
    padding: 15px 32px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    .title {
      font-size: 12px;
      margin-bottom: 4px;
    }
    .global {
      font-weight: 600 !important;
      color: #222 !important;
    }
    .desc {
      font-weight: 500;
      color: #717171;
    }
    .icon_search {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      width: 48px;
      background: #ff385c;
      border-radius: 50%;
      color: #fff;
    }
  }
  .line {
    border-right: 1px solid #ddd;
    align-self: center;
    height: 32px;
  }
`;
