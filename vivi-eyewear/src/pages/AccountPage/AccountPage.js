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
      <div className="container-fluid d-flex justify-content-center text-justify text-color-default ">
        <div className="container px-5 text-justify">
          <div className="row text-justify">
            <div className="introduction-content col-xl-2 col-md-4 col-12 text-justify" style={{ backgroundColor: '#ffffff', border: '1px solid #000000' }}>
              <fieldset>
                <div className="avt">
                    <i class="bi bi-person-circle"></i>
                </div>
                <hr className="hr" />
                <div  className="inf">
                  <i className="fa-solid fa-user"></i> <label>Thông tin tài khoản</label> <br />
                </div>
                <div className="inf">
                  <i className="fa-solid fa-location-dot"></i> <label> Thông tin địa chỉ</label><br />
                </div>
                <div className="inf">
                  <i className="fa-solid fa-clock-rotate-left"></i> <label>Lịch sử mua hàng </label><br />
                </div>
              </fieldset>
            </div>

            <div className="loyal-customer-content col-xl-6 col-md-6 col-12" style={{ backgroundColor: '#ffffff', border: '1px solid #000000', marginLeft: '20px', padding: '10px' }}>
              <fieldset>
                <h2>Thông tin tài khoản</h2>
                <div className="lay_1">
                  <div>
                    <label htmlFor="Ho">Họ:{" "}
                    </label> <br />
                    <input
                      className="input_4"
                      type="text"
                      placeholder="Enter text..."
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="lay_left">
                    <label htmlFor="ten">
                    Tên:{" "}
                    </label> <br />
                    <input
                      className="input_4"
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
                      className="input_4"
                      type="text"
                      placeholder="Enter email..."
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="lay_left">
                    <label  htmlFor="SDT">SĐT: </label><br />
                    <input
                      className="input_4"
                      type="text"
                      placeholder="Enter phone number..."
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <br />
                <p><b>THAY ĐỔI MẬT KHẨU</b></p>
                <hr className="hr" />
                <label className="laber" htmlFor="matkhau">
                  Mật khẩu hiện tại (để trống nếu không đổi)
                </label>
                <input
                  className="input_5"
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
                <button className="button_account" type="submit">
                  Lưu thay đổi
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Account;