import "./Hero.scss";
import { Link } from "react-router-dom";
import modelImage from "../../assets/hero_model.png";

function Hero() {
  return (
    <div className="container-fluid hero">
      <div className=" container px-5 ">
        <div className="row ">
          <div className="col-xl-8 col-md-8 col-12 hero-left">
            {/* <Link
              className="nav-link text-button-choose-product text-white"
              to="/products"
            >
              CHỌN KÍNH NGAY
            </Link> */}
            <div className="">
              <div className="hero-target-icon">
                <p>Năm mới,</p>
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
          <div className="col-xl-4 col-md-4 col-12">
            <div className="hero-right d-flex text-algin-center">
              <img src={modelImage} alt="model" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
