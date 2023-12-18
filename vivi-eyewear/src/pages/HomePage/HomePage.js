import React from "react";
import "./HomePage.scss";
import ImageSteper from "../../components/ImageSlider/ImageSlider.js";
import Card from "../../components/Card/Card.js";
import imgHomePage from "../../assets/slider-1.jpg";
import img1 from "../../assets/chon-kinh-slider-1.jpg";
import img2 from "../../assets/chon-kinh-slider-2.jpg";
import img3 from "../../assets/chon-kinh.jpg";
import HomeProductBG from "../../assets/homeProductBG.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate();
  const TypeProductPage = () => {
    navigate("/vivi-eyewear/type");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="content">
        <div>
          <img
            src={imgHomePage}
            alt="pic"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div className="container d-block">
          <div className="pt-3 d-flex pic">
            <div className="col-6 p-2">
              <img
                src={img3}
                alt="pic"
                style={{ width: "100%", height: "23rem", borderRadius: "20px" }}
              />
            </div>
            <div className="col-3 p-2">
              <img
                src={img1}
                alt="pic"
                style={{ width: "100%", height: "23rem", borderRadius: "20px" }}
              />
            </div>
            <div className="col-3 p-2">
              <img
                src={img2}
                alt="pic"
                style={{ width: "100%", height: "23rem", borderRadius: "20px" }}
              />
            </div>
          </div>
          <div className="d-flex p-3">
            <div className="">
              <ImageSteper />
            </div>
          </div>
        </div>
        <div
          style={{
            background: `url(${HomeProductBG})`,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container d-block p-3 pt-5">
            <div
              className="title p-3"
              style={{
                background: `url(https://kinhmatanna.com/wp-content/uploads/2022/08/Vector-3-1.svg)`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="fs-5">HOT TREND</div>
              <div className="fs-1">HÀNG MỚI LÊN KỆ</div>
            </div>
            <div className="row pb-5">
              <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
                <Card />
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
                <Card />
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
                <Card />
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
                <Card />
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
                <Card />
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 d-flex justify-content-center align-items-center">
                <Card />
              </div>
              <div className="btn">
                <button
                  type="button outline"
                  className="btn btn-outline-primary"
                  onClick={TypeProductPage}
                >
                  Xem thêm sản phẩm
                </button>
              </div>
            </div>
            <div
              className="brand p-3"
              style={{
                background: `url(https://kinhmatanna.com/wp-content/uploads/2022/08/Vector-3-1.svg)`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="fs-5">CHỌN KÍNH ONLINE</div>
              <div className="fs-1">TÌM KÍNH PHÙ HỢP</div>
            </div>
            <div className="pt-3 d-flex">
              <div className="col-6  d-flex justify-content-center">
                <img
                  src="https://kinhmatanna.com/wp-content/uploads/2022/10/310399478_2061890187342925_5141986880618101888_n-1024x1024.jpg"
                  alt="pic"
                  style={{
                    width: "80%",
                    height: "100%",
                    borderRadius: "34px",
                  }}
                />
              </div>
              <div className="col-6 d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center">
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#BFE8E3",
                      width: "8rem",
                      height: "8rem",
                    }}
                  >
                    <img
                      src="https://kinhmatanna.com/wp-content/uploads//2022/07/g2.svg"
                      alt="pic"
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="fs-1 d-flex justify-content-center p-3"
                  style={{ color: "#81c8c2" }}
                >
                  Kích thước khung
                </div>
                <div className="fs-4 text-center">
                  Lựa chọn Kích thước khung phù hợp nhất để giúp dễ dàng vừa
                  vặn, thoải mái và tiện lợi cho bạn
                </div>
              </div>
            </div>
            <div className="pt-3 pb-5 d-flex">
              <div className="col-6 d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center">
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#BFE8E3",
                      width: "8rem",
                      height: "8rem",
                    }}
                  >
                    <img
                      src="https://kinhmatanna.com/wp-content/uploads//2022/07/g1.svg"
                      alt="pic"
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="fs-1 d-flex justify-content-center p-3"
                  style={{ color: "#81c8c2" }}
                >
                  Đo ống kính
                </div>
                <div className="fs-4 text-center">
                  Chúng tôi sẽ giới thiệu các loại ống kính tốt nhất dựa trên
                  đơn thuốc của bạn. Để đặt mua kính, bạn cũng sẽ cần Khoảng
                  cách đồng tử (PD).
                </div>
              </div>
              <div className="col-6 pb-3 d-flex justify-content-center">
                <img
                  src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-37.jpg"
                  alt="pic"
                  style={{
                    width: "80%",
                    height: "411px",
                    borderRadius: "34px",
                  }}
                />
              </div>
            </div>
            <div
              className="brand p-3"
              style={{
                background: `url(https://kinhmatanna.com/wp-content/uploads/2022/08/Vector-3-1.svg)`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="fs-5">ĐỊA ĐIỂM</div>
              <div className="fs-1">HỆ THỐNG CỬA HÀNG</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
