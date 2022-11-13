import { Button } from "antd";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Web/product/BannerProduct";
import ProductRow from "../../components/Web/product/ProductsRow";
// import "../../css/xuongmoc.css"
import "../../css/sanpham.css"
import { getAllProducts } from "../../redux/apiRequest";


const Products = (props) => {
   // const [page,setNewPage] = useState(1);
   // // const {allProduct,displayCartFn} = props;
   // const dispatch = useDispatch()
   // useEffect(()=>{
   //    getAllProducts(dispatch,page)
   // },[page])
   
   // const totalPages =useSelector((state)=> state.products?.products?.totalPages )
   
    return ( 
        <div >
         
        
        
           {/* <Banner /> */}
           <ProductRow   /> 
           
           

        </div>
       
     );
}
 
export default Products;