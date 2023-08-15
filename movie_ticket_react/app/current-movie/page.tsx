import React from "react";
import data from "./data";
import Image from "next/image";

function CurrentMovie() {
  let 상품 = ["토마토", "바이올린", "치킨"];
  let array = [2, 3, 4];
  array.map((a, i) => {
    <div className="item">
      <h2>{a}</h2>
      <h3>{i}</h3>
    </div>;
  });

  return (
    <main className="bg-white grid grid-cols-4 grid-rows-2 gap-x-[23px] gap-y-[24px] mx-[29px] mb-[31px] ">
      <h2 className="a11y-hidden">현재 상영영화</h2>
      {data.map((item) => {
        return (
          <article
            className="w-[220px] border border-solid border-[var(--main-gray)] rounded-[10px] box-border shadow-[0_0_5px_0_rgba(0, 0, 0, 0.3)]"
            key={item.id}
          >
            <div className="px-5 pt-[19px] pb-[18px]">
              {/* <Image
                src={item.imgUrl}
                alt="영화 포스터"
                width={"180"}
                height={"250"}
              /> */}
              <h3 className="text-base font-black my-3 tracking-[-0.3px] truncate ">
                {item.title}
              </h3>
              <ul className="text-[13px] font-normal">
                <li>
                  <span className="text-[var(--dark-gray)] mr-[3px]">개요</span>
                  <span className="content">판타지</span>
                </li>
                <li>
                  <span className="text-[var(--dark-gray)] mr-[3px]">평점</span>
                  <span className="star">9.05</span>
                </li>
                <li>
                  <span className="text-[var(--dark-gray)] mr-[3px]">개봉</span>
                  <time className="content">2021.03.27</time>
                </li>
                <li>
                  <span className="text-[var(--dark-gray)] mr-[3px]">출연</span>
                  <span className="content">라이캣, 소울곰, 개리씨</span>
                </li>
              </ul>
            </div>
            <div className="flex border-t border-solid border-[var(--main-gray)]">
              <a href="javascript:void(0);" className="btn-reserve">
                예매하기
              </a>
              <button type="button" className="btn-preview">
                예고편
              </button>
            </div>
          </article>
        );
      })}
    </main>
  );
}

export default CurrentMovie;
