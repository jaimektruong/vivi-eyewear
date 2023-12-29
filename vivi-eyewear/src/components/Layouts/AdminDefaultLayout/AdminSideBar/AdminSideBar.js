import "./AdminSideBar.scss";
import logo from "../../../../assets/logo.png";
import { Link } from "react-router-dom";

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
          <Link to="/admin" className="nav-link" aria-current="page">
            Dashboard
          </Link>
        </li>
        <li className="nav-item nav-item-margin">
          <Link to="#" className="nav-link ">
            Đơn hàng
          </Link>
        </li>
        <li className="nav-item nav-item-margin">
          <Link to="/admin/quan-ly-san-pham" className="nav-link ">
            Sản phẩm
          </Link>
        </li>

        <li className="nav-item nav-item-margin">
          <Link to="/admin/quan-ly-khach-hang" className="nav-link ">
            Khách hàng
          </Link>
        </li>
        <li className="nav-item nav-item-margin">
          <Link to="/admin/quan-ly-admin" className="nav-link ">
            Quản trị viên
          </Link>
        </li>
        <li className="nav-item nav-item-margin">
          <Link to="/admin/quan-ly-blogs" className="nav-link ">
            Bài viết
          </Link>
        </li>
        <li className="nav-item nav-item-margin">
          <Link to="/admin/quan-ly-khuyen-mai" className="nav-link ">
            Khuyến mãi
          </Link>
        </li>
        <li className="nav-item nav-item-margin">
          <Link to="/admin/ket-qua-kinh-doanh" className="nav-link">
            Kết quả kinh doanh
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSideBar;
