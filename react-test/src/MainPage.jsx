import "./App.css";

import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import BottomPage from "./BottomPage";

// 이미지
import pink1 from "./img/pink1.jpg";
import gray1 from "./img/gray1.jpg";

import { useState } from "react";

const MainPage = () => {
  // 이미지
  const [photo, setPhoto] = useState(pink1);

  // 메인 컬러(pink or gray)
  const [color, setColor] = useState("pink");

  // 이미지 및 메인 컬러 변경
  const handleColor = (color) => {
    setColor(color);
    setPhoto(color === "pink" ? pink1 : gray1);
  };

  // rate
  const [value, setValue] = useState(4);

  // 커튼 수량
  const [number, setNumber] = useState(1);

  // 커튼 가격
  const price = 9390;

  // 총 가격
  const [total, setTotal] = useState(price);

  const totalPrice = (quantity) => {
    return quantity * price;
  };

  return (
    <div className="wrap">
      <div className="box">
        <div className="top">
          <div className="left">
            <LeftPage photo={photo} setPhoto={setPhoto} color={color} />
          </div>
          <div className="right">
            <RightPage
              value={value}
              setValue={setValue}
              number={number}
              setNumber={setNumber}
              total={total}
              setTotal={setTotal}
              totalPrice={totalPrice}
              handleColor={handleColor}
            />
          </div>
        </div>
        <div className="bottom">
          <BottomPage />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
