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
              className="nav-item text-white nav-link "
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isProductHovered ? "true" : "false"}
            >
              <span>
                {" "}
                Sản phẩm<i className="bi bi-caret-down-fill"></i>
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
        </div>
        {/* Account */}

        <div>
          {user?.access_token ? (
            <div className="nav-item dropdown">
              {userAvatar ? (
                <img
                  src={user.avatar}
                  alt="avatar"
                  style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                />
              ) : (
                <i className="bi bi-person-circle text-white fs-4"></i>
              )}

              <span className="text-white"> {user.name}</span>

              <div
                className={`dropdown-menu ${isProductHovered ? "show" : ""}`}
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
            <button className="account__button" onClick={handleLogin}>
              <i className="bi bi-person-circle text-white fs-4"></i>
            </button>
          )}
        </div>

        <div className="d-md-flex d-none justify-content-around">
          <CartButton value="0" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
