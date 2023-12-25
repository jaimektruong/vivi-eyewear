import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageSlider.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import products from "../../assets/db/Product.json";

const ImageSteper = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section className="pt-5 pb-5">
        <div className="">
          <div className="top d-flex pt-3 px-3">
            <div className="col-6">
              <h2 className="mb-3"> Sản phẩm nổi bật</h2>
              <h5 className="mb-3"> Hàng trăm sản phẩm bắt trend mới nhất</h5>
            </div>
            <div className="col-6 text-right d-flex justify-content-end align-items-center">
              <button
                className="btn btn-primary mb-3 mr-1 mx-3"
                onClick={handlePrev}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
              <button className="btn btn-primary mb-3 " onClick={handleNext}>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="p-3 bot">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={product.image}
                          />
                          <div className="card-body">
                            <h4 className="card-title">{product.title}</h4>
                            <p className="card-text">{product.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageSteper;
