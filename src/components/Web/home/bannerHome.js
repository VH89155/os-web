import Slider from "react-slick";
const BannerHome = (props) => {
    // const {allProduct} =props;
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    //   };
    return ( 
    <section className="banner">
        <div className="banner_in container">
          <h3>THế Giới Nội Thất Số 1 Việt Nam</h3>
          <h3>Xưởng mộc</h3>
          <p>
            Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của
            khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và
            những người thân yêu.
          </p>
          <button>Liên Hệ Ngay</button>
        </div>
        <div className="len">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
              <div className="item">
                <div className="img">
                  <img src="../img/phong-ngu.png" alt="sp1.png" className="w-100" />
                </div>
                <div className="len_p">
                  <p>Phòng Khách</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
              <div className="item">
                <div className="img">
                  <img src="../img/phong-khach.png" alt="sp1.png" className="w-100" />
                </div>
                <div className="len_p">
                  <p>Phòng Ngủ</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
              <div className="item">
                <div className="img">
                  <img src="../img/phong-bep.png" alt="sp1.png" className="w-100" />
                </div>
                <div className="len_p">
                  <p>Phòng Bếp</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
              <div className="item">
                <div className="img">
                  <img src="../img/phong-tam.png" alt="sp1.png" className="w-100" />
                </div>
                <div className="len_p">
                  <p>Phòng Tắm</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
              <div className="item">
                <div className="img">
                  <img src="../img/tre-em.png" alt="sp1.png" className="w-100" />
                </div>
                <div className="len_p">
                  <p>Trẻ Em</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
              <div className="item">
                <div className="img">
                  <img src="../img/van-phong.png" alt="sp1.png" className="w-100" />
                </div>
                <div className="len_p">
                  <p>Văn Phòng</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
              <div className="item">
                <div className="img">
                  <img src="../img/cau-thang.png" alt="sp1.png" className="w-100" />
                </div>
                <div className="len_p">
                  <p>Cầu Thang</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
              <div className="item">
                <div className="img">
                  <img
                    src="../img/den-trang-tri.png"
                    alt="sp1.png"
                    className="w-100"
                  />
                  <div className="len_p">
                    <p>Đồ Trang Trí</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="sanphamnb">
          <h2>Sản Phẩm Nổi Bật</h2>
          <div className="bottomSpnb"></div>
        </section>
        <div className="slide container">
          <div className="image-slider">
          {/* <Slider  {...settings}>
          {allProduct.map ((product)=>{
            return(
            <div key={product.id} className="image-item">
              <div className="image">
                <a href="./chitietsp.html">
                  <img src={product.url} alt="" />
                </a>
              </div>
              <div className="slide_ct">
                <h4>{product.name}</h4>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>{product.title}</p>
                <p className="p_price">{product.price} VND</p>
              </div>
            </div>
              )
            })}
            </Slider> */}
          </div>
        </div>
      </section>
     );
}
 
export default BannerHome;