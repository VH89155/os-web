import React, { useState,useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

function PieChart({ chartData }) {
  
  const [categoryOrder,setCategoryOrder] = useState([])
   useEffect(()=>{
      
     axios.get("/v1/statistical/categoryOrder").then(res=> setCategoryOrder(res.data))
   },[])
   
    // let data = res.data
    const CategoryData ={

      labels:  categoryOrder.map((item) => item.category),
      datasets: [
        {
          label: "Category Order",
          // data:DataMonth.map((data)=>data.sum),
          data:categoryOrder.map((item) => item.sum),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#4d4dff",
            "#cc0044",
            "#1aff1a",
            "#cc0044",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    
  }


  return <Pie data={CategoryData} />;
}

export default PieChart;
