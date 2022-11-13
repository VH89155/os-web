import { Row, Col } from "antd";
import Slider from "react-slick";
import ProductItem from "./productItem";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/apiRequest";
import axios from "axios";
import { DownCircleFilled ,ArrowDownOutlined} from "@ant-design/icons";

const ProductRow = (props) => {
  const [page, setNewPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [isSearch, setIsSearch] = useState(false);
  const [totalPages, setTotalPages] = useState(
    useSelector((state) => state.products?.products?.totalPages)
  );
  const [allProduct, setAllProduct] = useState(
    useSelector((state) => state.products?.products?.allProducts)
  );
  // const {allProduct,displayCartFn} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if ( search === "" ) {
      getAllProducts(dispatch, page);
      //  setAllProduct( axios.get(`/v1/product?page=${page}`).then(res=>res.data).then(res=>res.products))
      axios
        .get(`/v1/product?page=${page}`)
        .then((res) => res.data)
        .then((res) => {setAllProduct(res.products)
          setTotalPages(res.totalPages);});
    } else {
      // axios
      //   .post(`/v1/product/search?page=${page}&search=${search}`)
      //   .then((res) => res.data)
      //   .then((res) => {
      //     setAllProduct(res.searchValue);
      //     setTotalPages(res.totalPages);
      //   });
    }
  }, [page]);

  const { displayCartFn } = props;
  // const allProduct = useSelector(
  //   (state) => state.products?.products?.allProducts
  // );

  const handlePageChange = (newPage) => {
    console.log(totalPages);
    console.log(newPage);
    setNewPage(newPage);
  };
  const submitSearch = (e) => {
    console.log(search);
    if(search !==""){
      axios.post(`/v1/product/search?page=${page}&search=${search}`)
      .then((res) => res.data)
      .then((res) => {setAllProduct(res.searchValue) 
        setTotalPages(res.totalPages)
        });
      setNewPage(1);
    setIsSearch(true);
    setSearch("");
    setCategory("Tất cả")
  }
  
    else{
      setNewPage(1);
      getAllProducts(dispatch, page);
      //  setAllProduct( axios.get(`/v1/product?page=${page}`).then(res=>res.data).then(res=>res.products))
      axios
        .get(`/v1/product?page=${page}`)
        .then((res) => res.data)
        .then((res) => {setAllProduct(res.products)
          setTotalPages(res.totalPages);});
    setCategory("Tất cả")
    }
    
  };

  const submitCategory = async(a)=>{
    let values={}
    
    setCategory(a);
   
    if(a === "Tất cả"){
      setNewPage(1);
      getAllProducts(dispatch, page);
      //  setAllProduct( axios.get(`/v1/product?page=${page}`).then(res=>res.data).then(res=>res.products))
      await axios.get(`/v1/product?page=${page}`)
        .then((res) => res.data)
        .then((res) => {setAllProduct(res.products)
          setTotalPages(res.totalPages);});
    }
    else if (a === "Phòng ngủ"){
      setNewPage(1);
      values.category = "2"
      //  setAllProduct( axios.get(`/v1/product?page=${page}`).then(res=>res.data).then(res=>res.products))
      await axios.post("/v1/product/category/?page=1",values)
     .then((res) => res.data)
        .then((res) => {setAllProduct(res.products)
          setTotalPages(res.totalPages);});
   
        
    }
    else if (a === "Phòng khách"){
      setNewPage(1);
      values.category = "1"
      //  setAllProduct( axios.get(`/v1/product?page=${page}`).then(res=>res.data).then(res=>res.products))
      await axios.post("/v1/product/category/?page=1",values)
     .then((res) => res.data)
        .then((res) => {setAllProduct(res.products)
          setTotalPages(res.totalPages);});
   
        
    }
    else if (a === "Phòng bếp"){
      
      setNewPage(1);
      values.category = "3"
      //  setAllProduct( axios.get(`/v1/product?page=${page}`).then(res=>res.data).then(res=>res.products))
      await axios.post("/v1/product/category/?page=1",values)
     .then((res) => res.data)
        .then((res) => {setAllProduct(res.products)
          setTotalPages(res.totalPages);});
   
          
    }
    
    }
  

  // console.log(allProduct)
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="loaisp">
        <div className="content">
          <div className="slide3">
            <div>
              <h5>{category}</h5>
              <div className="gach" >
                <div className="gach_in" style={{width:"180px"}}></div>
                {/* <a>xem tất cả{">>"}</a> */}
              </div>
              <div className="search_SP">
                <div className="dropdown" >
                  <button
                    class="btn  dropdown-toggle"
                    
                    type="button"
                    disabled="true"
                    // data-toggle="dropdown"
                  >
                    {/* {category} */}
                    <ArrowDownOutlined  style={{marginLeft:"10px"}} />
                    {/* <span className="caret">Loại</span> */}
                  </button>
                  <ul class="dropdown-menu">
                     <li onClick={()=>submitCategory("Tất cả")}>Tất cả</li>
                    <li onClick={()=>submitCategory("Phòng khách")}>Phòng khách</li>
                    <li onClick={()=>submitCategory("Phòng ngủ")}>Phòng ngủ</li>
                    <li onClick={()=>submitCategory("Phòng bếp")}>Phòng bếp</li>
                  </ul>
                </div>

                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Nhập sản phẩm cần tìm"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      // console.log(search);
                      // // setSearch("");
                      
                      // axios.post(
                      //     `/v1/product/search?page=${page}&search=${search}`
                      //   )
                      //   .then((res) => res.data)
                      //   .then((res) => setAllProduct(res.searchValue));

                      // setIsSearch(true);
                    }}
                  />
                  <span
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    onClick={(e) => submitSearch(e)}
                  >
                    Search
                  </span>
                </form>
              </div>
            </div>
            <div className="image-slider">
              {/* <Slider  {...settings}>
                    {allProduct.map ((product)=>{
                      return(
                        <ProductItem id={product.id} name={product.name} price={product.price} oldprice={product.sold} url={product.images[0]} title = {product.description} displayCartFn={displayCartFn}  />
                      )
                    })}
                    </Slider> */}
              <Row>
                {allProduct?.map((product) => {
                  return (
                    <Col span={6} >
                      <ProductItem
                     
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        sold={product.sold}
                        originalPrice ={product.originalPrice}
                        url={product.images[0]}
                        title={product.description}
                        displayCartFn={displayCartFn}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
              >
                <i class="fa-solid fa-chevron-left"></i>
              </Button>
              <Button
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
              >
                <i class="fa-solid fa-chevron-right"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="khoangtrang"></div>
    </>
  );
};
export default ProductRow;
