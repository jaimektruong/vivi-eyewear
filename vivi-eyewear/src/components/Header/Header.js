import "./Header.scss";
import { useState, useRef } from "react";
import Logo from "../../assets/logo.png";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  return (
    <>
      <button
        variant="outline-secondary"
        size="sm"
        className="d-flex align-items-center pt-2 pb-2 fs-5 border rounded p-2"
        style={{ backgroundColor: "transparent", color: "white" }}
      >
        <i className="bi bi-cart me-3"></i>
        Cart
        <span
          className="ms-3 text-center"
          style={{
            width: "20px",
            height: "25px",
            borderRadius: "10px",
            background: "yellow",
            color: "#000",
            fontWeight: "700",
            fontSize: "15px",
            lineHeight: "25px",
          }}
        >
          {props.value}
        </span>
      </button>
    </>
  );
}
const BUTTONSTYLE = {
  width: "fit-content",
  padding: "0",
  minWidth: "0",
};

const TIPS = [
  { title: "You will better with us" },
  { title: "See better than yesterday" },
  { title: "THÊM CAPTION ĐI" },
];

const TUTORIALS = [
  {
    title: "Shopping guide",
    icon: "📖",
  },
  {
    title: "Customer incentives",
    icon: "⚙️",
  },
  {
    title: "Contact Info",
    icon: "	📞",
  },
];

const Header = (props) => {
  const [Inf, setInf] = useState(0);

  const NextHandle = () => {
    const numShow = Inf + 1 > TIPS.length - 1 ? 0 : Inf + 1;
    return setInf(numShow);
  };

  const BackHandle = () => {
    const numShow = Inf - 1 < 0 ? TIPS.length - 1 : Inf - 1;
    return setInf(numShow);
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
          {/* NAV ở đây */}
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
              />
              <button type="button" className="btn btn-outline-light">
                <i className="bi bi-search"></i>{" "}
              </button>
            </div>
          </div>

          <div className="d-none d-xl-flex col-xl-3 justify-content-evenly">
            <div className="d-flex justify-content-center  align-items-center">
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
            <Login ref={loginModalRef} />
            <Register ref={registerModalRef} />
          </div>

          <div className="d-md-flex d-none justify-content-around">
            <Cart value="0" />
          </div>
        </div>
        {/* Modal Login */}
        <div className="modal-menu">
          <div
            className="modal fade hide"
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
                    <a href="/vivi-eyewear">Home</a>
                  </div>
                  <div className="modal-line">
                    <i className="bi bi-file-earmark-text-fill"></i>
                    <a href="/vivi-eyewear/news">News</a>
                  </div>
                  <div className="modal-line">
                    <i className="bi bi-telephone-fill"></i>
                    <a href="/vivi-eyewear/contact">Contact</a>
                  </div>
                  <div className="d-flex justify-content-center  align-items-center">
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
      </div>
      <div
        className="container d-none d-xl-flex justify-content-evenly"
        style={{}}
      >
        <div className="button d-flex">
          <button
            type="button"
            className="btn"
            style={BUTTONSTYLE}
            onClick={BackHandle}
          >
            <i className="bi bi-chevron-double-left text"></i>
          </button>
          <button
            type="button"
            className="btn"
            style={BUTTONSTYLE}
            onClick={NextHandle}
          >
            <i className="bi bi-chevron-double-right text"></i>
          </button>
          <div className="d-flex align-items-center ms-2">
            {TIPS[Inf].title}
          </div>
        </div>
        <div>
          {TUTORIALS &&
            TUTORIALS.map((inf) => {
              return (
                <button type="button" className="btn text" key={inf.title}>
                  <div className="d-flex">
                    <div className="icon"> {inf.icon}</div>
                    {inf.title}
                  </div>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Header;
