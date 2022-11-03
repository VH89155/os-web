
// Layout
import DashboardPage from "../components/Layout/DashboardPage/DashboardPage";
import Default from "../components/Layout/Default/defaultLayout";


//Pages

import HomeAdmin from "../pages/Admin/Home";
import ProductAdmin from "../pages/Admin/Product";
import addProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";
import TrashProduct from "../pages/Admin/TrashProduct";
import OrderProduct from "../pages/Admin/Order";
import User from "../pages/Admin/Users";
import SignupForm from "../pages/Login/SingupForm";

//Public Routes

const publicRoutes = [
    { path: '/admin', component: HomeAdmin, layout: DashboardPage  },
    { path: '/admin/product', component: ProductAdmin, layout: DashboardPage  },
    { path: '/admin/addProduct', component: addProduct, layout: DashboardPage  },
    {path: '/admin/editProduct',component:EditProduct,layout:DashboardPage}, 
    {path: '/admin/trashProduct',component:TrashProduct,layout:DashboardPage}, 
    {path: '/admin/order',component:OrderProduct,layout:DashboardPage},   
    {path: '/admin/user',component:User,layout:DashboardPage}, 
    {path: '/login',component:SignupForm,layout:Default}, 
  
//    
    
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };