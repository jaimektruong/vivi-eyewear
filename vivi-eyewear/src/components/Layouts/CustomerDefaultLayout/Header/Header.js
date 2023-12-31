import React, { useEffect, useState } from "react";
import Logo from "../../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../../../services/UserService";
import { resetUser } from "../../../../redux/slices/userSlice";
import CartButton from "../../../CartButton/CartButton";

const Header = ({ handleInputChange, query }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const handleLogin = () => {
    navigate("/sign-in");
  };
  console.log("user", user);

  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
    setLoading(false);
  }, [user?.name, user?.avatar]);
  // Hover sản phẩm
  const [isProductHovered, setIsProductHovered] = useState(false);

  const handleProductMouseEnter = () => {
    setIsProductHovered(true);
  };

  const handleProductMouseLeave = () => {
    setIsProductHovered(false);
  };

  return (
    <nav className="navbar navbar-expand-sm align-items-center p-0 container-fluid header__container">
      <div className="container container-header-styles header__container align-items-center ">
        <div className="row header__container">
          <Link className="navbar-brand col-xl-1 col-md-1 col-1" to="/">
            <img src={Logo} alt="Logo" style={{ width: "5rem" }} />
          </Link>
          <button
            className="navbar-toggler col-xl-0 col-md-0 col-11"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse col-xl-11 col-md-11 col-11 row container-header-styles "
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav navbar-gap-items col-xl-6 col-md-6 col-12 options-header-styles">
              <li className="nav-item text-white">
                <Link className="nav-link text-white" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item text-white ">
                <Link className="nav-link text-white" to="/ve-chung-toi">
                  Về chúng tôi
                </Link>
              </li>
              <li className="nav-item text-white ">
                <Link className="nav-link text-white" to="/bai-viet">
                  Bài viết
                </Link>
              </li>
              <li
                className="nav-item text-white "
                onMouseEnter={handleProductMouseEnter}
                onMouseLeave={handleProductMouseLeave}
              >
                <Link
                  to="/san-pham"
                  className="nav-link text-white"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={isProductHovered ? "true" : "false"}
                >
                  <span>
                    {" "}
                    Sản phẩm
                    <i className="bi bi-caret-down-fill dropdown-product-type-gap"></i>
                  </span>
                </Link>
                <div
                  className={`dropdown-menu ${isProductHovered ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/gong-kinh">
                    Gọng kính
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/kinh-ram">
                    Kính râm
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/trong-kinh">
                    Tròng kính
                  </Link>
                </div>
              </li>
            </ul>

            {/* Search */}
            <div className="form-inline col-xl-4 col-md-4 col-12">
              {" "}
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Nhập từ khoá cần tìm"
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
                style={{ width: "300px", height: "40px" }}
              />
            </div>
            <div className="col-xl-2 col-md-2 col-12 row">
              {/* Account */}
              <div className=" col-xl-6 col-md-6 col-6">
                {user?.access_token ? (
                  <div className="nav-item dropdown">
                    {userAvatar ? (
                      <img src={user.avatar} alt="avatar" className="" />
                    ) : (
                      <i className="bi bi-person-circle text-white"></i>
                    )}

                    <span className="text-white"> {user.name}</span>

                    <div
                      className={`dropdown-menu ${
                        isProductHovered ? "show" : ""
                      }`}
                      aria-labelledby="navbarDropdown"
                    >
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          navigate("/thong-tin-nguoi-dung");
                        }}
                      >
                        Thông tin người dùng
                      </button>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="account__button btn btn-primary account-button-header custom-no-hover-outline"
                    onClick={handleLogin}
                  >
                    <i className="bi bi-person-circle text-white fs-4"></i>
                  </button>
                )}
              </div>

              <div className="d-md-flex d-none justify-content-around col-xl-6 col-md-6 col-6">
                <CartButton value="0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
