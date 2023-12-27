import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = ({ handleInputChange, query }) => {
  const [menu, setMenu] = useState("Home");
  const [isProductHovered, setIsProductHovered] = useState(false);

  const handleProductMouseEnter = () => {
    setIsProductHovered(true);
  };

  const navigate = useNavigate();
  const loginModalRef = useRef();
  const registerModalRef = useRef();

  const Home = () => {
    navigate("/vivi-eyewear");
  };

  return (
    <div
      className="header"
      style={{
        background:
          "url(https://kinhmatanna.com/wp-content/uploads/2022/07/bg-100.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderBottom: "1px solid #cccccc7a",
        color: "white",
      }}
    >
      <div className="pt-2">
        <div
          className="container justify-content-around justify-content-xl-between"
          style={{ height: "100px" }}
        >
          {/* Logo */}
          <div className="d-none d-xl-block">
            <img src={Logo} alt="Logo" style={{ width: "100px" }} />
          </div>
          <div className="col-xl-3">
            <div className="navb-items d-none d-xl-flex">
              <div className="item">
                <a href="/vivi-eyewear">Home</a>
              </div>
              <div className="item">
                <a href="/vivi-eyewear/news">News</a>
              </div>
              <div className="item">
                <a href="/vivi-eyewear/about">Contact</a>
              </div>
            </div>
          </div>
          {/* NAV here */}
          <div className="mobile-toggler d-xl-none">
            <button
              href="#"
              className="btn btn-outline-light"
              data-bs-toggle="modal"
              data-bs-target="#navbModal"
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
          {/* Search Field */}
          <div className="col-8 col-xl-3 mx-3">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                value={query}
                onChange={handleInputChange}
              />
              <button type="button" className="btn btn-outline-light">
                <i className="bi bi-search"></i>{" "}
              </button>
            </div>
          </div>

          <div className="d-none d-xl-flex col-xl-3 justify-content-evenly">
            <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-person-circle fs-4"></i>
              <div className="modal-login">
                <button
                  type="button"
                  className="login-container btn btn-link text-light"
                  data-bs-toggle="modal"
                  data-bs-target="#LoginModal"
                >
                  Sign In
                </button>
                /
                <button
                  type="button"
                  className="register-container btn btn-link text-light"
                  data-bs-toggle="modal"
                  data-bs-target="#RegisterModal"
                >
                  Sign Up
                </button>
              </div>
              {/* Modal Login */}
            </div>
          </div>
          <div className="modal-login">
            {/* Include Login and Register components here */}
          </div>

          <div className="d-md-flex d-none justify-content-around">
            {/* <Cart value="0" /> */}
          </div>
        </div>
        {/* Modal Login */}
        <div className="modal-menu">
          <div
            className="modal fade"
            id="navbModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-dismiss="modal"
          >
            <div className="modal-dialog">
              <div
                className="modal-content"
                style={{
                  background:
                    "url(https://kinhmatanna.com/wp-content/uploads/2022/07/bg-100.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="modal-header d-flex">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="col-11"
                    onClick={Home}
                  />
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="bi bi-x"></i>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-line">
                    <i className="bi bi-house-door-fill"></i>
                    <Link to="/vivi-eyewear">Home</Link>
                  </div>
                  <div className="modal-line">
                    <i className="bi bi-file-earmark-text-fill"></i>
                    <Link to="/vivi-eyewear/news">News</Link>
                  </div>
                  <div className="modal-line">
                    <i className="bi bi-telephone-fill"></i>
                    <Link to="/vivi-eyewear/contact">Contact</Link>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="bi bi-person-circle fs-4"></i>
                    <button
                      type="button"
                      className="login-container btn btn-link text-light"
                      data-bs-toggle="modal"
                      data-bs-target="#LoginModal"
                    >
                      Sign In
                    </button>
                    /
                    <button
                      type="button"
                      className="register-container btn btn-link text-light"
                      data-bs-toggle="modal"
                      data-bs-target="#RegisterModal"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="mobile-modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
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
          <i className="bi bi-search text-black fs-4"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
