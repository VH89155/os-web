import { Tabs } from "antd";
import OrderSucssess from "../../components/Admin/OrderSucccess"
import OrderWating from "../../components/Admin/OrderWating"
import OrderCancel from "../../components/Admin/OrderCancel";
import { Fragment, useState } from 'react';
const Order = () => {
  let arr =[]
  let name1=[]
  
  arr.push(OrderWating)
  arr.push(OrderSucssess)
  arr.push(OrderCancel)
  name1.push('Order Wating')
  name1.push('Order Success')
  name1.push('Order Cancel')
  
  const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
   
    let App =arr[i];
    
    if(!App) App=Fragment 
    return {
      label: `${name1[i]}`,
      
      key: id,
      children: (
        <>
          <App />
        </>
      ),
    };
  });
  return ( 
  <div className="card-container">
  <Tabs type="card" items={items} />
</div> 
);
}
 
export default Order;