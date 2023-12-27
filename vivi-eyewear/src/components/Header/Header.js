import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

const Header = ({ handleInputChange, query }) => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState("Home");

  const handleLogin = () => {
    navigate("/sign-in");
  };
  const handleRegister = () => {
    navigate("/sign-up");
  };

  // Hoover sản phẩm
  const [isProductHovered, setIsProductHovered] = useState(false);

  const handleProductMouseEnter = () => {
    setIsProductHovered(true);
  };

  const handleProductMouseLeave = () => {
    setIsProductHovered(false);
  };

  return (
    <header className="header__container">
      <nav className="navbar navbar-expand-lg inner d-flex align-items-center p-0 ">
        <Link className="navbar-brand p-0 text-white" to="/">
          <img src={Logo} alt="Logo" style={{ width: "80px" }} />
        </Link>
        <ul className="navbar-nav">
          <li
            className={`nav-item text-white ${menu === "home" ? "active" : ""}`}
            onClick={() => setMenu("home")}
          >
            <Link className="nav-link text-white" to="/">
              Trang chủ
            </Link>
          </li>
          <li
            className={`nav-item text-white ${
              menu === "about-us" ? "active" : ""
            }`}
            onClick={() => setMenu("about-us")}
          >
            <Link className="nav-link text-white" to="/ve-chung-toi">
              Về chúng tôi
            </Link>
          </li>
          <li
            className={`nav-item text-white ${
              menu === "blogs" ? "active" : ""
            }`}
            onClick={() => setMenu("blogs")}
          >
            <Link className="nav-link text-white" to="/blogs">
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
              to="/san-pham"
              onClick={() => setMenu("products")}
              className={`nav-link text-white dropdown-toggle ${
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
              <div className="dropdown-divider"></div>
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
            </div>
          </li>
        </ul>
        {/* Search */}
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
          {/* Account */}
        </div>

        <div
          onClick={() => setMenu("products")}
          className={`nav-item dropdown ${isProductHovered ? "show" : ""} ${
            menu === "products" ? "active" : ""
          }`}
          onMouseEnter={handleProductMouseEnter}
          onMouseLeave={handleProductMouseLeave}
        >
          <Link
            to="/san-pham"
            onClick={() => setMenu("products")}
            className={`nav-link text-white dropdown-toggle ${
              menu === "products" ? "active" : ""
            }`}
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={isProductHovered ? "true" : "false"}
          >
            <i className="bi bi-person-circle text-white fs-4"></i>
          </Link>
          <div
            className={`dropdown-menu ${isProductHovered ? "show" : ""}`}
            aria-labelledby="navbarDropdown"
          >
            <button className="dropdown-item" onClick={handleLogin}>
              Login
            </button>

            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>

        <div className="d-md-flex d-none justify-content-around">
          <Cart value="0" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
