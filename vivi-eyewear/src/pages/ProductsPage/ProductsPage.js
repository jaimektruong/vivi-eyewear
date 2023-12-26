import React, { useState } from "react";
import "./ProductsPage.scss";
import Recommended from "../../components/Recommended/Recommended";
import products from "../../assets/db/Product.json";
import CardProduct from "../../components/CardProduct/CardProduct";
import Sidebar from "../../components/SideBar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData() {
    let filteredItems = products;

    if (query) {
      filteredItems = products.filter(
        (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    if (selectedCategory) {
      filteredItems = filteredItems.filter((item) => {
        const price = parseInt(item.price);
        if (selectedCategory === "500000") {
          return price <= 500000;
        } else if (selectedCategory === "700000") {
          return price > 500000 && price <= 700000;
        } else if (selectedCategory === "800000") {
          return price > 700000;
        } else {
          return (
            item.type === selectedCategory ||
            item.color === selectedCategory ||
            item.material === selectedCategory
          );
        }
      });
    }
    return filteredItems.map(({ image, name, price }) => (
      <CardProduct
        key={Math.random()}
        img={image}
        title={name}
        newPrice={price}
      />
    ));
  }

  const result = filteredData();

  return (
    <>
      <div>
        <Header query={query} handleInputChange={handleInputChange} />
        <div className="d-block p-5">
        <Recommended handleClick={handleClick} />

        <div className="d-flex">
          <div className="col-3 px-5 mx-5">
            <Sidebar handleChange={handleChange} />
          </div>
          <div className="container row">
          <section className="card-container">{result}</section>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
