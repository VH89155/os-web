
const Footer = () => {
  return ( 
    <div className="lienhe">
      <div className="lienhe_in">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 ttchung">
            <h6 style={{color:"#f3f3f3"}}>THONG TIN CHUNG</h6>
            <div className="bottomSpnb"></div>
            <h5 style={{color:"#f3f3f3"}}>CÔNG TY TNHH HOÀNG HOAN</h5>
            <p><i className="fa-solid fa-phone"></i> 0.123.987.654</p>
            <p><i className="fa-regular fa-envelope"></i> cskh@hoanghoan.vn</p>
            <p>
              <i className="fa-sharp fa-solid fa-location-dot"> </i> số 3 ,cầu giấy
              ,hà nội
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 veus">
            <h6 style={{color:"#f3f3f3"}}>VỀ CHÚNG TÔI</h6>
            <div className="bottomSpnb"></div>
            <p>giới thiệu</p>
            <p>Sản phẩm</p>
            <p>Tin tức</p>
            <p>Đối tác</p>
            <p>Liên hệ</p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ketnoi">
            <h6 style={{color:"#f3f3f3"}}>KẾT NỐI VỚI CHÚNG TÔI</h6>
            <div className="bottomSpnb"></div>
            <div className="social">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <img src="../img/thongbao.png" alt="" />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Footer;