import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturedProducts.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import products from "../../assets/db/Product.json";
import { Link } from "react-router-dom";
const FeaturedProducts = (props) => {
  // Assume products is an array of product objects
  // Filter featured products
  const featuredProducts = products.filter(
    (product) => product.featuredFlag === 1
  );

  // Define the number of cards per page
  const cardsPerPage = 5;

  // Function to chunk array into smaller arrays
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // Use the chunkArray function to create an array of arrays with 5 products each
  const cardList = chunkArray(featuredProducts, cardsPerPage);

  // Rest of your component logic...

  return (
    <>
      <section className="featured-product--container d-flex flex-column justify-content-center inner">
        <div className="featured-product--tile align-self-start">
          <h2 className="featured-product--tile-size-style">
            Sản phẩm nổi bật
          </h2>
        </div>

        <div
          id="carouselExampleIndicators2"
          className="carousel slide d-flex align-items-center justify-content-center"
          data-bs-ride="carousel"
          data-bs-interval="4000" // Tự động chuyển trang sau mỗi 4 giây
        >
          <a
            className="btn btn-color rounded-circle button--left"
            href="#carouselExampleIndicators2"
            role="button"
            data-bs-slide="prev"
          >
            <i className="bi bi-chevron-left text-white"></i>
          </a>

          <div className="carousel-inner">
            {cardList.map((cardArray, index) => (
              <div
                key={index}
                className={`carousel-item  ${index === 0 ? "active" : ""}`}
              >
                <div className="row flex-row gap-2 m-1">
                  {cardArray.map((cardF) => (
                    <div className="featured-card" key={cardF.id}>
                      <Link className="nav-link" to={`/san-pham/${cardF.name}`}>
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={cardF.image_thumb}
                          width={"196px"}
                        />
                        <div className="card-body">
                          <h4 className="card-title">{cardF.name}</h4>
                          <p className="card-text">{cardF.price}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <a
            className="btn btn-color rounded-circle button--right"
            href="#carouselExampleIndicators2"
            role="button"
            data-bs-slide="next"
          >
            <i className="bi bi-chevron-right text-white"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
