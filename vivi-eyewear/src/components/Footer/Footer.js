import "./Footer.scss";
import iconAppleStore from "../../assets/appstore.png";
import iconGooglePlay from "../../assets/googleplay.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="container-fluid d-flex flex-column p-0">
      <div className="footer__info footer__info--text">
        <div className="inner">
          <div className="p-5 ">
            <div className="row d-flex justify-content-between">
              <div className=" footer__item">
                <h4 className="footer-title">Sản phẩm</h4>
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
                </ul>
              </div>

              <div className="footer__item">
                <h4 className="footer-title">Chính sách</h4>
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

              <div className="footer__item">
                <h4 className="footer-title">Thông tin liên hệ</h4>
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

              <div className="footer__item">
                <h4 className="footer-title">Ứng dụng Vivi Eyewear</h4>
                <ul className="list-unstyled mb-0 d-flex">
                  <li>
                    <Link className="nav-link" to="#!">
                      <img
                        src={iconAppleStore}
                        alt="apple_store"
                        style={{ height: "40px" }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="#!">
                      <img
                        src={iconGooglePlay}
                        alt="google_play"
                        style={{ height: "40px" }}
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
