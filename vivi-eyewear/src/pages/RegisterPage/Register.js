import "./Register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/vivi-eyewear/sign-in");
      };
    return (
        <>
            <div className="container py-5 d-block">
                <div className="brand d-none d-lg-flex">
                    <div className="fs-3 col-6">
                    </div>
                    <div className="fs-3 col-6 ">
                        <div className="d-flex justify-content-center fs-2" style={{ color: "#1877f2" }}>Đăng ký</div>
                        <div className="d-flex justify-content-center pb-3">Chào mừng bạn đến với ViVi Eyewear!</div>

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
                            <div className="row px-3 px-sm-0 justify-content-center" style={{ width: "100%" }}>
                                <div className="content-right col-10  d-flex flex-column gap-3 py-3">
                                    <div className="brand d-sm-none">Sign Up</div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm password: </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirm password"
                                        />
                                    </div>
                                    <button className="btn btn-outline-primary">
                                        Register
                                    </button>
                                    <hr />
                                    <div className="text-center">
                                        <button
                                            className="btn btn-outline-success"
                                            onClick={handleLogin}
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
        </>
    );
};
export default Register;
