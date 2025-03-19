import { useState } from "react";
import "./App.css";
import MainDetail1 from "./MainDetail1";
import MainDetail2 from "./MainDetail2";
import apple from "./img/apple.png";

const MainPage1 = () => {
  // 과일 value
  const [fruit, setFruit] = useState(apple);

  // rate
  const [value, setValue] = useState(3);

  // 과일 수량
  const [number, setNumber] = useState(1);

  // 포장
  const [pack, setPack] = useState("basic");

  // 과일 수량 가격
  const price = 34500;

  // 총 가격
  const [total, setTotal] = useState(price);

  const totalPrice = (quantity, pack) => {
    let packagePrice = pack === "basic" ? 0 : pack === "present" ? 3000 : 11000;
    return quantity * price + packagePrice;
  };

  return (
    <>
      <div className="wrap">
        <div className="box">
          <MainDetail1 fruit={fruit} setFruit={setFruit} />

          <MainDetail2
            value={value}
            setValue={setValue}
            number={number}
            setNumber={setNumber}
            pack={pack}
            setPack={setPack}
            total={total}
            setTotal={setTotal}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage1;
