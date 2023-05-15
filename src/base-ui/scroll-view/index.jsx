import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  /* 定义内部的状态 */
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef(); // 此处不用useState是因为其每次调用对应的set方法，都会导致组件重新刷新

  /* 组件渲染完毕，判断是否显示右侧的按钮 */
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  /* 事件处理的逻辑 */
  function rightClickHandle() {
    const newIndex = posIndex + 1;
    const newEl = scrollContentRef.current.children[newIndex];
    // offsetLeft相对的时其有带定位的父元素
    // console.log(newEl.offsetLeft);

    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);
    // 是否继续显示右侧的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft);
  }

  return (
    <ViewWrapper>
      <button>左边按钮</button>
      {showRight && <button onClick={rightClickHandle}>右边按钮</button>}

      <div className="scroll-content" ref={scrollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
