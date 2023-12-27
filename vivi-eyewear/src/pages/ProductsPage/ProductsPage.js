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

  function filteredData(products, selected, query) {
    let filteredItems = products;

    if (query) {
      filteredItems = products.filter(
        (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    if (selected) {
      filteredItems = filteredItems.filter(
        ({ type, color, material, price, name }) =>
          type === selected ||
          color === selected ||
          material === selected ||
          price === selected ||
          name === selected
      );
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

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div>
        <Header query={query} handleInputChange={handleInputChange} />
        <div className="container d-block p-5">
        <div className="d-flex">
          <div className="col-3">
            <Sidebar handleChange={handleChange} />
          </div>
          <div className="container row">
          <section className="card-container">{result}</section>
          </div>
        </div>
          <Recommended handleClick={handleClick} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
