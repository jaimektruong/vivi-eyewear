import React from "react";

const CustomerList = ({ customers, onEditClick, onDeleteClick }) => {
  const handleEditClick = (customerId) => {
    // Xử lý sự kiện chỉnh sửa quản trị viên
    onEditClick(customerId);
  };

  const handleDeleteClick = (customerId) => {
    // Xử lý sự kiện xoá quản trị viên
    onDeleteClick(customerId); // Change adminId to customerId
  };

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.dateOfBirth}</td>
            <td>{customer.role}</td>
            <td>{customer.gender}</td>
            <td>{customer.phone}</td>
            <td>
              <button onClick={() => handleEditClick(customer.id)}>Edit</button>
              <button onClick={() => handleDeleteClick(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerList;
