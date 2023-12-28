import "./StoresLocation.scss";
import brush from "../../assets/brush.png";
import store1 from "../../assets/store1.png";
import store2 from "../../assets/store2.png";
function StoresLocation() {
  return (
    <div className="location__container inner">
      <div className="location__top d-flex">
        <div className="location__title ">
          <div className="title">
            <h2 className="text-black">
              <span>ĐỊA ĐIỂM</span> <br />
              HỆ THỐNG CỬA HÀNG
            </h2>
          </div>
          <img src={brush} alt="brush" />
        </div>
        <div className="find justify-content-end">
          <button className="button-find btn--color-primary text-white">
            <i className="bi bi-cursor"></i> Tìm kiếm cơ sở
          </button>
        </div>
      </div>
      <div
        className="location__content d-flex justify-content-between
"
      >
        <div>
          <img src={store1} alt="store1" />
        </div>
        <div>
          <img src={store2} alt="store2" />
        </div>
      </div>
    </div>
  );
}

export default StoresLocation;
