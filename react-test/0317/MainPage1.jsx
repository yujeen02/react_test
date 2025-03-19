import { useState } from "react";
import "./App.css";
// import MainDetail from "./MainDetail";
import MainDetail1 from "./MainDetail1";
import MainDetail2 from "./MainDetail2";
import MainDetail3 from "./MainDetail3";
import MainDetail4 from "./MainDetail4";
import MainDetail5 from "./MainDetail5";
import MainDetail6 from "./MainDetail6";
import MainDetail7 from "./MainDetail7";

// const MainPage1 = () => {
//   const sample = [
//     { title: "제목 제목", content: "세상에나" },
//     { title: "제목 제목2", content: "세상에나2" },
//     { title: "제목 제목3", content: "세상에나3" },
//     { title: "제목 제목4", content: "세상에나4" },
//     { title: "제목 제목5", content: "세상에나5" },
//   ];

//   return (
//     <div className="wrap">
//       <div className="box">
//         {sample.map((x, i) => {
//           return <MainDetail key={i} data={x} />;
//           // js이기 때문에 key랑 return 필요
//         })}
//       </div>
//     </div>
//   );
// };

// const MainPage1 = () => {
//   const [number, setNumber] = useState(0);
//   //setNumber은 number의 숫자를 바꾸는 것임

//   // 플러스 함수 만들기
//   const sumNumber = () => {
//     setNumber(number + 1);
//   };

//   // 마이너스 함수 만들기
//   const miNumber = () => {
//     setNumber(number - 1);
//   };

//   return (
//     <MainDetail number={number} sumNumber={sumNumber} miNumber={miNumber} />
//   );
// };

// const MainPage1 = () => {
//   const [number, setNumber] = useState(2);
//   //setNumber은 number의 숫자를 바꾸는 것임

//   // 두배 만들기
//   const doubleNumber = () => {
//     setNumber(number * 2);
//   };

//   // 제곱 만들기
//   const squrNumber = () => {
//     setNumber(number ** 2);
//   };

//   // 초기화
//   const resetNumber = () => {
//     setNumber(2);
//   };

//   return (
//     <MainDetail
//       number={number}
//       doubleNumber={doubleNumber}
//       squrNumber={squrNumber}
//       resetNumber={resetNumber}
//     />
//   );
// };

const MainPage1 = () => {
  // 빨주노초파남보

  // 첫번째 숫자 + - 1 씩 되게 만드러 주세요
  const [number, setNumber] = useState(0);

  // 두번째 번역 버튼 > 눌렀을 때 Hello
  const [hello, setHello] = useState("안녕하세요");

  // 세번째: param 받아서 출력
  const changeValue = (value) => {
    return value;
  };

  return (
    <>
      <MainDetail1 number={number} setNumber={setNumber} />
      <MainDetail2 hello={hello} setHello={setHello} />
      <MainDetail7 changeValue={changeValue} />
      <MainDetail3 />
      <MainDetail4 />
      <MainDetail5 />
      <MainDetail6 />
    </>
  );
};

export default MainPage1;

// index js가 실행됨
// virtual dom이라 바로 실행

// 두개 이상이면
// return (
//   <>
//     <h1>{main1}</h1>
//     <h1>{asd}</h1>
//   </>
// );
