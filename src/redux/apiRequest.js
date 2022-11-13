import axios from "axios";
import { getOrdersFailed,   getOrdersStart, getOrdersSuccess,  } from "./orderSlice";
import { getOrdersIdFailed, getOrdersIdStart, getOrdersIdSuccess,aceptConfirmFailed, aceptConfirmStart, aceptConfirmSuccess, cancelOrderStart, cancelOrderSuccess, cancelOrderFailed  } from "./orderIDSlice";
import { deleteProductFailed, deleteProductsSuccess, deleteProductStart,
     getProductsFailed, getProductsStart, getProductsSuccess,
     updateProductStart,updateProductsSuccess,updateProductFailed,
   addProductFailed,addProductsSuccess,addProductStart, getTrashProductsStart,
    getTrashProductsSuccess, getTrashProductsFailed
    ,restoreProductFailed,restoreProductStart,restoreProductsSuccess
} from "./productSlice";
import { getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";
import { loginFailed, loginStart, loginSusscess,logOutStart,logOutSusscess,logOutFailed, getProfileUpdate } from "./authSlice";
import { addCartFailed, addCartStart, addCartSusscess, cartLogout, deleteCartFailed, deleteCartStart, deleteCartSusscess, getCartFailed, getCartStart, getCartSusscess } from "./cartSlice";

///// auth ------------

export const authLogin = async (dispatch, user,navigate) => {
    dispatch(loginStart())
    try{
        const res = await axios.post("/v1/auth/login",user);
        dispatch(loginSusscess(res.data))
        navigate("/")
    }catch(err){
        dispatch(loginFailed())
    }

}
export const getProfile = async (dispatch, user) => {
    dispatch(loginStart())
    try{
        const res = await axios.post("/v1/auth/login",user);
        dispatch(getProfileUpdate(res.data))
       
    }catch(err){
        dispatch(loginFailed())
    }

}

export const logOut = async(dispatch,id,navigate,token)=>{
    dispatch(logOutStart());
    try{
        await axios.post("v1/auth/logout",id,{
            headers:{
                token:  `Bearer ${token}`
            }
        });
        dispatch(logOutSusscess());
        dispatch(cartLogout());
        navigate("/login")
    }
    catch(err){
        dispatch(logOutFailed());
    }
}

////  Products ---------------------


export const getAllProducts = async(dispatch, page ) =>{
    dispatch(getProductsStart());
    try{
        let res;
        if(page === 0){
         res = await axios.get(`/v1/product`)
        }
        else
            {
         res = await axios.get(`/v1/product?page=${page}`)}
        
        // console.log(res.data)
        dispatch(getProductsSuccess(res.data));
    }
    catch(err){
    dispatch(getProductsFailed());    
    }
};

export const deletedProduct =async(dispatch, id) =>{
    dispatch(deleteProductStart());
    try{
        const res =await axios.delete(`/v1/product/${id}`)
        dispatch(deleteProductsSuccess(res.data));
        return true;
    }
    catch(err){
        dispatch(deleteProductFailed());   
        return false 
        }
}

export const updatedProduct =async(dispatch,values,id) =>{
    dispatch(updateProductStart());
    try{
        const res =await axios.put(`/v1/product/edit/${id}`,values)
        dispatch(updateProductsSuccess(res.data));
        return true;
    }
    catch(err){
        dispatch(updateProductFailed());   
        return false 
        }
}
export const addProduct =async(dispatch,values) =>{
    dispatch(addProductStart());
    try{
        const res =await axios.post(`/v1/product/add`,values)
        dispatch(addProductsSuccess(res.data));
        return true;
    }
    catch(err){
        dispatch(addProductFailed());   
        return false 
        }
}
export const getTrashProduct =async(dispatch) =>{
    dispatch(getTrashProductsStart());
    try{
        const res =await axios.get(`/v1/product/trash`)
        dispatch(getTrashProductsSuccess(res.data));
        
    }
    catch(err){
        dispatch(getTrashProductsFailed());   
       
        }
}

export const restoreProduct =async(dispatch,id) =>{
    dispatch(restoreProductStart());
    try{
        const res =await axios.patch(`/v1/product/restore/${id}`)
        dispatch(restoreProductsSuccess(res.data));
        return true;
    }
    catch(err){
        dispatch(restoreProductFailed());   
        return false 
        }
}
export const getProductID=async(id) =>{
    
    try{
        const res =await axios.get(`/v1/product/${id}`)
        // dispatch(deleteCartSusscess(res.data));
        return res.data;
    }
    catch(err){
           
        return {}
     }
}


////// ----------------------  Orders --------------------

export const getAllOrders = async(dispatch) =>{
    dispatch(getOrdersStart());
    try{
        const res = await axios.get("/v1/order")
        // console.log(res.data)
        dispatch(getOrdersSuccess(res.data));
    }
    catch(err){
    dispatch(getOrdersFailed());    
    }
};

export const getAllOrdersId = async(dispatch,id) =>{
    dispatch(getOrdersIdStart());
    try{
        const res = await axios.get(`/v1/order/${id}`)
        // console.log(res.data)
        console.log(res.data)
        dispatch(getOrdersIdSuccess(res.data));
    }
    catch(err){
    dispatch(getOrdersIdFailed());    
    }
};
export const apcetConfirm =async(dispatch,id) =>{
    dispatch(aceptConfirmStart());
    try{
        const res=await axios.post(`/v1/order/confirm/${id}`)
        dispatch(aceptConfirmSuccess())
    }
    catch(e){
        dispatch(aceptConfirmFailed())
    }
}
export const cancelOrder =async(dispatch,id) =>{
    dispatch(cancelOrderStart());
    try{
        const res=await axios.post(`/v1/order/cancel/${id}`)
        dispatch(cancelOrderSuccess())
    }
    catch(e){
        dispatch(cancelOrderFailed())
    }
}





/////  User ---------------------------------

export const getAllUsers = async(dispatch) =>{
    dispatch(getUsersStart());
    try{
        const res = await axios.get("/v1/user")
        // console.log(res.data)
        dispatch(getUsersSuccess(res.data));
    }
    catch(err){
    dispatch(getUsersFailed());    
    }
};


////// Cart

export const getCart = async(dispatch,id) =>{
    dispatch(getCartStart());
    try{
        const res = await axios.get(`/v1/cart/${id}`)
        // console.log(res.data)
        dispatch(getCartSusscess(res.data));
    }
    catch(err){
    dispatch(getCartFailed());    
    }
};

export const addCart=async(dispatch,value) =>{
    dispatch(addCartStart());
    try{
        const res =await axios.post(`/v1/cart/add`,value)
        dispatch(addCartSusscess(res.data));
        return true;
    }
    catch(err){
        dispatch(addCartFailed());   
        return false 
        }
}
export const deleteCartItem=async(dispatch,id) =>{
    dispatch(deleteCartStart());
    try{
        const res =await axios.delete(`/v1/cart/${id}`)
        dispatch(deleteCartSusscess(res.data));
        return true;
    }
    catch(err){
        dispatch(deleteCartFailed());   
        return false 
        }
}