import { useState } from "react";
const ProfileBank = () => {
    const [isform,setform] = useState(false);
    const displayFormFN =()=>{
        setform(!isform);
    }
    return ( 
        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 profile_right">
            <div className="profile_right_top">
                <p className="text_adress_profile">Tài khoản ngân hàng của tôi </p>
                <div className="btn_them" onClick={()=>{displayFormFN()}}> <p> <i class="fa-solid fa-plus"></i>  Thêm mới </p></div>
            </div>
            {isform && (
            <form className="form_adress"> 
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Số Tài Khoản</label>
                    <div className="col-sm-5">
                    <input id='tuoiSV' type="text" className="form-control"  />
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Tên chủ tài khoản</label>
                    <div className="col-sm-5">
                    <input id='tuoiSV' type="text" className="form-control"  />
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Tên ngân hàng</label>
                    <div className="col-sm-5">
                    <input id='tuoiSV' type="number" className="form-control"  />
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-5'></div>
                    <span   className="btn btn-primary me-2 col-sm-1">
                    Submit
                    </span>
                    <div className='col-sm-6'></div>
                </div>
            </form>
            )}
            <hr className="hr_B" />
            <p>Các tài khoản đã liên kết</p>
            <div className="item_adress">
                <div className="item_adress_top row">
                    <div className='col-sm-4'></div>
                    <div className="col-sm-4 " > 
                    <p className="text_adress">Bạn chưa có tài khoản liên kết </p>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <hr className="hr_adress"/>
            </div>
        </div>
     );
}
 
export default ProfileBank;