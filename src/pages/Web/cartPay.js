import { Image, InputNumber, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addCart, getCart } from "../../redux/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CartItem from "../../components/Web/cart/CartItem";
const CartPay = () => {
  const auth = useSelector((state)=>state.auth?.login?.currentUser)
  const ItemCart = useSelector((state) => state.cart?.carts?.cartItems?.carts)
  const profile = useSelector((state)=>state.auth?.login?.currentUser?.profile)
  console.log(profile)
  let Tong=0;
  const userID =useSelector((state)=> state.auth?.login?.currentUser?._id)
  const navigate =useNavigate()
  const [submit,setSubmit] =useState(true)
  const [load,setLoad] =useState(false)
  useEffect(()=>{
     getCart(dispatch, userID);
    
  },[load])
  const dispatch = useDispatch();
  const onSubmit = async() =>{
    if(profile==null){
      message.error("Bạn chưa cập nhật đia cỉ giao hàng")
      return 0;
    }
    setTimeout(() => {
        setSubmit(true);
    }, "500")
    if(submit){
      let profileOder ={}
    let CartItem =[]
    ItemCart.map((item)=>{
      CartItem.push({
        cartId: item._id,
        product: item.product._id,
        quantity: item.quantity,

      })
    })
    console.log(auth._id)
    profileOder.user = auth._id;
    profileOder.deliveryAddress= profile.deliveryAddress;
    profileOder.fullName =profile.fullName;
    profileOder.phoneNumber = profile.phoneNumber;
    if(CartItem.length >0 ){
      
      await axios.post("/v1/order/add",{infoOrder:profileOder,cartItem:CartItem}).then((res)=>res.data).then((data)=>{
        if(data.success){
          message.success("Đơn hàng của bạn đang chờ được duyệt!")
          setLoad(!load);
          setSubmit(false);
         
        }})
    }
    else{
      message.error("Chưa có sản phẩm nào được thêm")
    }
    
    
   
    

    }
    else{

    }
    
  }
 
  return (
    <div className="pay">
      <div className="khoangtrong_profile"></div>
      <div className="container payContent">
        <div className="addressPay mt-5 ml-5">
          <p className="text-danger">
            {" "}
            <i class="fa-solid fa-location-dot"></i> địa chỉ nhận hàng
          </p>
          <div className="form-group row mt-4 ">
            <div className="col-sm-3 bg-light text-dark">
             {profile?.fullName || "Còn trống"}
            </div>
            <div className="col-sm-8 text-secondary">
             {profile?.deliveryAddress || "Còn trống"}
            </div>
           <div className="col-sm-1 text-primary" onClick={()=>navigate("/profile")} >Thay đổi</div>
          </div>
        </div>
      </div>
      <div className="khoangtrong_profile"></div>
      <div className="container payContent">
        <div className="addressPay mt-5 ml-5">
          <div className="form-group row mt-4 ">
            <div className="col-sm-6 bg-light text-dark">Sản Phẩm</div>
            <div className="col-sm-2 text-secondary ">Loai</div>
            <div className="col-sm-1 text-secondary ">Giá</div>
            <div className="col-sm-1 text-secondary">số lượng</div>
            <div className="col-sm-2 text-secondary">Thành tiền</div>
          </div>
        </div>
        <div className="productPay mt-5 ml-5">
          {ItemCart?.map((item, index) => {
            Tong += parseInt(item.product.price) * parseInt(item.quantity) 
            return (
              <div key={index} className="form-group row mt-4 ">
                <div className="col-sm-1 imgPay ">
                  <img
                    src={require(`../../assets/imgs/${item.product.images[0]}`)}
                    className="mt-0"
                    style={{ minHeight: "60px", minWidth: "60px" }}
                  ></img>
                </div>
                <div className="col-sm-5 bg-light text-dark ">
                  <p className="">{item.product.name}</p>
                </div>
                <div className="col-sm-2 imgPay ">
                  <p className="text-secondary"> {item.product.category}</p>
                </div>
                <div className="col-sm-1 text-secondary mt-0">
                  <p> {item.product.price}</p>
                </div>
                <div
                  className="col-sm-1 text-secondary"
                  style={{ textAlign: "center", paddingTop: "30px" }}
                >
                  <InputNumber
                    size="small"
                    maxLength={50}
                    style={{ width: 50 }}
                    id="soLuong"
                    name="soLuong"
                    min="1" max={item.product.sold}
                    defaultValue={item.quantity}
                    //   value={item.quantity}

                    onChange={async(value) => {
                      console.log(value)  
                      let itemCart = {};
                      itemCart.product = item.product._id;
                      itemCart.user = item.user._id;
                      itemCart.quantity = value;
                      itemCart.add =2;
                      console.log(itemCart);
                      await addCart(dispatch, itemCart); 
                      
                      setLoad(!load);
                    //   console.log(isAdd)
                        // if(isAdd){
                        //     await getCart(dispatch,itemCart.user);
                        //     // setLoad(!load)
                        // }
                    }}
                  />
                </div>
                <div className="col-sm-2 text-secondary">
                  {" "}
                  <p>{ parseInt(item.product.price) * parseInt(item.quantity) }</p>{" "}
                </div>
              </div>
            );
          })}

          <hr />
          <div className="form-group row mt-4 sum_money_Pay ">
            <hr />
            <div className="col-sm-8 bg-light text-dark "></div>
            <div className="col-sm-2 text-secondary">
              {" "}
              <p>Tổng tiền :</p>{" "}
            </div>
            <div className="col-sm-2 text-secondary text-danger">
              {" "}
              <p>{Tong} đ</p>{" "}
            </div>
          </div>
          <hr />
          <div className="form-group row mt-4   ">
            <hr />
            <div className="col-sm-9 bg-light text-dark ">
              <p className="text-secondary">
                Nhấn đặt hàng là đồng ý với điều khoản của chúng tôi
              </p>
            </div>
            <div className=" text-secondary btn-pay col-sm-3 mt-4">
              <button type="button" class="btn btn-danger" disabled={CartItem<=0} onClick={onSubmit}>
                Đặt Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="khoangtrong_profile"></div>
    </div>
  );
};

export default CartPay;
