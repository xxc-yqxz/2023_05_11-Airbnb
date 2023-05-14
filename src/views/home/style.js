import styled from "styled-components";

export const HomeWrapper = styled.div`
  /* 加上>，保证是直接子元素才有对应的样式 */
  > .content {
    width: 1032px;
    margin: 0 auto;
  }

  .good-price {
    margin-top: 30px;

    .room-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -8px;
    }
  }
`;
