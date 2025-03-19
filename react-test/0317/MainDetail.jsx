import "./MainStyle.css";

/**
 * 작업 예시
 * 작성자: 누구
 * 작업 일시: 2025.03.17
 * 작업 내용: 메인페이지 아이템
 * props = {title: string, content: string}
 */

// const MainDetail = (props) => {
//   return (
//     <div className="wrap-box">
//       <div className="title">{props.data.title}</div>
//       <div className="content">{props.data.content}</div>
//     </div>
//   );
// };

// const MainDetail = (props) => {
//   const { number, sumNumber, miNumber } = props;

//   return (
//     <>
//       <button onClick={miNumber}>-</button>
//       <div>{number}</div>
//       <button onClick={sumNumber}>+</button>
//     </>
//   );
// };

const MainDetail = (props) => {
  const { number, squrNumber, doubleNumber, resetNumber } = props;

  return (
    <>
      <div>{number}</div>
      <button onClick={squrNumber}>제곱</button>
      <button onClick={doubleNumber}>두배</button>
      <button onClick={resetNumber}>초기화</button>
    </>
  );
};

// 자식이 부모의 데이터 값을 변경할 수 있음. 부모에서 선언해서 자식에게 넘기면 자식이 수정할 수 있음

export default MainDetail;

// const MainDetail = (//props) => {
//   return <div>간단</div>;
// };
