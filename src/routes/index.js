
// Layout
import DashboardPage from "../components/Layout/DashboardPage/DashboardPage";
import Default from "../components/Layout/Default/defaultLayout";


//Pages - Admin

import HomeAdmin from "../pages/Admin/Home";
import ProductAdmin from "../pages/Admin/Product";
import addProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";
import TrashProduct from "../pages/Admin/TrashProduct";
import OrderProduct from "../pages/Admin/Order";
import User from "../pages/Admin/Users";

///Pages- Web /////
import Login from "../pages/Login/loginPage";
import ForgotPage from "../pages/Login/ForgotPage"
import Home from "../pages/Web/home";
import Product from "../pages/Web/product"; 
import DetailProduct from "../pages/Web/detailproduct";
import News from "../pages/Web/news";
import Partner from "../pages/Web/partner";
import Introuce from "../pages/Web/introduce";
import Contract from "../redux/contract";
import Profile from "../pages/Web/profile";
import CartPay from "../pages/Web/cartPay";
//Public Routes

const publicRoutes = [
    { path: '/admin', component: HomeAdmin, layout: DashboardPage  },
    { path: '/admin/product', component: ProductAdmin, layout: DashboardPage  },
    { path: '/admin/addProduct', component: addProduct, layout: DashboardPage  },
    {path: '/admin/editProduct',component:EditProduct,layout:DashboardPage}, 
    {path: '/admin/trashProduct',component:TrashProduct,layout:DashboardPage}, 
    {path: '/admin/order',component:OrderProduct,layout:DashboardPage},   
    {path: '/admin/user',component:User,layout:DashboardPage}, 
    {path: '/',component:Home,layout:Default}, 
    {path: '/products',component:Product,layout:Default}, 
     {path: '/login',component:Login,layout:Default}, 
     {path: '/product/:productId',component:DetailProduct,layout:Default},
     {path: '/news',component:News,layout:Default},
     {path: '/partners',component:Partner,layout:Default}, 
     {path: '/introduce',component:Introuce,layout:Default},       
     {path: '/contract',component:Contract,layout:Default},  
     {path: '/profile',component:Profile,layout:Default},     
     {path: '/cartPay',component:CartPay,layout:Default},     
     {path: '/forgot',component:ForgotPage,layout:Default}, 
//    
    
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };