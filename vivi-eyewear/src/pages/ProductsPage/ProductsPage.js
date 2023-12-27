import React, { useState } from "react";
import "./ProductsPage.scss";
import products from "../../assets/db/Product.json";
import CardProduct from "../../components/CardProduct/CardProduct";
import Sidebar from "../../components/SideBar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useParams } from "react-router-dom";

const ProductsPage = () => {
  const { type } = useParams();
  let Tproducts;
  if (type) {
    Tproducts = products.filter((product) => product.type === type);
  } else {
    Tproducts = products;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const recoordsPerPage = 12;
  const lastIndex = currentPage * recoordsPerPage;
  const firstIndex = lastIndex - recoordsPerPage;
  const records = Tproducts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Tproducts.length / recoordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [selectedCategory, setSelectedCategory] = useState(null); // Added missing state
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(records, selectedCategory, query) {
    let filteredItems = records;
    if (query) {
      filteredItems = records.filter(
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

    return filteredItems.map(({ name, image_thumb, price }) => (
      <Link className="nav-link" to={`/san-pham/${name}`} key={name}>
        <CardProduct image={image_thumb} name={name} price={price} />
      </Link>
    ));
  }

  const result = filteredData(records, selectedCategory, query);

  return (
    <>
      <div>
        <Header query={query} handleInputChange={handleInputChange} />
        <div className="d-flex flex-column inner">
          <div className="d-flex inner gap-2">
            <div className="">
              <Sidebar handleChange={handleChange} />
            </div>
            <div className="container d-flex flex-column gap-3">
              <section className="card-container d-flex flex-wrap gap-3">
                {result}
              </section>
              <nav className="text-center pagination-container">
                <ul className="pagination text-center">
                  <li className="page-item">
                    <a href="##" className="page-link" onClick={prevPage}>
                      Prev
                    </a>
                  </li>
                  {numbers.map((n, i) => (
                    <li
                      className={`page-item ${
                        currentPage === n ? "active" : ""
                      }`}
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
        </div>
      </div>

      <Footer />
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
