import "./App.css";

// 이미지
import apple from "./img/apple.png";
import apple1 from "./img/apple2.jpg";
import apple2 from "./img/apple3.png";

const MainDetail1 = (props) => {
  const { fruit, setFruit } = props;

  const option1 = [
    {
      value: "apple",
      label: "사과",
      src: apple,
    },
    {
      value: "apple1",
      label: "사과2",
      src: apple1,
    },
    {
      value: "apple2",
      label: "사과3",
      src: apple2,
    },
  ];

  // // 과일 변경
  const fruitChange = (value) => {
    setFruit(value);
  };

  return (
    <div className="left">
      <div className="mainImg">
        <img src={fruit}></img>
      </div>

      <div className="imgBox">
        {option1.map((item, index) => (
          <div key={index} className="imgs">
            <img
              onClick={() => fruitChange(item.src)}
              src={item.src}
              alt={item.label}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainDetail1;
