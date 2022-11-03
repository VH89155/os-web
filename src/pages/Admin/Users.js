
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table,Image,message } from 'antd';
import React, { useRef, useState, useEffect, useContext } from 'react';
import {useDispatch,useSelector} from 'react-redux';
// import Highlighter from 'react-highlight-words';
import { getAllUsers} from '../../redux/apiRequest';
import Moment from 'react-moment';
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../../components/Context/Context';




const User = (props) => {
const dispatch = useDispatch();
const produtList = useSelector((state)=> state.users?.users?.allUsers)
const [deleted,setDeleted] =useState(true);
const data = produtList || []


useEffect(()=>{
  getAllUsers(dispatch)
  
},[deleted])

const handleEdit =(id)=>{
  
  
}
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
    title: 'User name',
    dataIndex: 'username',
    key: 'username',
    width: '20%',
    ...getColumnSearchProps('username'),
  },
  
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: '20%',
   
  },
  {
    title: 'Admin',
    dataIndex: 'admin',
    key: 'admin',
    width: '20%',
    render: (_, record) =>{
        if(record.admin) return  <Button type="primary">Amin</Button>
        else return  <Button type="primary">User</Button>
    }
    
  },
  {
    title: 'Create ',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: '20%',
    render: (_, record) =>{
        return  <Moment format="DD/MM/YYYY" date={record.createdAt} />
       
    }
    
  },
  {
    title: 'Update',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    width: '20%',
    render: (_, record) =>{
        return  <Moment format="DD/MM/YYYY" date={record.updatedAt} />
       
    }
    
  },
  
];
return <Table
 
rowKey={record => record._id}
 columns={columns}
//  expandable={{
//   expandedRowRender: (record) => (
//     <>
//     <p
//       style={{
//         margin: 0,
//       }}
//     >
//      {/* Description:  {record.description} */}
//     </p>
//     <p
//       style={{
//         margin: 0,
//       }}
//     >
//       Date create: <Moment format="DD/MM/YYYY" date={record.createdAt} />
//     </p>
//     </>
    
//   ),
//   rowExpandable: (record) => record.name !== 'Not Expandable',
// }}
 
 dataSource={data}  />; 
}
 
export default User;




