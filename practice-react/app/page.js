import Image from "next/image";
import styles from "./page.module.css";
import Hello from "../components/Hello";
import Wrapper from "@/components/Wrapper";
import Counter from "@/components/Counter";
import InputSample from "@/components/InputSample";
import UserList from "@/components/UserList";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Hello name="react" color="blue" isSpecial />
        {/* 컴포넌트에서 props 값 설정 생략 => true로 설정한 것으로 간주 */}
        <Hello color="yellow" />
      </Wrapper>
      <Counter />
      <InputSample />
      <UserList />
    </>
  );
}
