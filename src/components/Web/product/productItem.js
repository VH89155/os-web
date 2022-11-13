import { connect, useDispatch, useSelector } from "react-redux";
// import {updateProducts} from "../redux/reduxModul";
import { Image } from "antd";
import { addCart, getCart } from "../../../redux/apiRequest";
import { Link, useNavigate } from "react-router-dom";
const ProductItem = (props) => {
  const {
    id,
    name,
    price,
   sold,
    url,
    originalPrice,
    title,
    displayCartFn,
    updateProducts,
  } = props;
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const userID =useSelector((state)=> state.auth?.login?.currentUser?._id)
  const add = async() => {
   let itemCart ={}
    itemCart.product = id
    itemCart.user =userID
    itemCart.quantity =1 
    itemCart.add =1 ;
    console.log(itemCart);
    const isAdd = await addCart(dispatch,itemCart);
    if(!userID){
      navigate("/login")
    }
    if(isAdd) {
      await getCart(dispatch,itemCart.user);
    }
    

  };
  return (
    <>
      <div key={id} className="image-item product-item__col"   >
        {/* <div className="image" style={{height:"100px"}}> */}
         <Link to={`/product/${id}`}>
            <Image
            // preview={{
            //   visible: false,
            //   width: '200px',
              
            // }}
             
              width="100%"
              height={200}
              src={require(`../../../assets/imgs/${url}`)}
            />
          </Link>
        {/* </div> */}
        <div className="slide_ct">
          
          <h4 className="product-item__name">{name} </h4>
         
          <div className="price-Product">
          <div className="price"> {originalPrice} </div>
          <div className="price2"> <span style={{color:"#e95d2d"}}>{price}đ  </span> </div>
          <div className="sold">SL:{ sold}</div>
          </div>
         
          <button onClick={add} className="them2">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
};
// const mapStateToProps = state => ({});
// const mapDispatchToProps = {  updateProducts };
// export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
export default ProductItem;
