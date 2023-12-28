import "./Hero.scss";
import { Link } from "react-router-dom";
import modelImage from "../../assets/hero_model.png";
import targetIcon from "../../assets/target_icon.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>CHỌN KÍNH NGAY</h2>
        <div>
          <div className="hero-target-icon">
            <p>Năm mới,</p>
            <img src={targetIcon} alt="target_icon" />
          </div>

          <p>Tầm nhìn mới</p>
          <button>
            {" "}
            <Link className="nav-link" to="/products">
              Tất cả sản phẩm
            </Link>
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={modelImage} alt="model" />
      </div>
    </div>
  );
}

export default Hero;
