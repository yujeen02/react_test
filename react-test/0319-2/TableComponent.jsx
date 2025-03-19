import { Button, Table, Select, ConfigProvider } from "antd";
import "./MainPage1.css";

const TableComponent = (props) => {
  const { back, setBack, data, setData } = props;

  // 색상 옵션 리스트
  const option = [
    { value: "red", label: "빨간색" },
    { value: "yellow", label: "노란색" },
    { value: "blue", label: "파란색" },
  ];

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
      render: (_, record) => (
        <Button onClick={() => handleDelete(record.key)}>삭제</Button>
      ),
    },
  ];

  // 데이터 삭제 함수
  const handleDelete = (key) => {
    const newData = data.filter((_, index) => index !== key);
    localStorage.setItem("key", JSON.stringify(newData));
    setData(newData);
  };

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <span>테이블 헤더 색상: </span>
        <Select
          defaultValue={back}
          style={{ width: 120 }}
          onChange={(value) => setBack(value)}
          options={option}
        />
      </div>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: back,
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={data.map((x, i) => ({
            ...x,
            key: i,
          }))}
        />
      </ConfigProvider>
    </>
  );
};

export default TableComponent;
