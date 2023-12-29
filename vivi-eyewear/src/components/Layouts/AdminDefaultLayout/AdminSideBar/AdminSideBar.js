import "./AdminSideBar.scss";
import logo from "../../../../assets/logo.png";

function AdminSideBar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 text-white container-box">
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

      <ul className="nav nav-pills flex-column mb-auto ">
        <li className="nav-item nav-item-margin">
          <a href="#" className="nav-link-admin-sidebar" aria-current="page">
            Dashboard
          </a>
        </li>
        <li className="nav-item nav-item-margin">
          <a href="#" className="nav-link-admin-sidebar ">
            Đơn hàng
          </a>
        </li>
        <li className="nav-item nav-item-margin">
          <a href="#" className="nav-link-admin-sidebar ">
            Sản phẩm
          </a>
        </li>
        <li className="nav-item nav-item-margin">
          <a href="#" className="nav-link-admin-sidebar ">
            Tồn kho
          </a>
        </li>
        <li className="nav-item nav-item-margin">
          <a href="#" className="nav-link-admin-sidebar ">
            Khách hàng
          </a>
        </li>
        <li className="nav-item nav-item-margin">
          <a href="#" className="nav-link-admin-sidebar ">
            Quản trị viên
          </a>
        </li>
        <li className="nav-item nav-item-margin">
          <a href="#" className="nav-link-admin-sidebar ">
            Bài viết
          </a>
        </li>
        <li className="nav-item nav-item-margin">
          <a href="#" className="nav-link-admin-sidebar ">
            Khuyến mãi
          </a>
        </li>
        <li className="nav-item nav-item-margin">
          <a href="#" className="nav-link-admin-sidebar">
            Kết quả kinh doanh
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AdminSideBar;
