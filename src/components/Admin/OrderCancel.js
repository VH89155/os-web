
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table,Image,message,Progress,Modal } from 'antd';
import React, { useRef, useState, useEffect, useContext } from 'react';
import {useDispatch,useSelector} from 'react-redux';
// import Highlighter from 'react-highlight-words';
import Moment from 'react-moment';
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../Context/Context';
import { getAllOrders,getAllOrdersId } from '../../redux/apiRequest';
import OrderID from './OrderIDCancel';



const Order = (props) => {
var {setProductEdit} = props;
const dispatch = useDispatch();
const orderList = useSelector((state)=> state.orders?.orders?.allOrders)
const [deleted,setDeleted] =useState(true);
const data1 = orderList.map((item,index)=>({...item,index})) || []
const data =data1.filter((item) => item.cancel === true)
const [open, setOpen] = useState(false);

// const handleDelete =(id) =>{
//   const isDelete = deletedProduct(dispatch,id);
//   if(isDelete){
//     message.success("Xóa thành công!");
//     setDeleted(!deleted)
//   }
//   else{
//     message.error("Xóa không thành công!")
//   }
// }

useEffect(()=>{
  getAllOrders(dispatch)
  
},[deleted])

// const handleEdit =(id)=>{
//   setProductEdit(id)
  
// }
const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');
const HandleShow =(id)=>{
    getAllOrdersId(dispatch,id)
    setOpen(true)
    // useNavigate('/admin/orderID')
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
    // searchedColumn === dataIndex ? (
    //   <Highlighter
    //     highlightStyle={{
    //       backgroundColor: '#ffc069',
    //       padding: 0,
    //     }}
    //     searchWords={[searchText]}
    //     autoEscape
    //     textToHighlight={text ? text.toString() : ''}
    //   />
    // ) : (
    //   text
    // ),
    text
});
let i=1;
const columns = [
    // {
    //     title: 'STT',
    //     dataIndex :'index',
    //     key: 'index',
    //     width: '10%',
       
    // },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '20%',
    ...getColumnSearchProps('id'),
  },
  {
    title: 'UseName',
    dataIndex: 'username',
    key: 'username',
    width: '10%',
    ...getColumnSearchProps('username'),
    // onFilter: (value, record) => record.category.startsWith(value),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: '10%',
   
    sorter: (a, b) => a.email- b.email,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    width: '20%',
   
    sorter: (a, b) => a.phoneNumber- b.phoneNumber,
    sortDirections: ['descend', 'ascend'],
  },
  // {
  //   title: 'Total Price',
  //   dataIndex: 'totalPrice',
  //   key: 'totalPrice',
  //   width: '10%',
  //   ...getColumnSearchProps('totalPrice'),
  //   sorter: (a, b) => a.totalPrice- b.totalPrice,
  //   sortDirections: ['descend', 'ascend'],
  // },
  {
    title: 'Status',
    
    key: 'status',
    width: '10%',
    
    sorter: (a, b) => a.status > b.status,
    sortDirections: ['descend', 'ascend'],
    render: (_,record) =>{
      
      return  <Progress type="circle" percent={100} width={60} status="exception" format={() => 'Cancle'}/>
      
    }
  },
 

  {
    title: 'Action',
    key: 'action',
    render: (_, record) =>{ 
       return (
      <Space size="middle">
      
      <Button type="primary" onClick={()=>HandleShow(record.id)}>show</Button>
      
      </Space>
       )
    },
  },
];
return (
<div style={{border:'1px ',borderRadius:"10px", boxSizing:'border-box'}}>
<Table
 
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
        <OrderID/>
</Modal>

 </div>
 )
}
 
export default Order;




