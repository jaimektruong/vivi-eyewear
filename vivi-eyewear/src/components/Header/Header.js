import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = ({ handleInputChange, query }) => {
  const [menu, setMenu] = useState("Home");

  // Hoover sản phẩm
  const [isProductHovered, setIsProductHovered] = useState(false);

  const handleProductMouseEnter = () => {
    setIsProductHovered(true);
  };

  const handleProductMouseLeave = () => {
    setIsProductHovered(false);
  };

  return (
    <header className="bg-dark">
      <nav className="navbar navbar-expand-lg inner d-flex align-items-center p-0">
        <Link className="navbar-brand p-0" to="/">
          <img src={Logo} alt="Logo" style={{ width: "80px" }} />
        </Link>
        <ul className="navbar-nav">
          <li
            className={`nav-item text-white ${menu === "home" ? "active" : ""}`}
            onClick={() => setMenu("home")}
          >
            <Link className="nav-link" to="/">
              Trang chủ
            </Link>
          </li>
          <li
            className={`nav-item text-white ${
              menu === "about-us" ? "active" : ""
            }`}
            onClick={() => setMenu("about-us")}
          >
            <Link className="nav-link" to="/about-us">
              Về chúng tôi
            </Link>
          </li>
          <li
            className={`nav-item text-white ${
              menu === "blogs" ? "active" : ""
            }`}
            onClick={() => setMenu("blogs")}
          >
            <Link className="nav-link" to="/blogs">
              Bài viết
            </Link>
          </li>
          <li
            onClick={() => setMenu("products")}
            className={`nav-item dropdown ${isProductHovered ? "show" : ""} ${
              menu === "products" ? "active" : ""
            }`}
            onMouseEnter={handleProductMouseEnter}
            onMouseLeave={handleProductMouseLeave}
          >
            <Link
              to="/products"
              onClick={() => setMenu("products")}
              className={`nav-link dropdown-toggle ${
                menu === "products" ? "active" : ""
              }`}
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isProductHovered ? "true" : "false"}
            >
              Sản phẩm
            </Link>
            <div
              className={`dropdown-menu ${isProductHovered ? "show" : ""}`}
              aria-labelledby="navbarDropdown"
            >
              <Link
                className="dropdown-item"
                to="/gong-kinh"
                onClick={() => setMenu("gong-kinh")}
              >
                Gọng kính
              </Link>
              <Link
                className="dropdown-item"
                to="/kinh-ram"
                onClick={() => setMenu("kinh-ram")}
              >
                Kính râm
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to="/trong-kinh"
                onClick={() => setMenu("trong-kinh")}
              >
                Tròng kính
              </Link>
              <Link
                className="dropdown-item"
                to="/phu-kien"
                onClick={() => setMenu("phu-kien")}
              >
                Phụ kiện
              </Link>
            </div>
          </li>
        </ul>
        <div className="form-inline d-flex">
          {" "}
          <input
            className="form-control mr-sm-2 "
            type="search"
            placeholder="Nhập từ khoá cần tìm"
            aria-label="Search"
            value={query}
            onChange={handleInputChange}
          />
          <i class="bi bi-search text-black fs-4"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
