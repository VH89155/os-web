import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { getProfile } from "../../../redux/apiRequest";
const ProfileEdit = (props) => {
  const auth = useSelector((state) => state.auth?.login?.currentUser);
  const { profile } = props;
  const [isform, setform] = useState(false);
  const [load,setLoad] =useState(false)
  const displayFormFN = () => {
    setform(!isform);
  };
  const dispatch=useDispatch()
  useEffect(()=>{
    getProfile(dispatch, {username:auth.username, password:auth.password})
  },[load])
  
  const formik = useFormik({
    initialValues: {
      user: "",
      username: "",
      fullName: "",
      deliveryAddress: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
    //   fullName: Yup.string()
    //     .required("Required")
    //     .min(4, "Must be 4 characters or more"),
      deliveryAddress: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      phoneNumber: Yup.string()
        .required("Required")
        .matches(/^(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone number VN"),
    }),
    onSubmit: async (values) => {
      // window.alert("Form submitted");
      console.log(values);
      await axios.post("/v1/user/profile",values)

      setLoad(!load)

      
    },
    
  });
  if(auth){
    formik.values.username =auth.username
    formik.values.user =auth._id 
}
  return (
    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 profile_right">
      <div className="profile_right_top">
        <p className="text_adress_profile">Hồ sơ của tôi </p>
        <div
          className="btn_them"
          onClick={() => {
            displayFormFN();
          }}
        >
          {" "}
          <p>
            {" "}
            <i class="fa-solid fa-plus"></i> Chỉnh sửa hồ sơ{" "}
          </p>
        </div>
      </div>
      {isform && (
        <form className="form_adress" onSubmit={formik.handleSubmit}>
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <label className="col-sm-2 col-form-label">Họ và Tên</label>
            <div className="col-sm-5">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                placeholder="Enter your full name"
                class="form-control"
                className="form-control"
              />
              {formik.errors.fullName && (
                <p className="errorMsg"> {formik.errors.fullName} </p>
              )}
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <label className="col-sm-2 col-form-label">Địa chỉ</label>
            <div className="col-sm-5">
            <input
                type="text"
                id="deliveryAddress"
                name="deliveryAddress"
                value={formik.values.deliveryAddress}
                onChange={formik.handleChange}
                placeholder="Enter your full name"
                class="form-control"
                className="form-control"
              />
              {formik.errors.deliveryAddress && (
                <p className="errorMsg"> {formik.errors.deliveryAddress} </p>
              )}
            </div>
            <div className="col-sm-4"></div>
          </div>
          
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <label className="col-sm-2 col-form-label">Số Điện Thoại</label>
            <div className="col-sm-5">
            <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                placeholder="Enter your phone"
                class="form-control"
                className="form-control"
              />
              {formik.errors.phoneNumber && (
                <p className="errorMsg"> {formik.errors.phoneNumber} </p>
              )}
            </div>
            <div className="col-sm-4"></div>
          </div>
          {/* <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Giới Tính</label>
                    <div className="col-sm-5">
                    <select   name="oke"   className="form-control">
                    <option value='0'>Nam</option>
                    <option value='1'>Nữ</option>
                    <option value='-1'>Khac</option>
                  </select>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Ngày Sinh</label>
                    <div className="col-sm-5">
                    <input id='ngaysinhSV'
                        type="date"
                        className="form-control"
                        placeholder="dd/mm/yyyy" 
                      />
                    </div>
                    <div className='col-sm-4'></div>
                </div> */}
          <div className="form-group row">
            <div className="col-sm-5"></div>
            <button className="btn btn-primary me-2 col-sm-1">Submit</button>
            <div className="col-sm-6"></div>
          </div>
        </form>
      )}
      <hr />
      <p>Thông tin user:</p>
      <form className="form_adress">
        <div className="form-group row">
          <div className="col-sm-1"></div>
          <label className="col-sm-2 col-form-label">Họ và Tên:</label>
          <div className="col-sm-5">
            <p style={{ paddingTop: "5px" }}>{profile?.fullName}</p>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="form-group row">
          <div className="col-sm-1"></div>
          <label className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-5">
            <p style={{ paddingTop: "5px" }}>{auth.email}</p>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="form-group row">
          <div className="col-sm-1"></div>
          <label className="col-sm-2 col-form-label">Địa chỉ:</label>
          <div className="col-sm-5">
            <p style={{ paddingTop: "5px" }}>{profile?.deliveryAddress}</p>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="form-group row">
          <div className="col-sm-1"></div>
          <label className="col-sm-2 col-form-label">Số Điện Thoại:</label>
          <div className="col-sm-5">
            <p style={{ paddingTop: "5px" }}>{profile?.phoneNumber}</p>
          </div>
          <div className="col-sm-4"></div>
        </div>
        {/* <div className="form-group row"> */}
        {/* <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Giới Tính:</label>
                    <div className="col-sm-5">
                     <p style={{paddingTop:"5px"}}> Nam</p>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Ngày Sinh:</label>
                    <div className="col-sm-5">
                    <p>xx/xx/2001</p>
                    </div>
                    <div className='col-sm-4'></div>
                </div> */}
      </form>
    </div>
  );
};

export default ProfileEdit;
