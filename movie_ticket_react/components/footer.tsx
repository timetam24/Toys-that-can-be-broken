import React from "react";
import Image from "next/image";
import Link from "next/link";
import twitterIcon from "@/public/svg/icon-twitter.svg";
import instagramIcon from "@/public/svg/icon-instagram.svg";
import facebookIcon from "@/public/svg/icon-facebook.svg";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-gray)] flex flex-col items-center">
      <div className="w-[1189px] flex justify-between items-center mt-[53px] mb-10 ">
        <h2 className="font-roboto text-[22px] font-bold">Jungle Cinema</h2>
        <ul className="flex items-center gap-[22px]">
          <li>
            <Link href={"https://twitter.com/?lang=ko"}>
              <Image
                src={twitterIcon}
                className="icon-img"
                alt="트위터 아이콘"
                priority={true}
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.instagram.com/"}>
              <Image
                src={instagramIcon}
                className="icon-img"
                alt="인스타그램 아이콘"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://ko-kr.facebook.com/"}>
              <Image
                src={facebookIcon}
                className="icon-img"
                alt="페이스북 아이콘"
              />
            </Link>
          </li>
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1189"
        height="2"
        viewBox="0 0 1189 2"
        fill="none"
      >
        <path d="M0 1.00012L594.5 1.00007L1189 1.00002" stroke="#C4C4C4" />
      </svg>
      <div className="w-[1189px] flex justify-between items-center mt-[34px] mb-[38px]">
        <ul className="flex items-center text-[#4f4f4f] text-sm font-normal tracking-[-0.5px]">
          <li className="mr-[11px] after:content-[''] after:inline-block after:w-px after:h-[17px] after:ml-2.5 after:bg-[#4f4f4f] after:align-bottom">
            <span className="font-bold">(주) 정글 시네마</span>
          </li>
          <li className="mr-[11px] after:content-[''] after:inline-block after:w-px after:h-[17px] after:ml-2.5 after:bg-[#4f4f4f] after:align-bottom">
            <span className="font-bold">대표</span> 라이언
          </li>
          <li className="mr-[11px] after:content-[''] after:inline-block after:w-px after:h-[17px] after:ml-2.5 after:bg-[#4f4f4f] after:align-bottom">
            <span className="font-bold">사업자 번호</span> 000-0000-0000
          </li>
          <li className="mr-[11px] after:content-[''] after:inline-block after:w-px after:h-[17px] after:ml-2.5 after:bg-[#4f4f4f] after:align-bottom">
            광고 영화 및 비디오물 제작업
          </li>
          <li>
            <span className="font-bold">주소</span> 서울특별시
          </li>
        </ul>
        <p className="text-[#4f4f4f] text-sm font-bold">ⓒ The Jungle</p>
      </div>
    </footer>
  );
};

export default Footer;
