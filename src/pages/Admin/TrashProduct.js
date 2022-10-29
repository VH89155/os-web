
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table,Image,message } from 'antd';
import React, { useRef, useState, useEffect, useContext } from 'react';
import {useDispatch,useSelector} from 'react-redux';
// import Highlighter from 'react-highlight-words';
import { getAllProducts,deletedProduct, getTrashProduct,restoreProduct } from '../../redux/apiRequest';
import Moment from 'react-moment';
import { Link, useNavigate } from "react-router-dom";





const TrashProduct = (props) => {

var {setProductEdit} = props;
const dispatch = useDispatch();
const produtList = useSelector((state)=> state.products?.products?.trashProducts)

const [restore,setRestore] =useState(true);
const data = produtList || []
console.log(data)
const handleDelete =(id) =>{
  // const isDelete = deletedProduct(dispatch,id);
  // if(isDelete){
  //   message.success("Xóa thành công!");
  //   setDeleted(!deleted)
  // }
  // else{
  //   message.error("Xóa không thành công!")
  // }
}

const handleRestore =(id)=>{
  
   const restore1= restoreProduct(dispatch,id);
   if(restore1){
    message.success("Restore success")
    setRestore(!restore)
   }
   else{
    message.error("Restore failed!")
   }
  
}
useEffect(()=>{
  getTrashProduct(dispatch)
},[restore])

const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');
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
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
    ...getColumnSearchProps('name'),
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'Category',
    width: '10%',
    filters: [
      {
        text: 'Gỗ',
        value: 'Gỗ',
      },
      {
        text: 'Nhựa',
        value: 'Nhựa',
      },
     
    ],
    onFilter: (value, record) => record.category.startsWith(value),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: '10%',
    ...getColumnSearchProps('price'),
    sorter: (a, b) => a.price- b.price,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'OriginalPrice',
    dataIndex: 'originalPrice',
    key: 'originalPrice',
    width: '10%',
    ...getColumnSearchProps('originalPrice'),
    sorter: (a, b) => a.originalPrice- b.originalPrice,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
    width: '10%',
    ...getColumnSearchProps('sold'),
    sorter: (a, b) => a.sold- b.sold,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Images',
    dataIndex: 'images',
    key: 'images',
    width: '20%',
    
    
    render: (_, record) => (
      <Image
    width={100}
    
    src={require(`../../assets/imgs/${record.images[0]}`)}
  />
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
      <Button type="primary" onClick={()=>handleRestore(record._id)}>Restore</Button>
      <Button type="primary" danger onClick={()=>handleDelete(record._id)}>Delete</Button>
      </Space>
    ),
  },
];
return <Table
 
rowKey={record => record._id}
 columns={columns}
 expandable={{
  expandedRowRender: (record) => (
    <>
    <p
      style={{
        margin: 0,
      }}
    >
     Description:  {record.description}
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
 
 dataSource={data}  />; 
}
 
export default TrashProduct;




