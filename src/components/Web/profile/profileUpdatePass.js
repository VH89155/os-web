import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { authLogin } from "../../redux/apiRequest";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const UpdatePass = () => {
    const auth = useSelector((state)=> state.auth?.login?.currentUser)
    const formik = useFormik({
        initialValues: {
          userID:"",  
          username: "",
          currentPass:"",
          newPass: "",
          confirmedPassword:"",
        },
        validationSchema: Yup.object({
         
            currentPass: Yup.string()
            .required("Required")
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
              "Password must be 7-19 characters and contain at least one letter, one number and a special character"
            ),
            newPass: Yup.string()
            .required("Required")
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
              "Password must be 7-19 characters and contain at least one letter, one number and a special character"
            ),
          confirmedPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("newPass"), null], "Password must match"),
        }),
        onSubmit: async (values) => {
          // window.alert("Form submitted");
          console.log(values);
    
          await axios.post("/v1/auth/resetPass",values).then(res=>res.data).then(res=>{
            if(res.success === true){
                message.success('Resgister success');
                
                // statusRegister()
            }
            else {
                message.error(res.status);
            }
          });
    
        //    message.error('Resgister error');
        },
      });
    if(auth){
        formik.values.userID =auth?._id
        formik.values.username =auth?.username
    }
    return ( 
        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 profile_right">
            <div className="profile_right_top">
                <p className="text_adress_profile">?????i M???t kh???u </p><br/>
            </div>
            <i>????? b???o v??? t??i kho???n , vui l??ng kh??ng chia s??? m???t kh???u cho ng?????i kh??c </i>

            <hr className="hr_B" />
            <form className="form_adress" onSubmit={formik.handleSubmit}> 
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">M???t kh???u hi???n t???i</label>
                    <div className="col-sm-5">
                    <input type="password"
                  id="currentPass"
                 name="currentPass"
                value={formik.values.currentPass}
                 onChange={formik.handleChange}
                 placeholder="Enter your currentPass"
                 className="form-control"  />
                  {formik.errors.currentPass && (
                     <p className="errorMsg"> {formik.errors.currentPass} </p>
            )}
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">M???t kh???u m???i</label>
                    <div className="col-sm-5">
                    <input type="password"
                  id="newPass"
                 name="newPass"
                value={formik.values.newPass}
                 onChange={formik.handleChange}
                 placeholder="Enter your newPass"
                 className="form-control"  />
                  {formik.errors.newPass && (
                     <p className="errorMsg"> {formik.errors.newPass} </p>
            )}
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">X??c nh???n m???t kh???u</label>
                    <div className="col-sm-5">
                    <input
          type="password"
          id="confirmedPassword"
          name="confirmedPassword"
          value={
             formik.values.confirmedPassword
          }
          onChange={formik.handleChange}
          placeholder="Confirm your password"
          className="form-control"
        />
          {formik.errors.confirmedPassword && (
          <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
        )}
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-5'></div>
                    <button   className="btn btn-primary me-2 col-sm-1">
                    Submit
                    </button>
                    <div className='col-sm-6'></div>
                </div>
            </form>
        </div>
     );
}
 
export default UpdatePass;