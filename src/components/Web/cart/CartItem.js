import { Image, InputNumber } from "antd";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { deleteCartItem, getCart } from "../../../redux/apiRequest";
const CartItem = (props) => {
  const ItemCart = useSelector((state) => state.cart?.carts?.cartItems?.carts);
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.auth?.login?.currentUser?._id);

  return (
    <>
      {ItemCart?.map((item, index) => {
        return (
          <div key={index} className="miniCart-item">
            <div className="cartItem-img">
              <img
                // preview={{

                src={require(`../../../assets/imgs/${item.product.images[0]}`)}
              ></img>

              <button
                className="rm"
                onClick={async () => {
                  console.log(item._id);
                  await deleteCartItem(dispatch, item._id);
                  await getCart(dispatch, userID);
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="cartItem-box">
              <div className="cartItem-boxInfo">
                <h3 className="cartItem-infoName">{item.product.name}</h3>
                <div className="cartItem-infoPrice">
                  <p className="cartItem-newPrice" data-value="0">
                    {item.product.price}
                  </p>
                  <p
                    className="cartItem-newPrice2"
                    data-value={item.product.originalPrice}
                  >
                    Giá Cũ ₫
                  </p>
                  <div className="soluong">
                    <p className="cartItem-oldPrice"> So luong</p>
                   
                    <InputNumber
                      size="small"
                      maxLength={50}
                      style={{width:50}}
                      id="soLuong"
                      name="soLuong"
                      // defaultValue={item.quantity}
                      value={item.quantity}
                      
                      // onChange={onChangeNumber2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
