import React from "react";

const AdminList = ({ admins, onEditClick, onDeleteClick }) => {
  const handleEditClick = (adminId) => {
    // Xử lý sự kiện chỉnh sửa quản trị viên
    onEditClick(adminId);
  };

  const handleDeleteClick = (adminId) => {
    // Xử lý sự kiện xoá quản trị viên
    onDeleteClick(adminId);
  };

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID & Avatar</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Role</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {admins.map((admin) => (
          <tr key={admin.id}>
            <td>
              <div>
                {admin.avatar && (
                  <img src={admin.avatar} alt={`Avatar of ${admin.name}`} />
                )}
              </div>
              <div>ID: {admin.id}</div>
            </td>
            <td>{admin.name}</td>
            <td>{admin.dateOfBirth}</td>
            <td>{admin.role}</td>
            <td>{admin.gender}</td>
            <td>{admin.phone}</td>
            <td>
              <button onClick={() => handleEditClick(admin.id)}>Edit</button>
              <button onClick={() => handleDeleteClick(admin.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminList;
