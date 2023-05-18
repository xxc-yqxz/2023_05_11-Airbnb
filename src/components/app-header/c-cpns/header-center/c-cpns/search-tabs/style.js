import styled from "styled-components";

export const SearchTabWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.theme.isAlpha ? "#fff" : "#222")};
  .search-item {
    font-size: 16px;
    font-weight: 400;
    margin: 10px 16px;
    &.active {
      .search-content {
        color: ${(props) => (props.theme.isAlpha ? "#fff" : "#222")} !important;
      }
      .line {
        transform: scaleX(1);
        background: ${(props) =>
          props.theme.isAlpha ? "#fff" : "#222"} !important;
      }
    }
    &:hover {
      .line {
        background: #a1a1a1;
        transform: scaleX(1);
      }
      .search-content {
        color: #a1a1a1;
      }
    }
    .search-content {
      padding: 10px 0;
      cursor: pointer;
    }
    .line {
      display: block;
      height: 2px;
      position: relative;
      top: 10px;
      background: #a1a1a1;
      transform: scaleX(0);
      transition: transform 200ms ease;
    }
  }
`;
