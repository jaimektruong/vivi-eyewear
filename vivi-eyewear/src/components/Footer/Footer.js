import "./Footer.scss";
import Logo from "../../assets/logo.png";
import iconAppleStore from "../../assets/appstore.png";
import iconGooglePlay from "../../assets/googleplay.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="container-fluid d-flex flex-column p-0">
      <div className="footer__brand">
        <div className="container">
          <div className="align-middle ps-5">
            <img
              className="footer__brand--image align-middle"
              src={Logo}
              alt="logo"
            />
            <h1 className="footer__brand--text align-middle">Vivi Eyewear</h1>
          </div>
        </div>
      </div>
      <div className="footer__info footer__info--text">
        <div className="container" style={{ maxWidth: "max-content" }}>
          <div className="p-5">
            <div className="row w-100">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 py-5">
                <h5 className="text-uppercase">Sản phẩm</h5>
                <ul className="list-unstyled mb-0 text-white">
                  <li>
                    <Link className="nav-link" to="#!">
                      Gọng kính
                    </Link>
                  </li>
                  <li>
                    <a className="nav-link" href="#!">
                      Kính râm
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#!">
                      Tròng kính
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#!">
                      Phụ kiện
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 py-5">
                <h5 className="text-uppercase">Chính sách</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link className="nav-link" to="#!">
                      Hình thức thanh toán
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#!">
                      Chính sách mua hàng
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#!">
                      Chính sách giao hàng
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#!">
                      Chính sách bảo hành
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 py-5">
                <h5 className="text-uppercase">Thông tin liên hệ</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link className="nav-link" to="#!">
                      Điện thoại: 1900 6868
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#!">
                      Email: info@vivi.com
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#!">
                      Địa chỉ: 18 Đường 8, Quận 18
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 py-5">
                <h5 className="text-uppercase">Ứng dụng Vivi Eyewear</h5>
                <ul className="list-unstyled mb-0 d-flex">
                  <li>
                    <Link className="nav-link" to="#!">
                      <img
                        src={iconAppleStore}
                        alt="apple_store"
                        style={{ width: "135px" }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#!">
                      <img
                        src={iconGooglePlay}
                        alt="google_play"
                        style={{ width: "135px" }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
