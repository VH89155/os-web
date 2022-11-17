import "./dashboardPage.css";

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,PlusCircleOutlined,
    DeleteOutlined,
    DiffOutlined,
    LineChartOutlined,
    TableOutlined,
    ContactsOutlined,ContainerOutlined
  } from '@ant-design/icons';
  import { Avatar, Breadcrumb, Layout, Menu, Row } from 'antd';
  import React, { useEffect, useState } from 'react';
  import { Link, useNavigate } from "react-router-dom";
import Col from "antd/es/grid/col";
import { useSelector } from "react-redux";
  const { Header, Content, Footer, Sider } = Layout;


const DashboardPage = ({children}) => {
    const navigate = useNavigate()
    const auth = useSelector((state)=>state.auth?.login?.currentUser)
    useEffect(()=>{
      if(!auth?.admin || auth ==null){
        
        navigate("/login")
      }
       
    },[])
    function getItem(label, key, icon, children) {
        return {
          key,
          icon,
          children,
          label,
        };
      }
      const items = [
        getItem('Chart', '1',<Link to="/admin" className="navbar-register"> <LineChartOutlined /></Link>),
       
        getItem('Product', 'sub1', <DesktopOutlined /> , [
          getItem(<Link to="/admin/product" className="navbar-register"><ContainerOutlined /> </Link>),
          getItem(<Link to="/admin/addProduct" className="navbar-register"><DiffOutlined /> </Link>),
          getItem(<Link to="/admin/trashProduct" className="navbar-register"><DeleteOutlined /></Link>),
          
        ]),
        getItem('Orders','',<Link to="/admin/order" className="navbar-register"><TableOutlined /></Link>),
        getItem('Users', '9', <Link to="/admin/user" className="navbar-register"><UserOutlined /> </Link>),
      ];
    
      
    const [collapsed, setCollapsed] = useState(false);
    
    
    return (
     
         <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider style={{marginTop:"-4px"}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            // className="site-layout-background"
            style={{
              padding: 0,
              background:'#001529'
            }}
           
          >
             <Row>
              <Col md={16}>
              
              </Col>
             
              <Col md={6}>
              <div style={{marginTop:"-10px",textAlign:'right'}}>
                <Avatar   icon={<UserOutlined/>} ></Avatar>
                <span style={{color:'#fff'}}> {auth?.username}</span>
                <span className="back" style={{marginLeft:'2rem', color:'#fff'}}><Link  to="/" > <i className="fa-solid fa-house-user"  style={{marginLeft:'2rem', color:'#fff'}}></i></Link></span>
              </div>
              </Col >
              <Col md={2}></Col>
            </Row>
            <p>123456</p>
            </Header>
          <Content
            style={{
              border: "4px solid #ffe6f2",
              margin: '-16px 0px -10px  0px',
              borderRadius:"10px",
              zIndex: 4,
              backgroundColor: '#fff',
             
              
            }}
          >
            <div             
              style={{
                padding: 24,
                minHeight: 360,
                borderRadius:10,
              }}
            >
              {children}
            </div>
          </Content>
          {/* <Footer
            style={{
              textAlign: 'center',
              border: "4px solid #ffe6f2",
              marginRight: ' -10px',
              BorderRadiusTopleft:"10px",
              BorderRadiusTopright:"10px",
              // BorderRadiusBo:"10px",
              zIndex: 3,
              backgroundColor: '#fff',
            }}
          >
           
          </Footer> */}
        </Layout>
      </Layout>
    
    );
}

  
 
export default DashboardPage;