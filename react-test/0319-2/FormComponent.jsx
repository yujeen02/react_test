import { Button, Input } from "antd";
import { useFormik } from "formik";
import "./MainPage1.css";

const FormComponent = (props) => {
  const { setData } = props;
  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickName: "",
      hobby: "",
    },
    onSubmit: (values, { resetForm }) => {
      const existingData = JSON.parse(localStorage.getItem("key")) || [];
      const newData = [...existingData, values];
      localStorage.setItem("key", JSON.stringify(newData));
      setData(newData);
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={userFormik.handleSubmit}>
        <Input
          className="input"
          name="name"
          placeholder="이름을 입력해 주세요"
          value={userFormik.values.name}
          onChange={userFormik.handleChange}
        ></Input>
        <Input
          className="input"
          name="age"
          placeholder="나이를 입력해 주세요"
          value={userFormik.values.age}
          onChange={userFormik.handleChange}
        ></Input>
        <Input
          className="input"
          name="nickName"
          placeholder="별명을 입력해 주세요"
          value={userFormik.values.nickName}
          onChange={userFormik.handleChange}
        ></Input>
        <Input
          className="input"
          name="hobby"
          placeholder="취미를 입력해 주세요"
          value={userFormik.values.hobby}
          onChange={userFormik.handleChange}
        ></Input>
        <Button htmlType="submit">저장</Button>
      </form>
    </>
  );
};

export default FormComponent;
