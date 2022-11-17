import { useState } from "react";
// import '../css/login.css'
import Register from "./register";
import SendPassword from "./sendPassword";
import RequestPass from "./requestPass";
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
              {isRegister ? "RESSQUEST PASS" : "SEND EMAIL"}
            </div>
            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
              
                { !isRegister ? (
                    <><SendPassword/></>)
                    :
                    (<><RequestPass statusRequestPass={statusRegister}></RequestPass ></>)
                 }
                
                <h6 className="status" onClick={statusRegister}>
                  {isRegister ? "Quay trở lại" : "Tiếp tục"}
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
