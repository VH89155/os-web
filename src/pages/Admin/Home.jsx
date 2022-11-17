
import axios from 'axios';
import React, { useEffect, useRef, forwardRef } from 'react';
import { useState } from "react";
import { Await } from 'react-router-dom';
import BarChart from '../../components/Chart/BarChart';
import PieChart from '../../components/Chart/PieChart';
const Home = () => {
  const [dataMonth, setDataMonth] = useState([])
  const [productOrder, setProductOrder] = useState([])
   useEffect(()=>{
     axios.get("/v1/statistical/month").then(res=> setDataMonth(res.data))
     axios.get("v1/statistical/productOrder").then(res=> setProductOrder(res.data)) 
   },[])
   
    // let data = res.data;
    console.log(dataMonth);
    
    const ToTalN =  dataMonth.reduce((total,item)=>{
        return total + item.sum
    },0)



   
    const TotalData ={

        labels:  dataMonth.map((item) => item.month.month),
        datasets: [
          {
            label: ` Money 2022: ${ToTalN}đ`,
            // data:DataMonth.map((data)=>data.sum),
            data:dataMonth.map((item) => item.sum),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      
    }
    // const ToTalP =  productOrder.reduce((total,item)=>{
    //   console
    //   return total + item.quantity
    // },0)

    const ProductlData ={

      labels:  productOrder.map((item) => item.name),
      datasets: [
        {
          label: `Total Product 2022:  `,
          // data:DataMonth.map((data)=>data.sum),
          data:productOrder.map((item) => item.quantity),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    
  }
   

   
    
      // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT
    
      return (
        <div className="App" >
          <div style={{ width: 700, marginLeft:300,textAlign:"right" }}>
            <BarChart chartData={TotalData} />
          </div>
          <div style={{ width: 350, marginLeft:500 , marginTop:50 }}>
          <PieChart  />
           </div>
         <div style={{ width: 700 ,marginLeft:300 , marginTop:50}}>
            <BarChart chartData={ProductlData} />
          </div>
      
        </div>
      );
}
 
export default Home;