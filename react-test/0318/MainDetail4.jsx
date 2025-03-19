import { Input } from "antd";

const MainDetail4 = (props) => {
  const { text, setText } = props;
  return (
    <>
      내용:
      <Input
        style={{ width: 400 }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
};

export default MainDetail4;
