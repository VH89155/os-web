const UpdatePass = () => {
    
    return ( 
        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 profile_right">
            <div className="profile_right_top">
                <p className="text_adress_profile">Đổi Mật khẩu </p><br/>
            </div>
            <i>Để bảo vệ tài khoản , vui lòng không chia sẻ mật khẩu cho người khác </i>

            <hr className="hr_B" />
            <form className="form_adress"> 
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Mật khẩu hiện tại</label>
                    <div className="col-sm-5">
                    <input id='tuoiSV' type="text" className="form-control"  />
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Mật khẩu mới</label>
                    <div className="col-sm-5">
                    <input id='tuoiSV' type="text" className="form-control"  />
                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="form-group row">
                    <div className='col-sm-1'></div>
                    <label className="col-sm-2 col-form-label">Xác nhận mật khẩu</label>
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
        </div>
     );
}
 
export default UpdatePass;