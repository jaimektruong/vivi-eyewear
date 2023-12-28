import React from "react";
import "./OrderList.scss"
const OrderList = ({ orders, selectedCheckboxes, handleCheckboxChange }) => {
    const handleCheckbox = (orderId, isChecked) => {
      handleCheckboxChange(isChecked); // Truyền trạng thái đã chọn của hộp kiểm
      // Các logic khác nếu cần
    };
  return (
    <table className="admin-table">
      <thead>
        <tr>
        <th>Tất cả</th> {/* Thêm cột để chứa checkbox */}
          <th>Mã đơn hàng</th>
          <th>Đơn vị vận chuyển</th>
          <th>Trạng thái</th>
          <th>Số tiền</th>
          <th>Ngày đặt hàng</th>
          <th>Hành động</th>
          
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={Array.isArray(selectedCheckboxes) && selectedCheckboxes.includes(order.id)}
                onChange={(e) => handleCheckbox(order.id, e.target.checked)} // Truyền trạng thái đã chọn
              />
            </td>
            <td>{order.orderCode}</td>
            <td>{order.shippingProvider}</td>
            <td>{order.status}</td>
            <td>{order.amount}</td>
            <td>{order.orderDate}</td>
            <td className="action-column">
              {/* Các action khác (nút xóa, sửa, etc.) */}
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
