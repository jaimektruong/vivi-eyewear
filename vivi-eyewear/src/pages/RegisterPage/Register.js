import { useEffect, useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { UseMutationHook } from "../../hooks/UseMutationHook";

const Register = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/sign-in");
  };

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const mutation = UseMutationHook((data) => UserService.signupUser(data));

  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      window.alert("success");

      handleLogin();
    } else if (isError) {
      window.alert("failed");
    }
  }, [isSuccess, isError]);

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnChangePassword = (value) => {
    setPassword(value);
  };

  const handleOnChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const handleTogglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword });
    console.log("sign up", email, password, confirmPassword);
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
              Đăng ký
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
                src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-93.jpg"
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
                  <div className="brand d-sm-none">Sign Up</div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => handleOnChangeEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mật khẩu: </label>
                    <input
                      type={isShowPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(e) => handleOnChangePassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Xác nhận mật khẩu: </label>
                    <input
                      type={isShowPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Xác nhận mật khẩu"
                      value={confirmPassword}
                      onChange={(e) =>
                        handleOnChangeConfirmPassword(e.target.value)
                      }
                    />
                  </div>
                  <input
                    type="checkbox"
                    checked={isShowPassword}
                    onChange={handleTogglePassword}
                  />
                  {data?.status === "ERR" && <span>{data?.message}</span>}

                  <button
                    disabled={
                      !email.length ||
                      !password.length ||
                      !confirmPassword.length
                    }
                    className="btn btn-outline-primary"
                    onClick={handleSignUp}
                  >
                    Register
                  </button>
                  <hr />
                  <div className="text-center">
                    <button
                      className="btn btn-outline-success"
                      onClick={handleLogin}
                    >
                      Already have an account? Login
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

export default Register;
