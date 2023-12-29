import React, { useState } from "react";
import "./AccountPage.scss";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome styles

function daoTT() {
  var mk = document.getElementById("mk");
  mk.type = (mk.type === "password")? "text":"password";
} 
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
            <div className="imga">
                <i class="bi bi-person-circle"></i>
            </div>
            <hr className="hr" />
            <div  className="inf">
              <i className="fa-solid fa-user"></i>
              <div  className="in4">
                <label>Thông tin tài khoản</label> <br />
              </div>
            </div>
            <div className="inf">
              <i className="fa-solid fa-location-dot"></i>
              <div  className="in3">
                <label> Thông tin địa chỉ</label><br />
              </div>
            </div>
            <div className="inf">
              <i className="fa-solid fa-clock-rotate-left"></i>
                <div className="in2">
                  <label>Lịch sử mua hàng </label><br />
                </div>
            </div>
          </fieldset>
        </div>
        <div className="box_2">
          <fieldset>
            <h1>Thông tin tài khoản</h1>
            <div className="lay_1">
              <div>
                <label className="laber" htmlFor="Ho">Họ:{" "}
                </label> <br />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter text..."
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="laber" htmlFor="ten">
                Tên:{" "}
                </label> <br />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter name..."
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="lay_2">
              <div>
                <label className="laber" htmlFor="Email">
                Email:{" "}
                </label><br />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter email..."
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="SDT">SĐT: </label><br />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter phone number..."
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <p><b>THAY ĐỔI MẬT KHẨU</b></p>
            <hr className="hr" />
            <label className="laber" htmlFor="matkhau">
              Mật khẩu hiện tại (để trống nếu không đổi)
            </label>
            <input
              className="input"
              type="text"
              placeholder="Placeholder..."
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
              className="input_1"
              type="text"
              placeholder="Placeholder..."
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
              placeholder="Placeholder..."
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