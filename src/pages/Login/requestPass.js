import { useState } from "react";
// import '../css/login.css'


import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/apiRequest";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const Register = (props) => {
  // const {formik ,isRegister} =props
    const {statusRegister} =props
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      token:"",
      confirmedPassword:"",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
        token: Yup.string()
        .required("Required")
        .min(12, "Must be 4 characters or more"),
      
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: async (values) => {
      // window.alert("Form submitted");
      console.log(values);

      const res = await axios.post("/v1/forgotPass/password-new",values)
      console.log(res.data)
      if(res.data?.success){
        message.success("ForgotPass success")
        navigate("/login")
      }
      else{
        message.error("ForgotPass failed")
      }

      //  message.error('Resgister error');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
        {formik.errors.username && (
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

      <div class="form-group">
        <label class="form-control-label">CONFIRM PASSWORD</label>
        <input
          type="password"
          id="confirmedPassword"
          name="confirmedPassword"
          value={
             formik.values.confirmedPassword
          }
          onChange={formik.handleChange}
          placeholder="Confirm your password"
          class="form-control"
        />
          {formik.errors.confirmedPassword && (
          <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
        )}
      </div>
      <div class="form-group">
        <label class="form-control-label">TOKEN </label>
        <input
          type="text"
          id="token"
          name="token"
          value={
           formik.values.token
          }
          onChange={formik.handleChange}
          placeholder="Enter your token"
          class="form-control"
        />
        {formik.errors.token && (
          <p className="errorMsg"> {formik.errors.token} </p>
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

export default Register;
