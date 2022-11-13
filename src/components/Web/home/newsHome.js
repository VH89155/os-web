import Slider from "react-slick";
const NewHome = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return ( 
        <>
            <section class="tintuc">
              <section class="sanphamnb">
                <h2>Tin Tức</h2>
                <div class="bottomSpnb"></div>
              </section>
              <div class="about_b">
                <div class="tintucl">
                  <img src="../img/tt-0.png" alt="" />
                </div>
                <div class="tintucr">
                  <div class="ttr">
                    <div class="ttrl"><img src="../img/tt-1.png" alt="" /></div>
                    <div class="ttrr">
                      <h6>Trang trí phòng khách cho thêm năng động</h6>
                      <p>
                        Home furniture, interior design furniture, bedroom furniture,
                        wooden furniture - find photography of them all in our gallery
                        of furniture photos. Everything is licensed under the free
                        Pexels license. Find the best stock free photos here.
                      </p>
                    </div>
                  </div>
                  <div class="ttr">
                    <div class="ttrl"><img src="../img/tt-2.png" alt="" /></div>
                    <div class="ttrr">
                      <h6>Cập nhật xu hướng phòng khách phong cách tối giản</h6>
                      <p>
                        Home furniture, interior design furniture, bedroom furniture,
                        wooden furniture - find photography of them all in our gallery
                        of furniture photos. Everything is licensed under the free
                        Pexels license. Find the best stock free photos here.
                      </p>
                    </div>
                  </div>
                  <div class="ttr">
                    <div class="ttrl"><img src="../img/tt-3.png" alt="" /></div>
                    <div class="ttrr">
                      <h6>Cách bố trí nhà bếp ,bàn ăn một cách rộng rãi</h6>
                      <p>
                        Home furniture, interior design furniture, bedroom furniture,
                        wooden furniture - find photography of them all in our gallery
                        of furniture photos. Everything is licensed under the free
                        Pexels license. Find the best stock free photos here.
                      </p>
                    </div>
                  </div>
                  <a class="xthem" href="#">
                    Xem thêm <i class="fa-sharp fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <section class="sanphamnb">
                <h2>Đối Tác</h2>
                <div class="bottomSpnb"></div>
              </section>
              <div class="slide2 container">
              <Slider  {...settings}>
                <div class="image-slider2">
                  <div class="image-item">
                    <div class="image">
                      <a href="./doitac.html">
                        <img src="../img/dt-coffee-house.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="image-slider2">
                  <div class="image-item">
                    <div class="image">
                      <a href="./doitac.html">
                        <img src="../img/dt-marvella.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="image-slider2">
                  <div class="image-item">
                    <div class="image">
                      <a href="./doitac.html">
                        <img src="../img/dt-mellisa.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="image-slider2">
                  <div class="image-item">
                    <div class="image">
                      <a href="./doitac.html">
                        <img src="../img/dt-muongthanh.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="image-slider2">
                  <div class="image-item">
                    <div class="image">
                      <a href="./doitac.html">
                        <img src="../img/dt-sharaton.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="image-slider2">
                  <div class="image-item">
                    <div class="image">
                      <a href="./doitac.html">
                        <img src="../img/doitac6.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                </Slider>
              </div>
            </section>
        </>
     );
}
 
export default NewHome;