import "./Login.scss";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/vivi-eyewear/sign-up");
  };
  return (
    <>
      <div className="container py-5 d-block">
        <div className="brand d-none d-lg-flex">
          <div className="fs-3 col-6"></div>
          <div className="fs-3 col-6 ">
            <div
              className="d-flex justify-content-center fs-2"
              style={{ color: "#1877f2" }}
            >
              Đăng nhập
            </div>
            <div className="d-flex justify-content-center pb-3">
              Chào mừng bạn đến với ViVi Eyewear!
            </div>
          </div>
        </div>
        <div className="d-md-flex">
          <div className="col-md-6">
            <div className="main-image d-flex justify-content-center">
              <img
                src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-656.jpg"
                alt="Gọng kính 380CK076"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center">
            <div className="container justify-content-center">
              <div
                className="row px-3 px-sm-0 justify-content-center"
                style={{ width: "100%" }}
              >
                <div className="content-right col-10  d-flex flex-column gap-3 py-3">
                  <div className="brand d-md-none">Sign In</div>
                  <label>Username or email:</label>
                  <input
                    type="username"
                    className="form-control"
                    placeholder="Email address or phone numbers"
                  />
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <button className="btn btn-outline-primary">Login</button>
                  <span className="text-center">
                    <a className="forgot-password" href="/">
                      Forgot your password?
                    </a>
                  </span>
                  <hr />
                  <div className="text-center">
                    <button
                      className="btn btn-outline-success"
                      onClick={handleRegister}
                    >
                      Create New Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// import "./Login.scss";
// import React, { forwardRef, useImperativeHandle, useState } from "react";
// const Login = forwardRef((props, ref) => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   // Hàm để hiển thị modal
//   const show = () => {
//     setModalVisible(true);
//   };

//   // Hàm để ẩn modal
//   const hide = () => {
//     setModalVisible(false);
//   };

//   // Thực hiện sử dụng hàm show và hide từ bên ngoài
//   useImperativeHandle(ref, () => ({
//     show,
//     hide,
//   }));
//   return (
//     <>
//       {/* Modal */}
//       <div
//         className={`modal fade ${isModalVisible ? "show" : ""}`}
//         id="LoginModal"
//         tabIndex="-1"
//         aria-labelledby="LoginModalLabel"
//         aria-hidden={!isModalVisible}
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-body">
//               <div className="d-flex justify-content-end">
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="container justify-content-center">
//                 <div className="row px-3 px-sm-0" style={{ width: "100%" }}>
//                   <div
//                     className="content-left  col-12 d-none col-sm-5 d-sm-block"
//                     style={{ paddingRight: "2.5rem", marginTop: "0px" }}
//                   >
//                     <div className="brand">Sign In</div>
//                     <div className="detail">Thanks for chosing us</div>
//                     <div className="d-flex justify-content-center">
//                       <img
//                         src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-656.jpg"
//                         alt="pic"
//                         className="rounded"
//                       />
//                     </div>
//                   </div>
//                   <div className="content-right col-sm-7 col-12 d-flex flex-column gap-3 py-3">
//                     <div className="brand d-sm-none">Sign In</div>
//                     <label>Username or email:</label>
//                     <input
//                       type="username"
//                       className="form-control"
//                       placeholder="Email address or phone numbers"
//                     />
//                     <label>Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       placeholder="Password"
//                     />
//                     <button className="btn btn-outline-primary">Login</button>
//                     <span className="text-center">
//                       <a className="forgot-password" href="/">
//                         Forgot your password?
//                       </a>
//                     </span>
//                     <hr />
//                     <div className="text-center">
//                       <button
//                         className="btn btn-outline-success"
//                         data-bs-toggle="modal"
//                         data-bs-target="#RegisterModal"
//                       >
//                         Create New Account
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// });

export default LoginPage;