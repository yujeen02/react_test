import "./App.css";

import pink1 from "./img/pink1.jpg";
import pink2 from "./img/pink2.jpg";
import pink3 from "./img/pink3.jpg";
import pink4 from "./img/pink4.jpg";
import pink5 from "./img/pink5.jpg";

import gray1 from "./img/gray1.jpg";
import gray2 from "./img/gray2.jpg";
import gray3 from "./img/gray3.jpg";
import gray4 from "./img/gray4.jpg";
import gray5 from "./img/gray5.jpg";

const LeftPage = (props) => {
  const { photo, setPhoto, color } = props;

  const pinkOption = [pink1, pink2, pink3, pink4, pink5];
  const grayOption = [gray1, gray2, gray3, gray4, gray5];
  const option = color === "pink" ? pinkOption : grayOption;

  // 이미지 변경
  const photoChange = (src) => {
    setPhoto(src);
  };

  return (
    <div className="foundationImgs">
      <div className="imgBox">
        {option.map((src, index) => (
          <div key={index} className="imgs">
            <img
              onMouseOver={() => photoChange(src)}
              src={src}
              alt={`${index + 1}`}
              width={120}
              height={120}
            />
          </div>
        ))}
      </div>
      <div className="mainImg">
        <img src={photo} alt="메인 이미지" width={450} height={550}></img>
      </div>
    </div>
  );
};

export default LeftPage;
