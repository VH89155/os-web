// import { Image } from "antd";
import { Comment, List, Tooltip, Button, Form, Input } from "antd";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams,Link } from "react-router-dom";
import { addCart, getCart, getProductID } from "../../redux/apiRequest";
import {animateScroll as scroll} from "react-scroll";
const { TextArea } = Input;
const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState({});
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  useEffect(() => {
    axios.get(`/v1/product/${productId}`).then((res) => {
      setProduct(res.data);
      return res.data;
    });
    axios.get(`/v1/comment/${productId}`).then((res) => {
      setComments(res.data.comments);
    });
    
  }, [addComment, productId ]);
  // console.log(product);

  const userID = useSelector((state) => state.auth?.login?.currentUser?._id);
  const author = useSelector(
    (state) => state.auth?.login?.currentUser?.username
  );
  const add = async () => {
    let itemCart = {};
    itemCart.product = product._id;
    itemCart.user = userID;
    itemCart.quantity = 1;
    itemCart.add = 1;
    console.log(itemCart);
    const isAdd = await addCart(dispatch, itemCart);
    if (!userID) {
      navigate("/login");
    }
    if (isAdd) {
      await getCart(dispatch, itemCart.user);
    }
  };
  const data = [];
  comments.map((item) => {
    data.push({ author: item.author, content: <p>{item.comment}</p> });
  });

  const addCmt = async () => {
    const cmt = {};
    cmt.user = userID;
    cmt.product = product._id;
    cmt.comment = text;
    cmt.author = author;
    console.log(cmt);
    if (!userID) {
      navigate("/login");
    }
    await axios.post(`/v1/comment/`, cmt);
    setText("");
    setAddComment(!addComment);
  };

  console.log(product);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <>
      {/* <div className="khoangtrong"></div> */}
      <section className="tintuc" style={{marginTop:0}}>
        <div className="tintuc_in container">
          <div className="khoangtrang_1"></div>
          <div className="row">
            <div className="tintuc_1 col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div className="image">
                <h5>{product?.product?.name}</h5>
                {product?.product?.images ? (
                  <>
                    <img
                      src={require(`../../assets/imgs/${product?.product?.images[0]}`)}
                      width={300}
                      alt=""
                    />
                    <div className="fourimg">
                      {product?.product?.images.map((img, index) => {
                        return (
                          <img
                            key={index}
                            className="thayanh"
                            src={require(`../../assets/imgs/${img}`)}
                            alt=""
                          />
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="tintuc_1 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="image">
                <p className="material">Th??? lo???i</p>
                <div className="go">
                  <div className="goLim">{product?.product?.category}</div>
                </div>
                <del>{}VND</del>
                <p className="price">{product?.product?.price}VND</p>
                <div className="insurance">
                  <i className="fa-sharp fa-solid fa-shield-halved"></i> B???o
                  h??nh s???n ph???m l??n t???i 36 th??ng
                </div>
                <div className="btn_detail">
                  <h3 className="btn2" onClick={() => add()}>
                    Th??m v??o gi??? h??ng
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="detail">
            <ul>
              <li>
                <a href="">?????c tr??ng</a>
              </li>
              <li>
                <a href="">Th??ng S???</a>
              </li>
              <li>
                <a href="">B???o qu???n</a>
              </li>
              <li>
                <a href="">B???o H??nh</a>
              </li>
              <li>
                <a href="">Cam K???t</a>
              </li>
            </ul>
            <div className="detail-line"></div>
            <div className="detail-text">
              <p>
                - B??n c?? ph?? c???ng ????n gi???n v???i k??? m??? <br />
                - Phong c??ch h??nh h???c t???i gi???n <br />
                - K??? b??n trong c?? k??ch th?????c ho??n h???o cho t???p ch??, ????? l??t ly v??
                c??c ph??? ki???n ph??ng kh??ch kh??c <br />
                - C?? th??? ???????c s??? d???ng nh?? m???t b??n TV th???p - K??? m???ng ho??n h???o ?????
                ch???a m???t h???p h??ng ?????u ho???c ?????u ph??t blu-ray <br />
                - L??m b???ng g??? Sheesham cao c???p <br />
                - Kh??ng c???n l???p r??p. <br />
              </p>
            </div>
          </div>
          <div className="detail1">
            <div className="detail-text">
              <h4>Comment</h4>
              <List
                className="comment-list"
                // header={`${data.length} Comment`}
                itemLayout="horizontal"
                dataSource={data}
                style={{ display: "flex", flexDirection: "columns" }}
                renderItem={(item) => (
                  <li>
                    <Comment
                      // style={{index:1}}
                      // actions={item.actions}
                      author={item.author}
                      // avatar={item.avatar}
                      content={item.content}
                      // datetime={item.datetime}
                    />
                  </li>
                )}
              />
              <Form>
                <Form.Item>
                  <TextArea
                    rows={4}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" onClick={addCmt} type="primary">
                    Add Comment
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="khoangtrang_1"></div>
        </div>
        <div className="khoangtrang_1"></div>
        {/* <section className="loaisp2">
          <div className="content4 container"> */}

        {/* </div>
        </section> */}
      </section>
      <section className="loaisp2">
        <div className="content4 container">
          <div className="slide3">
            <h5>C??c s???n ph???m t????ng t???</h5>
            <div className="gach">
              <div className="gach_in"></div>
            </div>
            <div className="image-slider3 " style={{padding:30}}>
              <Slider {...settings}>
                {product?.productsCategory?.map((item, index) => {
                  return (
                    // <div key={index} className="image-item col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                      <div className="" style={{height:50, textAlign:"center"}} key={index}>
                       <Link to={`/product/${item._id}`}>
                          <img src={require(`../../assets/imgs/${item?.images[0]}`)} onClick={()=>{
                           scroll.scrollToTop()
                          }} style={{height:100,width:200,marginLeft:25}}/>
                        </Link>
                      </div>
                     
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailProduct;
