import apple from "./img/apple.png";
import banana from "./img/banana.png";
import grape from "./img/grape.jpeg";
import { Select } from "antd";

const MainDetail1 = (props) => {
  const { fruit, setFruit } = props;
  // 과일 옵션
  // value: 이미지 보이는 부분
  // select에서 보이는거 label
  const option1 = [
    {
      value: "apple",
      label: "사과",
    },
    {
      value: "banana",
      label: "바나나",
    },
    {
      value: "grape",
      label: "포도",
    },
  ];

  // // 과일 변경
  const fruitChange = (value) => {
    setFruit(value);
  };

  return (
    <>
      <div>
        과일:
        <Select
          defaultValue={fruit}
          style={{
            width: 120,
          }}
          onChange={fruitChange}
          options={option1}
        />
      </div>
      <img
        style={{
          width: 200,
          height: 200,
        }}
        src={fruit === "apple" ? apple : fruit === "banana" ? banana : grape}
        alt="a"
      ></img>
      ;
    </>
  );
};

export default MainDetail1;
