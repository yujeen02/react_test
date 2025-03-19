import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage1 from "./MainPage1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 메인 첫번째 */}
    <MainPage1 />
  </React.StrictMode>
);

// 함수를 가져와야 됨
