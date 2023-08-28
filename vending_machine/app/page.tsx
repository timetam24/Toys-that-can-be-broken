import Image from "next/image";
import data from "./data";

export default function Home() {
  return (
    <div className="bg-white md:bg-[#eae8fe]">
      <h1>
        <Image
          className="max-w-[50%] mx-auto"
          src="/cola-logo.svg"
          alt="Cola Cola Logo"
          width={386}
          height={180}
          priority
        />
      </h1>
      <main className="w-[748px] max-w-full my-5 mx-auto grid md:grid-cols-2 md:grid-rows-[50px_auto] md:gap-y-5 md:gap-x-7 md:my-16 md:mx-auto ">
        <section className="section1">
          <h2 className="a11y-hidden">판매음료</h2>
          <ul className="cola-list">
            {data.map((cola) => (
              <li key={cola.id}>
                <button type="button" className="btn-cola on">
                  <Image
                    src={cola.src}
                    alt={cola.name}
                    width={72}
                    height={130}
                  />
                  <span className="cola-name">{cola.name}</span>
                  <strong className="cola-price">{cola.price}원</strong>
                </button>
              </li>
            ))}
          </ul>
          <div className="container">
            <div className="bg-box">
              <h2 className="box-title">잔액 :</h2>
              <p>원</p>
            </div>
            <button type="button" className="btn">
              거스름돈 반환
            </button>

            <label htmlFor="input-money" className="a11y-hidden">
              입금액
            </label>
            <input
              type="number"
              id="input-money"
              min="1000"
              step="1000"
              placeholder="입금액 입력"
              required
            />
            <button type="button" className="btn">
              입금
            </button>

            <h2 className="a11y-hidden">장바구니</h2>
            <ul className="get-list"></ul>
            <button type="button" className="btn-get">
              획득
            </button>
          </div>
        </section>
        <section className="section2">
          <div className="bg-box">
            <h2 className="box-title">소지금 :</h2>
            <p>25,000원</p>
          </div>
        </section>
        <section className="section3">
          <h2>획득한 음료</h2>
          <ul className="get-list"></ul>
          <p className="total-price">총금액 : 9,000원</p>
        </section>
      </main>
    </div>
  );
}
