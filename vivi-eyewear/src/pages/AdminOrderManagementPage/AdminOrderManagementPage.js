import React, { useState } from "react";
import "./AdminOrderManagementPage.scss"; // File CSS cho trang Order Management
import OrderList from "../../components/OrderList/OrderList"; // Component OrderList

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([
    // Dữ liệu mẫu của danh sách đơn hàng
    {
      id: 1,
      orderCode: "ORD001",
      shippingProvider: "ABC Shipping",
      status: "Pending",
      amount: 150,
      orderDate: "2023-12-28",
    },
    {
      id: 2,
      orderCode: "ORD002",
      shippingProvider: "XYZ Shipping",
      status: "Completed",
      amount: 200,
      orderDate: "2023-12-25",
    },
    // Thêm đơn hàng khác nếu cần
  ]);

  const newOrdersCount = orders.filter((order) => order.status === "Pending").length;
  const pendingOrdersCount = orders.filter((order) => order.status === "Pending").length;
  const shippingOrdersCount = orders.filter((order) => order.status === "Completed").length;
  const completedOrdersCount = orders.filter((order) => order.status === "Completed").length;
  const cancelledOrdersCount = orders.filter((order) => order.status === "Cancelled").length;

  const [searchValue, setSearchValue] = useState(""); // Khởi tạo giá trị ban đầu cho ô tìm kiếm
  const [selectedRole, setSelectedRole] = useState(""); // Khởi tạo giá trị ban đầu cho dropdown chức vụ
 
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // Xử lý tìm kiếm dựa trên searchValue
  };

  const handleRoleSelect = (event) => {
    setSelectedRole(event.target.value);
    // Xử lý lọc dựa trên selectedRole
  };

  const handleReset = () => {
    setSearchValue(""); // Đặt lại giá trị ô tìm kiếm
    setSelectedRole(""); // Đặt lại giá trị dropdown chức vụ
  };

  const handleLoadFromFile = () => {
    // Định nghĩa xử lý khi tải từ file
  };

  const handleExportToExcel = () => {
    // Định nghĩa xử lý khi xuất Excel
  };

  const handleCopy = () => {
    // Định nghĩa xử lý khi sao chép
  };

  const handleDelete = () => {
    // Định nghĩa xử lý khi xóa
  };
  // Khai báo state để lưu trữ số lần checkbox được chọn
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(0);

  // Hàm xử lý khi checkbox được chọn hoặc bỏ chọn
  const handleCheckboxChange = (isChecked) => {
    if (isChecked) {
      setSelectedCheckboxes((prevCount) => prevCount + 1);
    } else {
      setSelectedCheckboxes((prevCount) => prevCount - 1);
    }
  };
  const [orderDate, setOrderDate] = useState(""); // Khởi tạo giá trị ban đầu cho ô lọc theo ngày đặt hàng
  const handleDateFilter = (event) => {
    setOrderDate(event.target.value); // Cập nhật giá trị ngày đặt hàng
    // Xử lý lọc dựa trên ngày đặt hàng
  };
  
  return (
    <div className="order-management-page">
    
      <div className="main-content">
        <div className="header">
          <h2>QUẢN LÝ ĐƠN HÀNG</h2>
        </div>
        {/* Hiển thị số lượng đơn hàng theo từng trạng thái */}
        <div id="line1">
          Tất cả ({orders.length}) Đơn hàng mới ({newOrdersCount}) Đang chờ vận chuyển ({pendingOrdersCount}) Đang vận chuyển ({shippingOrdersCount}) Đã giao ({completedOrdersCount}) Đã huỷ ({cancelledOrdersCount})
        </div>
        <div className="filter-frame">
          <div className="filter-row">
            <input
              type="text"
              placeholder="Mã đơn hàng"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <input
                type="date"
                value={orderDate}
                onChange={handleDateFilter}
                placeholder="Chọn ngày đặt hàng"
            />

            <select value={selectedRole} onChange={handleRoleSelect}>
              <option value="">Bộ lọc khác</option>
            </select>
            <button id="reset" onClick={handleReset}>
              Đặt lại
            </button>
          </div>
          <div className="filter-row">
            <div>Đã chọn: {selectedCheckboxes}</div>
            <button onClick={handleLoadFromFile}>Xác nhận hàng loạt</button>
            <button onClick={handleExportToExcel}>Xuất đơn hàng</button>
          </div>
        </div>
        {/* Component OrderList để hiển thị danh sách đơn hàng */}
        <OrderList orders={orders}  selectedCheckboxes={selectedCheckboxes} handleCheckboxChange={handleCheckboxChange}/>

      </div>
    </div>
  );
};

export default OrderManagementPage;
