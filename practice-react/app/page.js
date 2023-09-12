"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hello from "../components/Hello";
import Wrapper from "@/components/Wrapper";
import Counter from "@/components/Counter";
import InputSample from "@/components/InputSample";
import UserList from "@/components/UserList";
import SongList from "@/components/SongList";
import CreateUser from "@/components/CreateUser";
import ArrayRender from "@/components/ArrayRender";

export default function Home() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  // useRef Hook은 DOM을 선택하는 용도 외에도 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리한다. useRef로 관리하는 변수는 값이 바뀌어도 컴포넌트가 리렌더링되지 않는다. 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트된 상태를 조회 할 수 있는 반면, useRef로 관리하고 있는 변수는 설정 후 "바로" 조회가 가능하다.
  // useRef 안 파라미터 값이 .current값의 기본값이 된다. 그리고 이 값을 수정할 때에는 .current값을 수정하면 되고 조회할 때에는 .current를 조회하면 된다.

  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    // 배열에 있는 항목을 제거할 때에는, 추가할 때와 마찬가지로 불변성을 지켜가면서 업데이트를 해줘야 한다. 불변성을 지키면서 특정 원소를 배열에서 제거하기 위해서는 filter 배열 내장 함수를 사용하는 것이 가장 편하다. 이 함수는 배열에서 특정 조건이 만족하는 원소들만 추출하여 '새로운 배열'을 만들어준다.
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
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
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <SongList />
      <ArrayRender />
    </>
  );
}
