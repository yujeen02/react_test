import "./App.css";

import { Select, Rate, Button } from "antd";
import pink from "./img/pink1.jpg";
import gray from "./img/gray1.jpg";

import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";

const RightPage = (props) => {
  const {
    value,
    setValue,
    number,
    setNumber,
    total,
    setTotal,
    totalPrice,
    handleColor,
  } = props;

  const sumNumber = () => {
    setNumber(number + 1);
    setTotal(totalPrice(number + 1));
  };

  const minNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
      setTotal(totalPrice(number - 1));
    }
  };

  const option = [
    {
      value: "pink",
      label: "핑크",
      src: pink,
    },
    {
      value: "gray",
      label: "회색",
      src: gray,
    },
  ];

  return (
    <>
      <div className="right">
        <div>
          <h1>코멧 홈 단열 아일렛 암막 커튼</h1>
        </div>
        <div className="rate">
          <Rate onChange={setValue} value={value} />
          <div className="review">65,942개 상품평</div>
        </div>
        <hr></hr>
        <div className="priceBox">
          {/* <span>5% 9,390원</span> */}
          <div className="price">{total.toLocaleString()}원</div>
          <div className="sub">쿠팡판매가</div>
        </div>
        <hr></hr>
        <div className="deliver">
          <span>
            <strong>무료 배송</strong>
          </span>
          <span>(로켓배송 상품 19,800원 이상 구매 시) </span>
        </div>
        <div className="guarantee">
          <span className="arrive">내일 도착 보장</span>
          <span>(14시간 14분 내 주문 시 / 서울 경기 기준)</span>
        </div>

        <div className="button">
          <div className="countButton">
            <div className="number">
              <div>{number}</div>
            </div>
            <div className="numberButton">
              <Button className="btn" onClick={sumNumber}>
                <strong>∧</strong>
              </Button>
              <Button className="btn" onClick={minNumber}>
                <strong>∨</strong>
              </Button>
            </div>
          </div>

          <Button className="cart">장바구니</Button>
          <Button className="purchase">바로구매</Button>
        </div>

        <div className="card">
          <strong>PC에서도 간편한 결제 </strong>
          <img src={card1}></img>
          쿠페이머니
          <img src={card2}></img>
          카드
          <img src={card3}></img>
          계좌이체
        </div>
        <br></br>

        <div>
          <Select
            className="select"
            defaultValue="pink"
            style={{ width: 120 }}
            options={option}
            onChange={handleColor}
          />
        </div>
        <br></br>

        <hr></hr>
        <br></br>

        <div className="earn">
          <span>
            <strong>적립</strong>
          </span>
          <span>최대 445원 </span>
          <span className="underbar">쿠팡캐시 적립</span>
          <span> /쿠페이 머니 결제시</span>
        </div>
        <br></br>

        <hr></hr>
        <ul>
          <li>구성품: 커튼 1장 + 커튼 끈 1개</li>
          <li>가로길이: 135cm</li>
          <li>세로길이: 170cm</li>
          <li>커튼종류: 암막</li>
          <li>재질: 폴리에스테르</li>
          <li>쿠팡상품번호: 180352914 - 951843216</li>
        </ul>
        <Button>새 상품 (1) / 반품 (1) 최저 8,260원 </Button>
      </div>
    </>
  );
};

export default RightPage;
