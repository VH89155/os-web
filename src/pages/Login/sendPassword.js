import { useState } from "react";
// import '../css/login.css'
import Register from "./register";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/apiRequest";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      email: ""
      
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
    }),
    onSubmit: async(values) => {
      // window.alert("Form submitted");
      console.log(values);
          const res = await axios.post("/v1/forgotPass",values)
          console.log(res.data)
          if(res.data?.success){
            message.success("Send token to your email success")
          }
          else{
            message.error("Send token to your email failed")
          }
          
       }
        
      
    
    
  });
  

  return (
    
                <form onSubmit={formik.handleSubmit}>
                 
                  <div class="form-group">
                    <label class="form-control-label">EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="Enter your email"
                      class="form-control"
                    />
                    {formik.errors.email && (
                      <p className="errorMsg"> {formik.errors.email} </p>
                    )}
                  </div>
                  
                  <div class="col-lg-12 loginbttm">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 login-btm login-text"></div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 login-btm login-button">
                      <button type="submit" class="btn btn-outline-primary">
                        SUBMIT
                      </button>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 login-btm login-button"></div>
                  </div>
                </form>
                
  );
};

export default Login;
