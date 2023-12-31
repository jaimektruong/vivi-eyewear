import "./FindGlasses.scss";
import brush from "../../assets/brush.png";
import glass1 from "../../assets/glass1.png";
import glass2 from "../../assets/glass2.png";

function FindGlasses() {
  return (
    <div className="findglasses__container d-flex flex-column inner">
      <div className="findglasses__top d-flex align-middle">
        <div className="findglasses__title ">
          <div className="title">
            <h2 className="text-black">
              <span>CHỌN KÍNH ONLINE</span> <br />
              TÌM KÍNH PHÙ HỢP
            </h2>
          </div>
          <img src={brush} alt="brush" />
        </div>
      </div>
      <div className="findglasses__content d-flex flex-column justify-content-between">
        <div className="findglasses__content-1 d-flex ">
          <img src={glass1} alt="glass1" />
          <div className="text-center my-5">
            <div className="rounded-circle  glasses-icon">
              <i className="bi bi-eyeglasses text-white"></i>
            </div>
            <h3>Kích thước khung</h3>
            <p>
              Lựa chọn kích thước khung phù hợp nhất để giúp dễ dàng vừa vặn,
              thoải mái và tiện lợi cho bạn.
            </p>
            <button>
              Cách đo khích thước khung của bạn{" "}
              <i className="bi bi-arrow-right "></i>
            </button>
          </div>
        </div>
        <div className="findglasses__content-2 d-flex align-middle">
          <div className="text-center  my-5">
            <div className="rounded-circle glasses-icon">
              <i className="bi bi-sunglasses text-white"></i>
            </div>
            <h3>Đo ống kính</h3>
            <p>
              Chúng tôi sẽ giới thiệu các loại ống kính tốt nhất dựa trên đơn
              thuốc của bạn. Để đặt mua kính, bạn cũng sẽ cần Khoảng cách đồng
              tử (PD).
            </p>
            <button>
              Cách đo khích thước PD của bạn <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <img src={glass2} alt="glass2" />
        </div>
      </div>
    </div>
  );
}

export default FindGlasses;
