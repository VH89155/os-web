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
            <div className="navh3 ">
              <Link className="navbar-brand " to="/contract">
                Liên Hệ
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh ml-3">
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
            </div>
          </div>
          
          
          {auth? (
                      <div className="user-nav ">
                      <div className="user-nav-hv">
                      <div className="users-img-container2 nav-hv ml-10 ">
                            <img className="user-img2 " src="http://www.gravatar.com/avatar/fabac475498dabc37e3c268c4d7334c5?s=325&r=g&d=mm" alt="oke">
                            </img>
                            <div className="name_user2">
                                <h6 >{auth.username}</h6>
                            </div>
                            <div className="item-user">
                              <div className="pointer-top"></div>
                              <ul>
                                {/* <li>              {
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
                    
                  }  cart</li> */}
    
                                <li> <Link  to="/profile" > <i class="fa-solid fa-user"></i>  Profile</Link></li>
                                <li><i class="fa-solid fa-right-from-bracket"></i> <Link  to="/login" onClick={handleLogout}> Logout </Link></li>
                                {auth?.admin ? <> <li><Link  to="/admin" > <i class="fa-solid fa-user-pen"></i> Admin</Link></li></> : 
                                <>  </>}
                              </ul>
                            </div>
                        </div>
                      </div>
                    </div>
          )  : (
            <>
             <div className="navh user-nav">
              <div className="navh3">
              
                <Link className="navbar-brand text-danger login_s"   to="/login"><button type="button" class="btn btn-danger">Đăng Nhập</button> </Link>
                <div className="gachduoi" style={{opacity:0}}> </div>
              
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
