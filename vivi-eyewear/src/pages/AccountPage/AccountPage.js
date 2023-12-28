<<<<<<< HEAD
import React, { useState } from 'react';
import './AccountPage.scss';
// import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles
=======
import React, { useState } from "react";
import "./AccountPage.scss";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome styles
>>>>>>> abc89ef11063777b8394fb95bc2360537eb37656

function Account() {
  // State to store form data
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phoneNumber: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Event handler for form submission
  const handleFormSubmit = () => {
    // Simulate uploading the data to a server
    console.log("Uploading data:", formData);
    // You can perform an API call to a server here to store the data
  };

  // Event handler to update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <div className="box_1">
          <fieldset>
            <img className="image" src="no avt.jpg" />
            <hr />
            <i className="fa-solid fa-user"></i>
            <label>Thông tin tài khoản</label>
            <br />
            <label>
              <i className="fa-solid fa-location-dot"></i>Thông tin địa chỉ
            </label>
            <br />
            <label>
              <i className="fa-solid fa-clock-rotate-left"></i>Lịch sử mua hàng
            </label>
            <br />
            <br />
            <br />
          </fieldset>
        </div>
        <div className="box_2">
          <fieldset>
            <h1>Thông tin tài khoản</h1>
            <label className="laber" htmlFor="Ho">
              Họ:{" "}
            </label>
            <input
              className="input"
              type="text"
              placeholder="Enter text..."
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <label className="laber_1" htmlFor="ten">
              Tên:{" "}
            </label>
            <input
              className="input_1"
              type="text"
              placeholder="Enter text..."
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <br />
            <label className="laber" htmlFor="Email">
              Email:{" "}
            </label>
            <input
              className="input"
              type="text"
              placeholder="Enter text..."
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="SDT">SĐT: </label>
            <input
              className="input"
              type="text"
              placeholder="Enter text..."
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <h6>THAY ĐỔI MẬT KHẨU</h6>
            <hr className="hr" />
            <label className="laber" htmlFor="matkhau">
              Mật khẩu hiện tại (để trống nếu không đổi)
            </label>
            <input
              className="input"
              type="text"
              placeholder="Enter text..."
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
            />{" "}
            <br />
            <br />
            <label className="laber" htmlFor="matkhau">
              Mật khẩu mới (để trống nếu không đổi)
            </label>
            <input
              className="input_2"
              type="text"
              placeholder="Enter text..."
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <label className="laber" htmlFor="matkhau">
              Xác nhận mật khẩu mới
            </label>
            <input
              className="input_3"
              type="text"
              placeholder="Enter text..."
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />{" "}
            <br />
            <button className="button" type="submit">
              Lưu thay đổi
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
}

export default Account;
