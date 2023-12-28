import AdminSideBar from "./AdminSideBar/AdminSideBar";

function AdminDefaultLayout({ children }) {
  return (
    <div className="container-fluid d-flex">
      <AdminSideBar />
      <div className="content">{children}</div>
    </div>
  );
}

export default AdminDefaultLayout;
