import { Button, Input, Space, Table,Image,message,Progress, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import Colors from '@ant-design/colors';
const OrderID = () => {
    const orderItems = useSelector((state)=>state.orderID?.ordersID?.orderItems)
    const username = useSelector((state)=>state.orderID?.ordersID?.username)
    const id = useSelector((state)=>state.orderID?.ordersID?.id)
    const totalPrice = useSelector((state)=>state.orderID?.ordersID?.totalPrice)
    const columns = [
        {
          title: 'Name',
          dataIndex: 'nameProduct',
          key: 'nameProuct',
          width: '20%',
        //   ...getColumnSearchProps('name'),
        },
       
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          width: '20%',
        //   ...getColumnSearchProps('price'),
        //   sorter: (a, b) => a.price- b.price,
        //   sortDirections: ['descend', 'ascend'],
        },
       
        {
          title: 'quantity',
          dataIndex: 'quantity',
          key: 'quantity',
          width: '20%',
        //   ...getColumnSearchProps('quantity'),
        //   sorter: (a, b) => a.quantity- b.quantity,
        //   sortDirections: ['descend', 'ascend'],
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
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (_, record) => (
        //     <Space size="middle">
        //     <Button type="primary"><Link to={{
        //       pathname: "/admin/editProduct",
        //       state :  record._id,
        //     }} className="navbar-register" onClick={()=>handleEdit(record)}>Edit</Link></Button>
        //     <Button type="primary" danger onClick={()=>handleDelete(record._id)}>Delete</Button>
        //     </Space>
        //   ),
        // },
      ];

    return ( 
    <>
    <Row style={{background:'#fff0f6',borderRadius:'4px', fontSize:'16px',marginBottom:'10px'}}>
        <Col span={3}><label>User name:</label> </Col>
        <Col span={6}><label style={{color:'#1890FF'}}  >{username}</label> </Col>

    </Row>
    <Row style={{background:'#fff0f6',borderRadius:'4px', fontSize:'16px',marginBottom:'10px'}}>
        <Col span={3}><label>ID Order:</label> </Col>
        <Col span={6}><label style={{color:'#1890FF'}}  >{id}</label> </Col>

    </Row>
    <Row style={{background:'#fff0f6',borderRadius:'4px', fontSize:'16px',marginBottom:'10px'}}>
        <Col span={3}><label>Total Price:</label> </Col>
        <Col span={6}><label style={{color:'#1890FF'}}  >{totalPrice}</label> </Col>

    </Row>
    <Table
    rowKey={record => record.id}
   columns={columns}
//    expandable={{
//     expandedRowRender: (record) => (
//       <>
//       <p
//         style={{
//           margin: 0,
//         }}
//       >
//        Description:  {record.description}
//       </p>
//       <p
//         style={{
//           margin: 0,
//         }}
//       >
//         Date create: <Moment format="DD/MM/YYYY" date={record.createdAt} />
//       </p>
//       </>
      
//     ),
//     rowExpandable: (record) => record.name !== 'Not Expandable',
//   }}
   
   dataSource={orderItems}  />
  
  
    </> 
    
    );
}
 
export default OrderID;


 
  
  
  