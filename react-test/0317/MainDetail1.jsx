import "./MainStyle.css";

const MainDetail1 = (props) => {
  const { number, setNumber } = props;

  //  플러스 함수 만들기
  const sumNumber = () => {
    setNumber(number + 1);
  };

  // 마이너스 함수 만들기
  const miNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div className="red">
      <button onClick={miNumber}>-</button>
      <div>{number}</div>
      <button onClick={sumNumber}>+</button>
    </div>
  );
};

export default MainDetail1;
