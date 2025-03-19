import { useState } from "react";
import "./App.css";
import MainDetail1 from "./MainDetail1";
import MainDetail2 from "./MainDetail2";
import MainDetail3 from "./MainDetail3";
import MainDetail4 from "./MainDetail4";
import MainDetail5 from "./MainDetail5";

const MainPage1 = () => {
  // 과일 value
  const [fruit, setFruit] = useState("apple");
  // 배경색
  const [back, setBack] = useState("red");
  // 글자색
  const [fontColor, setFontColor] = useState("white");
  // 텍스트
  const [text, setText] = useState("");

  return (
    <>
      <MainDetail1 fruit={fruit} setFruit={setFruit} />
      <MainDetail2 back={back} setBack={setBack} />
      <MainDetail3 fontColor={fontColor} setFontColor={setFontColor} />
      <MainDetail4 text={text} setText={setText} />
      <MainDetail5 back={back} fontColor={fontColor} text={text} />
    </>
  );
};

export default MainPage1;
