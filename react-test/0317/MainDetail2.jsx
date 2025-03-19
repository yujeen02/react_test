import "./MainStyle.css";

const MainDetail2 = (props) => {
  const { hello, setHello } = props;

  const changeName = () => {
    setHello("hello");
  };

  return (
    <div className="orange">
      <div>{hello}</div>
      <button onClick={changeName}>change</button>
    </div>
  );
};

export default MainDetail2;
