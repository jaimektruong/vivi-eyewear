import React, { useState } from "react";
import "./ProductsPage.scss";
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

  const filteredItems = records.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filter
  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

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

  return (
    <>
      <div>
        <Header query={query} handleInputChange={handleInputChange} />
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
