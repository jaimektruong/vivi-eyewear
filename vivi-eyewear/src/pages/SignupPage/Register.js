import "./Register.scss";
import React, { forwardRef, useImperativeHandle, useState } from "react";
const Register = forwardRef((props, ref) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnChangePassword = (value) => {
    setPassword(value);
  };
  const handleOnChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const handleSignUp = () => {
    console.log("sign up", email, password, confirmPassword);
  };

  // Hàm để hiển thị modal
  const show = () => {
    setModalVisible(true);
  };

  // Hàm để ẩn modal
  const hide = () => {
    setModalVisible(false);
  };

  // Thực hiện sử dụng hàm show và hide từ bên ngoài
  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));
  return (
    <>
      {/* Modal */}
      <div
        className={`modal fade ${isModalVisible ? "show" : ""}`}
        id="RegisterModal"
        tabIndex="-1"
        aria-labelledby="RegisterModalLabel"
        aria-hidden={!isModalVisible}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="container justify-content-center">
                <div className="row px-3 px-sm-0" style={{ width: "100%" }}>
                  <div
                    className="content-left  col-12 d-none col-sm-5 d-sm-block"
                    style={{ paddingRight: "2.5rem", marginTop: "0px" }}
                  >
                    <div className="brand">Sign Up</div>
                    <div className="detail">Thanks for chosing us</div>
                    <div className="d-flex justify-content-center">
                      <img
                        src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-93.jpg"
                        alt="pic"
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="content-right col-sm-7 col-12 d-flex flex-column gap-3 py-3">
                    <div className="brand d-sm-none">Sign Up</div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        value={email}
                        onChange={handleOnChangeEmail}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Numbers:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone numbers"
                      />
                    </div>
                    <div className="form-group">
                      <label>Username:</label>
                      <input
                        type="username"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password: </label>
                      <input
                        type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={handleOnChangePassword}
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm password: </label>
                      <input
                        type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={handleOnChangeConfirmPassword}
                      />
                    </div>
                    <input
                      type="checkbox"
                      onClick={() => setIsShowPassword(!isShowPassword)}
                    />
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleSignUp}
                    >
                      Register
                    </button>
                    <hr />
                    <div className="text-center">
                      <button
                        className="btn btn-outline-success"
                        data-bs-toggle="modal"
                        data-bs-target="#LoginModal"
                      >
                        Already've have an account? Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Register;
