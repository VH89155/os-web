import { useState } from "react";
// import '../css/login.css'
import Register from "./register";
import Login from "./login";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/apiRequest";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [isRegister, setRegister] = useState(false);
  const statusRegister = () => {
    setRegister(!isRegister);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  

  return (
    <div class="login">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key"  aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">
              {isRegister ? "REGISTER" : "LOGIN"}
            </div>
            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                {/* <form onSubmit={formik.handleSubmit}>
                  <div class="form-group">
                    <label class="form-control-label">USERNAME</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      placeholder="Enter your name"
                      class="form-control"
                    />
                    {formik.errors.name && (
                      <p className="errorMsg"> {formik.errors.username} </p>
                    )}
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      placeholder="Enter your password"
                      class="form-control"
                    />
                    {formik.errors.password && (
                      <p className="errorMsg"> {formik.errors.password} </p>
                    )}
                  </div>
                  {isRegister && <Register formik={formik} isRegister={isRegister} />}
                  <div class="col-lg-12 loginbttm">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 login-btm login-text"></div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 login-btm login-button">
                      <button type="submit" class="btn btn-outline-primary">
                        SUBMIT
                      </button>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 login-btm login-button"></div>
                  </div>
                </form> */}
                { !isRegister ? (
                    <><Login/></>)
                    :
                    (<><Register statusRegister={statusRegister}></Register ></>)
                 }
                
                <h6 className="status" onClick={statusRegister}>
                  {isRegister ? "Quay trở lại" : "Bạn chưa có tài khoản ?"}
                </h6>
                <h6 className="status" onClick={()=>navigate("/forgot")} >
                  Bạn quên mật khẩu ? 
                </h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
