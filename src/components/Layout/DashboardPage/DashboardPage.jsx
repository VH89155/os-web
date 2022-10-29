import "./dashboardPage.css";

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,PlusCircleOutlined,
    DeleteOutlined
  } from '@ant-design/icons';
  import { Avatar, Breadcrumb, Layout, Menu, Row } from 'antd';
  import React, { useState } from 'react';
  import { Link, useNavigate } from "react-router-dom";
import Col from "antd/es/grid/col";
  const { Header, Content, Footer, Sider } = Layout;


const DashboardPage = ({children}) => {

    function getItem(label, key, icon, children) {
        return {
          key,
          icon,
          children,
          label,
        };
      }
      const items = [
        getItem('Admin', '1',<Link to="/admin" className="navbar-register"> <PieChartOutlined /></Link>),
        getItem('Product', '2',<Link to="/admin/product" className="navbar-register"> <DesktopOutlined /> </Link>),
        getItem('Product', 'sub1', <UserOutlined />, [
          getItem(<Link to="/admin/addProduct" className="navbar-register"><PlusCircleOutlined /></Link>),
          getItem(<Link to="/admin/trashProduct" className="navbar-register"><DeleteOutlined /></Link>),
          getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
      ];
      const items1 = getItem('Option 1', '1', <PieChartOutlined />)
    
    const [collapsed, setCollapsed] = useState(false);
    
    
    return (
     
         <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
           
          >
             <Row>
              <Col md={18}>
              
              </Col>
             
              <Col md={6}>
              <div>
                <Avatar size='default' icon={<UserOutlined/>} ></Avatar>
                <span> Nguyen Hiep</span>
              </div>
              </Col >
            </Row>
            </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Link to="/admin/product" className="navbar-register"><Breadcrumb.Item>User</Breadcrumb.Item></Link>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
           
          </Footer>
        </Layout>
      </Layout>
    
    );
}

  
 
export default DashboardPage;