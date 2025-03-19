import { Button, Input, message, notification, Table } from "antd";
import { useFormik } from "formik";

const MainPage1 = () => {
  // hook은 여기에 사용 !!
  // 함수 안에 useEffect 사용 불가능

  // 미리 세팅 가능
  const data = [
    {
      name1: "ㅇㅇㅇ",
      age: "13",
      nickName: "닉네임",
      hobby: "취미",
    },
    {
      name1: "이름",
      age: "15",
      nickName: "nick",
      hobby: "취미는 먹기",
    },
    {
      name1: "누구",
      age: "30",
      nickName: "닉네임입니다",
      hobby: "취미입니다 잠자기",
    },
    {
      name1: "ㅋㅋㅋ",
      age: "28",
      nickName: "닉네임이당",
      hobby: " 히히",
    },
  ];

  // 데이터 재가공
  const list = data.map((x, i) => {
    return {
      key: i,
      name: x.name1,
      age: x.age,
      nickName: x.nickName,
      hobby: x.hobby,
    };
  });

  // data가 무조건 있으면 오류남
  // useEffect(() => {
  //   userFormik.setFieldValue("name", data.name);
  //   userFormik.setFieldValue("age", data.age);
  //   userFormik.setFieldValue("nickName", data.nickName);
  //   userFormik.setFieldValue("hobby", data.hobby);
  // }, []);

  const userFormik = useFormik({
    initialValues: {
      name: "",
      age: "",
      nickName: "",
      hobby: "",
    },
    onSubmit: (values) => {
      notification.warning({
        message: "아직 준비되지 않았어요",
      });
    },
  });

  const columns = [
    {
      title: "이름",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "나이",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "별명",
      dataIndex: "nickName",
      key: "nickName",
    },
    {
      title: "취미",
      dataIndex: "hobby",
      key: "hobby",
    },
    {
      title: "관리",
      render: (data) => {
        return <Button onClick={() => {}}>삭제</Button>;
      },
    },
  ];

  // console.log(userFormik.values.name, "콘솔");

  return (
    <>
      <form onSubmit={userFormik.handleSubmit}>
        <Input
          name="name"
          placeholder="이름을 입력해 주세요"
          value={userFormik.values.name}
          onChange={userFormik.handleChange}
        ></Input>
        <Input
          name="age"
          placeholder="나이를 입력해 주세요"
          value={userFormik.values.age}
          onChange={userFormik.handleChange}
        ></Input>
        <Input
          name="nickName"
          placeholder="별명을 입력해 주세요"
          value={userFormik.values.nickName}
          onChange={userFormik.handleChange}
        ></Input>
        <Input
          name="hobby"
          placeholder="취미를 입력해 주세요"
          value={userFormik.values.hobby}
          onChange={userFormik.handleChange}
        ></Input>
        <Button htmlType="submit">저장</Button>
      </form>
      <Table columns={columns} dataSource={list}></Table>
    </>
  );
};

export default MainPage1;
