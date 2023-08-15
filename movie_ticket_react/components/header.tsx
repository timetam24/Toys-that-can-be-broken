import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col items-center tracking-[-1.4px]">
      <h1 className="text-center text-2xl font-bold mb-8 mt-[37px] mx-auto">
        정글 시네마 영화 목록
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="650"
        height="2"
        viewBox="0 0 650 2"
        fill="none"
      >
        <path d="M0 1H650" stroke="#BDBDBD" strokeWidth="2" />
      </svg>
      <nav>
        <ul className="flex items-center text-base mt-[25px] mb-[27px] mx-auto gap-[61px]">
          <li>
            <Link
              href={"/current-movie"}
              className="font-medium text-[var(--dark-gray)]"
            >
              현재상영영화
            </Link>
          </li>
          <li>
            <Link
              href={"/upcoming-movie"}
              className="font-medium text-[var(--dark-gray)]"
            >
              개봉예정영화
            </Link>
          </li>
          <li>
            <Link
              href={"/box-office"}
              className="font-medium text-[var(--dark-gray)]"
            >
              박스오피스
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
