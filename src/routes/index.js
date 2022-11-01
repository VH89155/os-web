
// Layout
import DashboardPage from "../components/Layout/DashboardPage/DashboardPage";



//Pages

import HomeAdmin from "../pages/Admin/Home";
import ProductAdmin from "../pages/Admin/Product";
import addProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";
import TrashProduct from "../pages/Admin/TrashProduct";
import OrderProduct from "../pages/Admin/Order";
import OrderID from "../pages/Admin/OrderID";
//Public Routes

const publicRoutes = [
    { path: '/admin', component: HomeAdmin, layout: DashboardPage  },
    { path: '/admin/product', component: ProductAdmin, layout: DashboardPage  },
    { path: '/admin/addProduct', component: addProduct, layout: DashboardPage  },
    {path: '/admin/editProduct',component:EditProduct,layout:DashboardPage}, 
    {path: '/admin/trashProduct',component:TrashProduct,layout:DashboardPage}, 
    {path: '/admin/order',component:OrderProduct,layout:DashboardPage},   
    {path: '/admin/orderID',component:OrderID,layout:DashboardPage},  
//    
    
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };