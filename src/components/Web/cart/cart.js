import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
    const {setOpenCart,openCart} = props;
    return ( 
        <>
            <section className="miniCart">
              <div className="miniCart-container">
                <div className="miniCart-header">
                  <div className="miniCart-title">GIỎ HÀNG CỦA BẠN</div>
                  <button onClick={()=>setOpenCart(false)} className="miniCart-closeBtn">
                    <svg className="icon_root__7i1Fo" viewBox="0 0 20 20" opacity="1">
                      <path
                        d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="miniCart-tagline">
                  <i className="fa-solid fa-truck-arrow-right tagline-icon"></i>MIỄN PHÍ VẬN
                  CHUYỂN ĐƠN HÀNG {">"} 700K
                </div>
                <div className="miniCart-body">
                    <CartItem />
                </div>
                <div className="miniCart-footer">
                  <div className="miniCart-total">
                    <span className="miniCart-text">Thành tiền:</span>
                    <span className="miniCart-price" data-value="1">0 ₫</span>
                  </div>
                  <Link to="/cartPay">
                  <button onClick={()=>setOpenCart(false)}>
                    <span>THANH TOÁN NGAY</span>
                    <svg
                      className="miniCart_ctaBtnRightArrow__5VYQo"
                      viewBox="0 0 12 6"
                      opacity="1"
                      data-projection-id="59"
                    >
                      <path
                        fill="currentColor"
                        d="M0.125 2.70484C0.0416667 2.77556 0 2.87279 0 2.99654C0 3.12029 0.0416667 3.22636 0.125 3.31476C0.229167 3.38547 0.354167 3.42083 0.5 3.42083H10.2812L8.15625 5.25058C7.90625 5.44504 7.89583 5.64835 8.125 5.86049C8.375 6.05496 8.61458 6.04612 8.84375 5.83397L11.8438 3.28824C11.9063 3.25288 11.9479 3.20869 11.9688 3.15565C11.9896 3.10261 12 3.04958 12 2.99654C12 2.94351 11.9896 2.89047 11.9688 2.83743C11.9479 2.7844 11.9063 2.7402 11.8438 2.70484L8.84375 0.159108C8.61458 -0.0530361 8.375 -0.0530361 8.125 0.159108C7.89583 0.353574 7.90625 0.54804 8.15625 0.742506L10.2812 2.57225H0.5C0.354167 2.57225 0.229167 2.61645 0.125 2.70484Z"
                      ></path>
                    </svg>
                  </button>
                  </Link>
                  <div className="miniCart-estimationText">
                    *Ước lượng thời gian ship:
                    <span className="miniCart-estimationDate">23/08/2022</span>
                  </div>
                </div>
              </div>
            </section>
        </>
     );
}
 
export default Cart;