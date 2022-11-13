import { useState } from "react";
import { useSelector } from "react-redux";

const ProfileAdress = (props) => {
    const {profile} =props
    const [isform,setform] = useState(false);
    const displayFormFN =()=>{
        setform(!isform);
    }
    
    console.log(profile)
    return ( 
        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 profile_right">
            <div className="profile_right_top">
                <p className="text_adress_profile">Địa chỉ của tôi </p>
                <div className="btn_them" onClick={()=>{displayFormFN()}}> <p> <i class="fa-solid fa-plus"></i>  Thêm địa chỉ mới </p></div>
            </div>
            {isform && (
                <form className="form_adress"> 
                    <div className="form-group row">
                        <div className='col-sm-1'></div>
                        <label className="col-sm-2 col-form-label">Tên Người Nhận</label>
                        <div className="col-sm-5">
                        <input id='tuoiSV' type="text" className="form-control"  />
                        </div>
                        <div className='col-sm-4'></div>
                    </div>
                    <div className="form-group row">
                        <div className='col-sm-1'></div>
                        <label className="col-sm-2 col-form-label">Địa chỉ</label>
                        <div className="col-sm-5">
                        <input id='tuoiSV' type="text" className="form-control"  />
                        </div>
                        <div className='col-sm-4'></div>
                    </div>
                    <div className="form-group row">
                        <div className='col-sm-1'></div>
                        <label className="col-sm-2 col-form-label">Số Điện Thoại</label>
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
            <p>Tất Cả địa chỉ:</p>
            <div className="item_adress">
                <div className="item_adress_top row">
                    <div className='col-sm-2'>
                        <p className="name_adress">{profile?.fullName}</p>
                    </div>
                    <div className="col-sm-1 " > 
                    <p className="text_adress">{profile?.phoneNumber}</p>
                    </div>
                    <div className='col-sm-10'></div>
                </div>
                <div className="item_adress_bit">
                    <p className="text_adress"> {profile?.deliveryAddress}</p>
                </div>
                <hr className="hr_adress"/>
            </div>
        </div>
     );
}
 
export default ProfileAdress;