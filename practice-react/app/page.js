"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hello from "../components/Hello";
import Wrapper from "@/components/Wrapper";
import Counter from "@/components/Counter";
import InputSample from "@/components/InputSample";
import UserList from "@/components/UserList";
import SongList from "@/components/SongList";

export default function Home() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    nextId.current += 1;
  };

  return (
    <>
      <Wrapper>
        <Hello name="react" color="blue" isSpecial />
        {/* 컴포넌트에서 props 값 설정 생략 => true로 설정한 것으로 간주 */}
        <Hello color="yellow" />
      </Wrapper>
      <Counter />
      <InputSample />
      <UserList users={users} />
      <SongList />
    </>
  );
}
