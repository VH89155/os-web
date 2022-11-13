import {
  Button,
  Input,
  Space,
  Table,
  Image,
  message,
  Progress,
  Row,
  Col,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { apcetConfirm,cancelOrder } from "../../redux/apiRequest";

const OrderID = (props) => {
  
   const {setLoad} = props
   const {load} =props
  const {setOpen} =props

  const dispatch = useDispatch()
  const username = useSelector((state) => state.orderID?.ordersID?.username);
  const id = useSelector((state) => state.orderID?.ordersID?.id);
  // const status = useSelector((state) => state.orderID?.ordersID?.status)
  // const cancel= useSelector((state) => state.orderID?.ordersID?.cancel);
  const totalPrice = useSelector(
    (state) => state.orderID?.ordersID?.totalPrice
  );
  const orderItems = useSelector(
    (state) => state.orderID?.ordersID?.orderItems
  );
  const handleConfirm =()=>{
    apcetConfirm(dispatch,id)
    setLoad(!load)
    setOpen(false)
  }
  const handleCancel =()=>{
    cancelOrder(dispatch,id)
    setLoad(!load)
    setOpen(false)
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "nameProduct",
      key: "nameProuct",
      width: "20%",
      //   ...getColumnSearchProps('name'),
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "20%",
    },

    {
      title: "quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "20%",
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      width: "20%",

      render: (_, record) => (
        <Image
          width={100}
          src={require(`../../assets/imgs/${record.images[0]}`)}
        />
      ),
    },
   
  ];

  return (
    <>
      <Row
        style={{
          background: "#fff0f6",
          borderRadius: "4px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      >
        <Col span={3}>
          <label>User name:</label>{" "}
        </Col>
        <Col span={6}>
          <label style={{ color: "#1890FF" }}>{username}</label>{" "}
        </Col>
      </Row>
      <Row
        style={{
          background: "#fff0f6",
          borderRadius: "4px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      >
        <Col span={3}>
          <label>ID Order:</label>{" "}
        </Col>
        <Col span={6}>
          <label style={{ color: "#1890FF" }}>{id}</label>{" "}
        </Col>
      </Row>
      <Row
        style={{
          background: "#fff0f6",
          borderRadius: "4px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      >
        <Col span={3}>
          <label>Total Price:</label>{" "}
        </Col>
        <Col span={6}>
          <label style={{ color: "#1890FF" }}>{totalPrice}</label>{" "}
        </Col>
      </Row>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={orderItems}
      />
      
            <Row>
            <Col span={12} style={{textAlign:"center"}}>
            <Button type="primary" onClick={()=>handleConfirm()} >
            Confirm
            </Button>
          </Col>
          <Col span={12} style={{textAlign:"center"}}>
            <Button type="primary" onClick={()=>handleCancel()} danger>
             Delete
            </Button>
          </Col>
        </Row>
        

        
        
    </>
  );
};

export default OrderID;
