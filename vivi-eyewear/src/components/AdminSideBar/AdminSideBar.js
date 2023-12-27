// AdminSideBar.js

import "./AdminSideBar.scss";
import logo from "../../assets/logo.png";

function AdminSideBar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white container-box">
      <div className="logo-box">
        <img src={logo} alt="Logo"></img>
      </div>
      <div className="d-flex justify-content-evenly">
        <div>
          <i className="bi bi-person button-icon"></i>
        </div>
        <div>
          <i className="bi bi-gear button-icon"></i>
        </div>
        <div>
          <i className="bi bi-bell button-icon"></i>
        </div>
      </div>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link ">
            Đơn hàng
          </a>
        </li>
        <li>
          <a href="#" className="nav-link ">
            Sản phẩm
          </a>
        </li>
        <li>
          <a href="#" className="nav-link ">
            Tồn kho
          </a>
        </li>
        <li>
          <a href="#" className="nav-link ">
            Khách hàng
          </a>
        </li>
        <li>
          <a href="#" className="nav-link ">
            Quản trị viên
          </a>
        </li>
        <li>
          <a href="#" className="nav-link ">
            Bài viết
          </a>
        </li>
        <li>
          <a href="#" className="nav-link ">
            Khuyến mãi
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Kết quả kinh doanh
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AdminSideBar;
