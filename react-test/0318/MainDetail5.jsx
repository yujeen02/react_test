const MainDetail5 = (props) => {
  const { back, fontColor, text } = props;
  return (
    <div
      style={{
        padding: 10,
        width: 200,
        backgroundColor: back,
        color: fontColor,
      }}
    >
      {text}
    </div>
  );
};

export default MainDetail5;
