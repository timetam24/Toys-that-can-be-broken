"use client";
import React, { useState } from "react";
import ButtonList from "@/components/ButtonList";
import Display from "@/components/Display";

export default function Home() {
  const [show, setShow] = useState("");

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-6 text-xl">오늘의 기분을 선택해주세요!</h1>
      <ButtonList setShow={setShow} />
      <Display show={show} />
    </div>
  );
}
