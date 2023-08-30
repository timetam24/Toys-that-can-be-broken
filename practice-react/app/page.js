import Image from "next/image";
import styles from "./page.module.css";
import Hello from "../components/Hello";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Hello name="react" color="blue" />
        <Hello color="yellow" />
      </Wrapper>
    </>
  );
}
