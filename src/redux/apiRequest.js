import axios from "axios";
import { deleteProductFailed, deleteProductsSuccess, deleteProductStart, getProductsFailed, getProductsStart, getProductsSuccess,updateProductStart,updateProductsSuccess,updateProductFailed,
   addProductFailed,addProductsSuccess,addProductStart, getTrashProductsStart, getTrashProductsSuccess, getTrashProductsFailed
    ,restoreProductFailed,restoreProductStart,restoreProductsSuccess
} from "./productSlice";



export const getAllProducts = async(dispatch) =>{
    dispatch(getProductsStart());
    try{
        const res = await axios.get("/v1/product")
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
