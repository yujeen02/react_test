import "./App.css";

import { Select, Rate, Button } from "antd";

const MainDetail2 = (props) => {
  const {
    value,
    setValue,
    number,
    setNumber,
    pack,
    setPack,
    total,
    setTotal,
    totalPrice,
  } = props;

  const minNumber = () => {
    setNumber(number + 1);
    setTotal(totalPrice(number + 1, pack));
  };

  const sumNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
      setTotal(totalPrice(number - 1, pack));
    }
  };

  const packChange = (value) => {
    setPack(value);
    setTotal(totalPrice(number, value));
  };

  const option = [
    {
      value: "basic",
      label: "기본(+0원)",
    },
    {
      value: "present",
      label: "선물포장(+3000원)",
    },
    {
      value: "advanced",
      label: "고급포장(+11000원)",
    },
  ];

  return (
    <div className="right">
      <div>
        <h1>맛있는 사과</h1>
      </div>
      <div className="rate">
        <Rate onChange={setValue} value={value} />
        <div className="review">2,905개 상품평</div>
      </div>
      <div className="price">34,500원 (박스당)</div>
      <hr></hr>
      <div>이 상품은 내일 도착, 무료 배송</div>
      <div className="button">
        <div className="countBotton">
          <Button onClick={sumNumber}>-</Button>
          <div>{number}</div>
          <Button onClick={minNumber}>+</Button>
        </div>

        <div>
          <Select
            defaultValue={pack}
            style={{ width: 120 }}
            options={option}
            onChange={packChange}
          />
        </div>
        <Button>장바구니</Button>
        <Button>바로구매</Button>
      </div>

      <div>총: {total}원</div>
    </div>
  );
};

export default MainDetail2;
