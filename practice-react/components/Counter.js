"use client";
import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // setNumber(number + 1);
    setNumber((prevNumber) => prevNumber + 1);
    // 함수형 업데이트: 컴포넌트 최적화를 위하여, 파라미터에 새로운 값을 넣는 것 대신 기존 값을 어떻게 업데이트할 지에 대한 함수를 등록하여 값을 업데이트
  };

  const onDecrease = () => {
    // setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
