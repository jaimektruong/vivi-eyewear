import React, { useState } from "react";
import "./ProductsPage.scss";
import Recommended from "../../components/Recommended/Recommended";

import products from "../../db/data";
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

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({ img, title, newPrice }) => (
      <CardProduct
        key={Math.random()}
        img={img}
        title={title}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div>
        <Header query={query} handleInputChange={handleInputChange} />
        <div>
          <Sidebar handleChange={handleChange} />
          <Recommended handleClick={handleClick} />
          <section className="card-container">{result}</section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
