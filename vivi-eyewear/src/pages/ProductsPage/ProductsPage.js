import React, { useState } from "react";
import "./ProductsPage.scss";
<<<<<<< HEAD
=======
import Recommended from "../../components/Recommended/Recommended";
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
import products from "../../assets/db/Product.json";
import CardProduct from "../../components/CardProduct/CardProduct";
import Sidebar from "../../components/SideBar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useParams } from "react-router-dom";

const ProductsPage = () => {
  // ========= Pagination =========
  const { type } = useParams();
  let Tproducts;

  if (type) {
    Tproducts = products.filter((product) => product.type === type);
  } else {
    // Nếu không có giá trị type, hiển thị tất cả sản phẩm
    Tproducts = products;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const recoordsPerPage = 12;
  const lastIndex = currentPage * recoordsPerPage;
  const firstIndex = lastIndex - recoordsPerPage;
  const records = Tproducts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Tproducts.length / recoordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [selectedType, setSelectedType] = useState(null);

  // ========= Filter ========
  // Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

<<<<<<< HEAD
  const filteredItems = records.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

=======
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
  // Radio Filter
  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

<<<<<<< HEAD
  function filteredData(records, selected, query) {
    let filteredProducts = records;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ material, color, price, name }) =>
          material === selected ||
          color === selected ||
          price === selected ||
          name === selected
      );
    }

    return filteredProducts.map(({ name, image, price }) => {
      return (
        <Link className="nav-link" to={`/products/${name}`}>
          <CardProduct
            key={Math.random()}
            image={image}
            name={name}
            price={price}
          />
        </Link>
      );
    });
  }

  const result = filteredData(records, selectedType, query);
=======
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
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f

  return (
    <>
      <div>
        <Header query={query} handleInputChange={handleInputChange} />
<<<<<<< HEAD
        <div className="product-container">
          <Sidebar handleChange={handleChange} />
          <div className="product-content">
            <section className="card-container">{result}</section>

            {/* ========= Pagination ========= */}
            <nav className="pagination-container text-center">
              <ul className="pagination text-center">
                <li className="page-item">
                  <a href="##" className="page-link" onClick={prevPage}>
                    Prev
                  </a>
                </li>
                {numbers.map((n, i) => (
                  <li
                    className={`page-item ${currentPage === n ? "active" : ""}`}
                    key={i}
                  >
                    <a
                      href="##"
                      className="page-item"
                      onClick={() => changeCPage(n)}
                    >
                      {n}
                    </a>
                  </li>
                ))}
                <li className="page-item">
                  <a href="##" className="page-link" onClick={nextPage}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
=======
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
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
        </div>

        <Footer />
      </div>
    </>
  );
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default ProductsPage;
