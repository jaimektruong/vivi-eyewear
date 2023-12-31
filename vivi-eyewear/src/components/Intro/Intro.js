import "./Intro.scss";
import imgIntro from "../../assets/chon-kinh.jpg";
import imgGlass1 from "../../assets/chon-kinh-slider-1.jpg";
import imgGlass2 from "../../assets/chon-kinh-slider-2.jpg";

function Intro() {
  return (
    <div className="intro__container d-flex gap-2 inner d-flex justify-content-center py-3">
      <div className="intro__item">
        <img className="choose-glasses" src={imgIntro} alt="chon-kinh" />
        <button className="text-white">Chọn kính ngay</button>
      </div>
      <div>
        {" "}
        <img className="glasses" src={imgGlass1} alt="glass1" />
      </div>
      <div>
        {" "}
        <img className="glasses" src={imgGlass2} alt="glass2" />
      </div>
    </div>
  );
}

export default Intro;
