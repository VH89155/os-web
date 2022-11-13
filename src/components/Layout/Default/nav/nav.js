import { isAsyncThunkAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCart, logOut } from "../../../../redux/apiRequest";
import Cart from "../../../Web/cart/cart";


const Nav = () => {
  const auth = useSelector((state)=>state.auth?.login?.currentUser)
  const ItemCart =useSelector((state)=>state.cart?.carts?.cartItems?.carts)
  // console.log(ItemCart.length)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openCart, setOpenCart] = useState(false)
useEffect(()=>{
  if(auth){
    getCart(dispatch, auth._id)
  }
},[auth])

  const handleLogout = ()=>{
    logOut(dispatch,auth?._id,navigate,auth?.accessToken)
  }
  return (
    <>
      <section className="main container top">
        <div className="logo">
          <img src="../img/logo.png" alt="" />
        </div>
        <div className="divrong"></div>
        <nav className="col-md8 navs nav-link navbar navbar-expand-lg navbar-light">
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/">
                Trang Chủ
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/introduce">
                Giới Thiệu
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/products">
                Sản Phẩm
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/news">
                Tin Tức
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/partners">
                Đối Tác
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/contract">
                Liên Hệ
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              {
                auth?(
                  <>
                  <div className="header__cart-wrap" onClick={()=>setOpenCart(!openCart)}>
                <i class="fa-solid fa-cart-shopping  header__cart-icon"></i>
                <span class="header__cart-notice">{ItemCart?.length || 0}</span>
                 </div>
                 </>
                 )
                 
                  :(
                    <>
                    <div className="header__cart-wrap" onClick={()=>navigate("/login")}>
                     <i class="fa-solid fa-cart-shopping  header__cart-icon"></i>
                     <span class="header__cart-notice">0</span>
                    </div>
                    </>
                  )
                
              }
              
              {openCart? (<Cart openCart={openCart} setOpenCart={setOpenCart}></Cart>) :<></> } 
              {/* <div className="gachduoi"></div> */}
            </div>
          </div>
          {auth? (
            <>
              <div className="navh">
              <div className="navh3">
              <div className="user-nav">
                <p className=" user-name"  >Hi, <span> {auth.username}  </span> </p>
                {/* <Link className="navbar-brand" style={{marginLeft:"100px"}} to="/login" onClick={handleLogout}>Logout</Link> */}
                <ul>
                  <li><Link  to="/login" onClick={handleLogout}>Logout</Link></li>
                  {auth?.admin ? <> <li><Link  to="/admin" >Admin</Link></li></> : 
                  <>  <li><Link  to="/profile" >Profile</Link></li></>}
                 
                </ul>

               </div>
               
                {/* <div className="gachduoi" style={{marginLeft:"100px", width:"100px"}}> </div> */}
              </div>
            </div>
            </>
          )  : (
            <>
             <div className="navh">
              <div className="navh3">
              
                <Link className="navbar-brand" style={{marginLeft:"100px"}} to="/login">Đăng nhập</Link>
                <div className="gachduoi" style={{marginLeft:"100px", width:"100px"}}> </div>
              
              </div>
            </div>
            </>
          )
         } 
         
           
         
        </nav>
        {/* <div className="navh2">
                <div className="button2">
                  <div className="navbar-brand">alo</div>
                  <div className="span"></div>
                  <div className="span"></div>
                  <div className="span"></div>
                </div>
              </div> */}
      </section>
    </>
  );
};

export default Nav;
