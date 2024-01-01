import { useEffect, useState } from "react";
import "./Login.scss";
import { useLocation, useNavigate } from 'react-router-dom'
import * as UserService from "../../services/UserService";
import { UseMutationHook } from "../../hooks/UseMutationHook";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const mutation = UseMutationHook((data) => UserService.loginUser(data));

  const { data, isLoading, isSuccess } = mutation;
  const handleRegister = () => {
    navigate("/sign-up");
  };

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    if (isSuccess) {
      if(location?.state) {
        navigate(location?.state)
      }else {
        navigate('/')
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    }
  }, [isSuccess])

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storage)
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token,refreshToken }))
  }

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnChangePassword = (value) => {
    setPassword(value);
  };

  const handleTogglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });

    console.log("sign in", email, password);
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
                  <label>Email hoặc tên đăng nhập:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Địa chỉ email hoặc số điện thoại"
                    value={email}
                    onChange={(e) => handleOnChangeEmail(e.target.value)}
                  />
                  <label>Mật khẩu:</label>
                  <input
                    type={isShowPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => handleOnChangePassword(e.target.value)}
                  />
                  <input
                    type="checkbox"
                    checked={isShowPassword}
                    onChange={handleTogglePassword}
                  />
                
                  {data?.status === "ERR" && <span>{data?.message}</span>}
                  <button
                    className="btn btn-outline-primary"
                    onClick={handleSignIn}
                  >
                    Đăng nhập
                  </button>
                  {isLoading && (
                    <div className="text-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                  <span className="text-center">
                    <a className="forgot-password" href="/">
                      Quên mật khẩu?
                    </a>
                  </span>
                  <hr />
                  <div className="text-center">
                    <button
                      className="btn btn-outline-success"
                      onClick={handleRegister}
                    >
                      Tạo tài khoản mới
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

export default LoginPage;
