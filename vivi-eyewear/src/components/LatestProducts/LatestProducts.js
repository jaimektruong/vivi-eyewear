import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LatestProducts.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import BG from "../../assets/homeProductBG.jpg";
import brush from "../../assets/brush.png";
import CardProduct from "../CardProduct/CardProduct";
import products from "../../assets/db/Product.json";

const LatestProducts = (props) => {
  // Sắp xếp mảng dựa trên createAt
  const sortedCardList = products
    .filter((product) => product.createAt) // Filter out entries without createAt
    .sort((a, b) => {
      const dateA = new Date(a.createAt.$date);
      const dateB = new Date(b.createAt.$date);
      return dateB - dateA;
    });

  // Chọn 10 sản phẩm đầu tiên
  const latestProducts = sortedCardList.slice(0, 10);

  return (
    <section className="latest-product__contaienr d-flex flex-column justify-content-center">
      <div className="latest-products__background container-fluid">
        <img src={BG} alt="background" width="100%" />
      </div>
      <div className="inner latest-products__content d-flex flex-column">
        <div className="latest-products__title ">
          <div className="title">
            <h2 className="text-white">
              <span>HOT TREND</span> <br />
              HÀNG MỚI LÊN KỆ
            </h2>
          </div>
          <img src={brush} alt="brush" />
        </div>
        <div className="latest-products__list d-flex flex-wrap justify-content-center gap-3">
          {latestProducts.map(({ _id, name, image_thumb, price }) => (
            <Link key={_id} className="nav-link" to={`/san-pham/${name}`}>
              <CardProduct image={image_thumb} name={name} price={price} />
            </Link>
          ))}
        </div>
        <div className="view-all__container d-flex justify-content-center my-3">
          <button className="view-all__button">
            <Link className="nav-link py-2" to="/san-pham">
              {" "}
              Xem tất cả{" "}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
