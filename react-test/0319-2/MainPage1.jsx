import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";
import { useState } from "react";

import "./MainPage1.css";

const MainPage1 = () => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("key")) || []
  );

  // 배경색
  const [back, setBack] = useState("red");

  return (
    <div className="wrap">
      <div className="box">
        <FormComponent setData={setData} />
        <TableComponent
          back={back}
          setBack={setBack}
          data={data}
          setData={setData}
        />
      </div>
    </div>
  );
};

export default MainPage1;
