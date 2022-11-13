import axios from "axios";

import { getAllOrders,getAllOrdersId } from '../../../redux/apiRequest';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table,Image,message,Progress,Modal } from 'antd';
import React, { useRef, useState, useEffect, useContext } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Moment from 'react-moment';
import OrderID from "./profileBoughtID";
const Bought = () => {
    const [isform,setform] = useState(false);
    const displayFormFN =()=>{
        setform(!isform);
    }
    const [open, setOpen] = useState(false);
    const [load,setLoad] =useState(false);

    const dispatch = useDispatch();
    const auth =useSelector((state)=>state.auth?.login?.currentUser)
    const [order,setOrder] =useState({})
    useEffect(()=>{
             axios.get(`/v1/order/user/${auth._id}`).then((res)=> {
                console.log(res?.data)
                setOrder(res?.data)
                
            } )
          
    },[load])
let data= []
if(order.orders1){


order?.orders1.map((item,index) =>{
    if(item.cancel ===false) {
 data.push({
    id :index,
    fullName: item.fullName,
    phoneNumber :item.phoneNumber,
    status: item.status,
    cancel: item.cancel,
    totalPrice: item.totalPrice,
    _id:item._id,

 })}
})
}
const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');
const HandleShow =(id)=>{
    getAllOrdersId(dispatch,id)
    setOpen(true)
    
}
const searchInput = useRef(null);
const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm({
    closeDropdown: false,
  });
  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};
const confirmClose =(confirm)=>{
    confirm();
}
const handleReset = (clearFilters) => {
  clearFilters();
  setSearchText('');
};
const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div
      style={{
        padding: 8,
      }}
    >
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) =>{
            setSelectedKeys(e.target.value ? [e.target.value] : [])       
            handleSearch(selectedKeys, confirm, dataIndex)} }
        onPressEnter={() =>{handleSearch(selectedKeys, confirm, dataIndex)
            confirmClose(confirm)}}
        style={{
          marginBottom: 8,
          display: 'block',
        }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => {handleSearch(selectedKeys, confirm, dataIndex)
            confirmClose(confirm)}}
          icon={<SearchOutlined />}
          size="small"
          style={{
            width: 90,
          }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{
            width: 90,
          }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            confirm({
              closeDropdown: false,
            });
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Filter
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined
      style={{
        color: filtered ? '#1890ff' : undefined,
      }}
    />
  ),
  onFilter: (value, record) =>
     record[dataIndex].toString().replace(/\s/g, '').toLowerCase().includes(value.toLowerCase().trim().replace(/\s/g, '')),
  onFilterDropdownOpenChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current?.select(), 100);
    }
  },
  render: (text) =>
    
    text
});
let i=1;
const columns = [
    

  {
    title: 'Name',
    dataIndex: 'fullName',
    key: 'fullName',
    width: '30%',
    ...getColumnSearchProps('fullName'),
    // onFilter: (value, record) => record.category.startsWith(value),
  },
  
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    width: '30%',
   
    sorter: (a, b) => a.phoneNumber- b.phoneNumber,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    width: '30%',
    ...getColumnSearchProps('totalPrice'),
    sorter: (a, b) => a.totalPrice- b.totalPrice,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Status',
    
    key: 'status',
    width: '10%',
    
    sorter: (a, b) => a.status < b.status,
    sortDirections: ['descend', 'ascend'],
    render: (_,record) =>{
      if(record.status && !record.cancel) {return <Progress type="circle" percent={100} width={60} format={() => 'Done'} />}
      else if(!record.status && !record.cancel) return  <Progress type="circle" percent={100} width={60} status="normal" format={() => 'Wating'}/>
      else if(!record.status && record.cancel) return  <Progress type="circle" percent={100} width={60} status="exception" format={() => 'Cancel'}/>
    }
  },
 

  {
    title: 'Action',
    key: 'action',
    render: (_, record) =>{ 
       return (
      <Space>
    <Button type="primary" onClick={()=>HandleShow(record._id)}>show</Button>
      {/* <Button type="primary" danger >Delete</Button> */}
      </Space>
        )
      
    },
  },
];
   
    return ( 
        <>
        <Table
  style={{width:900}}
 rowKey={record => record.id}
  columns={columns}
  expandable={{
   expandedRowRender: (record) => (
     <>
     <p
       style={{
         margin: 0,
       }}
     >
      Description: 
     </p>
     <p
       style={{
         margin: 0,
       }}
     >
       Date create: <Moment format="DD/MM/YYYY" date={record.createdAt} />
     </p>
     </>
     
   ),
   rowExpandable: (record) => record.name !== 'Not Expandable',
 }}
  
  dataSource={data}  />
  <Modal
         title="Modal 1000px width"
         centered
         open={open}
         onOk={() => setOpen(false)}
         onCancel={() => setOpen(false)}
         width={1000}
         hight={100}
         
       >
         <OrderID load={load} setLoad={setLoad} setOpen={setOpen}/>
 </Modal>
        </>
     );
}
 
export default Bought;