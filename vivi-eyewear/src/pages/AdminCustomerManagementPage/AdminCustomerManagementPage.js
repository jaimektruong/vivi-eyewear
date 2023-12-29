import React, { useState } from "react";
import "./AdminCustomerManagement.scss";
import CustomerList from "../../components/CustomerList/CustomerList";

const AdminCustomerManagementPage = () => {
  const [customers, setCustomers] = useState([
    {
      name: "John Doe",
      dateOfBirth: "1990-01-01",
      group: "Admin",
      gender: "Male",
      phone: "1234567890",
      avatar: "../assets/minhhoa.jpg",
    },
    {
      name: "John Doe",
      dateOfBirth: "1990-01-01",
      group: "Admin",
      gender: "Male",
      phone: "1234567890",
      avatar: "URL_HINH_ANH_QUAN_TRI_VIEN",
    },
    {
      name: "John Doe",
      dateOfBirth: "1990-01-01",
      group: "Admin",
      gender: "Male",
      phone: "1234567890",
      avatar: "URL_HINH_ANH_QUAN_TRI_VIEN",
    },
    // More customer data if needed
  ]);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState(0);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setSelectedCheckboxes((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );
  };

  const handleEditClick = (customerId) => {
    console.log(`Edit clicked for customer with ID ${customerId}`);
  };

  const handleDeleteClick = (customerId) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== customerId
    );
    setCustomers(updatedCustomers);
  };

  const initialSearchValue = "";
  const initialSelectedRole = "Nhóm";
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const [selectedRole, setSelectedRole] = useState(initialSelectedRole);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // Handle search based on searchValue
  };

  const handleRoleSelect = (event) => {
    setSelectedRole(event.target.value);
    // Handle search based on selectedRole
  };

  const handleLoadFromFile = () => {
    // Handle load from file functionality
  };

  const handleExportToExcel = () => {
    // Handle export to excel functionality
  };

  const handleCopy = () => {
    // Handle copy functionality
  };

  const handleDelete = () => {
    // Handle delete functionality
  };

  const handleReset = () => {
    setSearchValue(initialSearchValue);
    setSelectedRole(initialSelectedRole);
  };

  return (
    <div className="admin-management-page">
      <div className="main-content">
        <div className="header">
          <h2>QUẢN LÝ KHÁCH HÀNG</h2>
          <button>
            <i className="bi bi-person-plus"></i> Thêm khách hàng
          </button>
        </div>
        {/* Filter section */}
        <div className="filter-frame">
          <div className="filter-row">
            <input
              type="text"
              placeholder="Tìm kiếm khách hàng..."
              value={searchValue}
              onChange={handleSearchChange}
            />
            <select value={selectedRole} onChange={handleRoleSelect}>
              <option value="">Nhóm</option>
              <option value="manager">Mới</option>
              <option value="staff">Thân thiết</option>
            </select>
            <button id="reset" onClick={handleReset}>
              Đặt lại
            </button>
          </div>
          <div className="filter-row">
            <div>Đã chọn: {selectedCheckboxes}</div>
            <button onClick={handleLoadFromFile}>Tải từ file</button>
            <button onClick={handleExportToExcel}>Xuất Excel</button>
            <button onClick={handleCopy}>Sao chép</button>
            <button onClick={handleDelete}>Xóa</button>
          </div>
        </div>
        {/* Table section */}
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Họ tên</th>
              <th>Nhóm</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Số điện thoại</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <input type="checkbox" onChange={handleCheckboxChange} />
                </td>
                <td>{customer.name}</td>
                <td>{customer.group}</td>
                <td>{customer.gender}</td>
                <td>{customer.dateOfBirth}</td>
                <td>{customer.phone}</td>
                <td className="action-column">
                  <div>
                    <a href={`/edit/${customer.id}`}>Chi tiết</a>
                  </div>
                  <div>
                    <a href={`/delete/${customer.id}`}>Xóa</a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomerManagementPage;
