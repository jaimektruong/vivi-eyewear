import React, { useState } from "react";
import "./AdminManagementPage.scss";
const AdminManagementPage = () => {
  const [admins, setAdmins] = useState([
    // Dữ liệu mẫu của danh sách quản trị viên
    {
      id: 1,
      name: "John Doe",
      dateOfBirth: "1990-01-01",
      role: "Quản lý",
      gender: "Nữ",
      phone: "1234567890",
      avatar: "../assets/minhhoa.jpg", // Đường dẫn đến hình ảnh avatar
    },
    {
      id: 2,
      name: "John Doe",
      dateOfBirth: "1990-01-01",
      role: "Quản lý",
      gender: "Nữ",
      phone: "1234567890",
      avatar: "URL_HINH_ANH_QUAN_TRI_VIEN", // Đường dẫn đến hình ảnh avatar
    },
    {
      id: 3,
      name: "John Doe",
      dateOfBirth: "1990-01-01",
      role: "Quản Lý",
      gender: "Nữ",
      phone: "1234567890",
      avatar: "URL_HINH_ANH_QUAN_TRI_VIEN", // Đường dẫn đến hình ảnh avatar
    },
    // Thêm quản trị viên khác nếu cần
  ]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(0);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setSelectedCheckboxes((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );
  };
  const handleEditClick = (adminId) => {
    // Xử lý sự kiện chỉnh sửa quản trị viên
    console.log(`Edit clicked for admin with ID ${adminId}`);
  };

  const handleDeleteClick = (adminId) => {
    // Xử lý sự kiện xoá quản trị viên
    const updatedAdmins = admins.filter((admin) => admin.id !== adminId);
    setAdmins(updatedAdmins);
  };
  const initialSearchValue = ""; // Giá trị ban đầu của ô tìm kiếm
  const initialSelectedRole = "Chức vụ"; // Giá trị ban đầu của dropdown chức vụ
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const [selectedRole, setSelectedRole] = useState(initialSelectedRole);

  // Khai báo state và các hàm xử lý cho các chức năng filter khác

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // Thực hiện các bước tìm kiếm dựa trên searchValue
  };

  const handleRoleSelect = (event) => {
    setSelectedRole(event.target.value);
    // Thực hiện các bước tìm kiếm dựa trên selectedRole
  };
  const handleLoadFromFile = () => {
    // Xử lý chức năng tải từ file
  };

  const handleExportToExcel = () => {
    // Xử lý chức năng xuất Excel
  };

  const handleCopy = () => {
    // Xử lý chức năng sao chép
  };

  const handleDelete = () => {
    // Xử lý chức năng xóa
  };

  const handleReset = () => {
    setSearchValue(initialSearchValue); // Đặt lại giá trị ô tìm kiếm
    setSelectedRole(initialSelectedRole);
  };
  return (
    <div className="admin-management-page">
      {/* <div className="main-content"> */}
        <div className="header">
          <h2>QUẢN LÝ QUẢN TRỊ VIÊN</h2>
          <button className="add-admin-button">Thêm quản trị viên</button>
        </div>
        <h5>Danh sách quản trị viên</h5>
        <div className="filter-frame">
          <div className="filter-row">
            {/* Thanh search */}
            <input
              type="text"
              placeholder="Tìm kiếm quản trị viên..."
              value={searchValue}
              onChange={handleSearchChange}
            />

            {/* Dropdown chức vụ */}
            <select value={selectedRole} onChange={handleRoleSelect}>
              <option value="">Chức vụ</option>
              <option value="manager">Quản lý</option>
              <option value="staff">Nhân viên</option>

              {/* Các options cho dropdown chức vụ */}
            </select>
            {/* Button đặt lại (reset) */}
            <button id="reset" onClick={handleReset}>
              Đặt lại
            </button>
          </div>

          <div className="filter-row">
            <div>Đã chọn: {selectedCheckboxes}</div>
            {/* Button tải từ file */}
            <button onClick={handleLoadFromFile}>Tải từ file</button>
             {/* Button sao chép */}
             <button onClick={handleCopy}>Sao chép</button>
            {/* Button xuất Excel */}
            <button onClick={handleExportToExcel}>Xuất Excel</button>
            {/* Button xóa */}
            <button onClick={handleDelete}>Xóa</button>
          </div>
        </div>
        <table className="admin-table">
=======

        <table className="admin-table-admin">
>>>>>>> 39fbb8b44145e1065ba0bc894f617fbed3817096
          <thead>
            <tr className ="admin-table-title">
              <th>
                <input type="checkbox" /> Tất cả
              </th>
              <th>ID</th>
              <th>Họ tên</th>
              <th>Ngày sinh</th>
              <th>Chức vụ</th>
              <th>Giới tính</th>
              <th>Số điện thoại</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody className ="admin-table-body">
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td>
                  <input type="checkbox" onChange={handleCheckboxChange} />
                </td>
                <td>
                  <img src={admin.avatar} alt={`Avatar of ${admin.name}`} />
                  <p>ID: {admin.id}</p>
                </td>
                <td>{admin.name}</td>
                <td>{admin.dateOfBirth}</td>
                <td>{admin.role}</td>
                <td>{admin.gender}</td>
                <td>{admin.phone}</td>
                <td className="action-column">
                  <div>
                    <a href={`/edit/${admin.id}`}>Chỉnh sửa</a>
                  </div>
                  <div>
                    <a href={`/delete/${admin.id}`}>Xóa</a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      {/* </div> */}
    </div>
  );
};

export default AdminManagementPage;
