import Image from 'next/image'

export default function Home() {
  let str: string = 'hi';
  let num: number = 10 ;
  let isLoggedIn: boolean = false;
  let arr: number[] = [1,2,3];
  let tuple: [string, number] = ['hi', 99];
  enum Team {Manager, Planner, Developer, Designer,}
  let sarha: number = Team.Designer;
  enum Study {HTML = 101, CSS = 202, JavaScript = 303, TypeScript = 404}
  let liked: string = Study[404];
  let anyStr: any = "AnyString";
  let anyArr: any = ['a', 2, 'anything'];
  function printSomething(): void {
    console.log("string");
  };
  function neverEnd(): never {while(true) {}}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className='flex flex-col justify-center items-center'>
      <h1>타입스크립트의 기본 타입</h1>
      <p>String, Number, Boolean, Array, Tuple, Enum, any, void, null, undefined, never</p>
      </div>
      <div>
      <div>Tuple: 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식.</div>
      <div>Enum: 특정 값들의 집합.</div>
      <div>Any: 기본적으로 자바스크립트로 구현되어 있는 웹 서비스 코드에 타입스크립트를 점진적으로 적용할 때 활용하면 좋은 타입. 모든 타입에 대해 허용한다는 의미.</div>
      <div>void: 반환 값이 없는 함수의 반환 타입. return이 없거나 return이 있더라도 반환하는 값이 없으면 함수의 반환 타입을 void로 지정한다.</div>
      <div>never: 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입.</div>
      </div>
    <form className='w-20 bg-blue-950'><input type='text' placeholder='This is input' className='p-2'/></form>
    </main>
  )
}
