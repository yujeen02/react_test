import { Select } from "antd";

const MainDetail3 = (props) => {
  const { fontColor, setFontColor } = props;
  // 글자색 옵션
  const option3 = [
    {
      value: "white",
      label: "흰색",
    },
    {
      value: "grey",
      label: "회색",
    },
    {
      value: "green",
      label: "초록색",
    },
  ];

  return (
    <>
      <div>
        글자색:
        <Select
          defaultValue={fontColor}
          style={{
            width: 120,
          }}
          onChange={(value) => {
            setFontColor(value);
          }}
          options={option3}
        />
      </div>
    </>
  );
};

export default MainDetail3;
