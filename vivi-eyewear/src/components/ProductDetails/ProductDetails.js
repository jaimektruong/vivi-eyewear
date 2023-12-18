import "./ProductDetails.scss";
import React, { useState } from "react";

const ProductDetails = () => {
  const [value, setValue] = useState(0);

  const handleMinusClick = () => {
    setValue(value - 1);
  };

  const handlePlusClick = () => {
    setValue(value + 1);
  };
  return (
    <>
      <div className="d-md-flex">
        <div className="col-md-6">
          <div className="main-image d-flex justify-content-center">
            <img
              src="https://kinhmatanna.com/wp-content/uploads/2023/03/6019..jpg"
              alt="Gọng kính 380CK076"
            />
          </div>
          <div className="small-img d-none d-xl-flex justify-content-center">
            <img
              src="https://kinhmatanna.com/wp-content/uploads/2023/03/6019-100x100.jpg"
              alt="pic"
            />
            <img
              src="https://kinhmatanna.com/wp-content/uploads/2023/03/6019-100x100.jpg"
              alt="pic"
            />
            <img
              src="https://kinhmatanna.com/wp-content/uploads/2023/03/6019-100x100.jpg"
              alt="pic"
            />
            <img
              src="https://kinhmatanna.com/wp-content/uploads/2023/03/6019-100x100.jpg"
              alt="pic"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start">
          <div className="productName fs-2 pb-3">GK-380CK076</div>
          <div className="price py-1 fs-2 px-3">500.000đ</div>
          <div className="details d-flex flex-column fs-4 pt-3">
            <span>Mã sản phẩm: 380CK076</span>
            <span>Chất liệu: Nhựa Acetate</span>
            <span>Màu sắc: Ghi, đen bóng</span>
          </div>
          <div className="cod pt-3 fs-5">
            <i className="bi bi-truck">
              {" "}
              Miễn phí giao hàng từ 500k ( vận chuyển 3 - 5 ngày )
            </i>
          </div>
          <div className="count pt-3 fs-4">
            Số lượng
            <div className="input-group d-flex mb-3 pt-2">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleMinusClick}
              >
                <i class="bi bi-dash-lg"></i>{" "}
              </button>
              <input
                type="number"
                className="form-control text-center"
                value={value}
                readOnly
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handlePlusClick}
              >
                <i class="bi bi-plus-lg"></i>{" "}
              </button>
            </div>
          </div>
          <div>
            <button type="button" class="btn btn-danger">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
