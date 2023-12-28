import "./index.scss";
import AdminSideBar from "./AdminSideBar/AdminSideBar";

function AdminDefaultLayout({ children }) {
  return (
    <div className="container-fluid p-0 m-0 d-flex">
      <AdminSideBar />
      <div className="content container-fluid m-0 p-0">{children}</div>
    </div>
  );
}

export default AdminDefaultLayout;
