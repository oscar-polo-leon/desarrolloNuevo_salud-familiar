import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import SiderMenu from '../../components/sidermenu/SiderMenu';
import { Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Reports from '../reports/Reports';

function Dashboard() {

  const { Header, Content, Footer  } = Layout;

  return (
    <Layout style={{ minHeight: '100vh', }} >
      <SiderMenu />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, }} />
        <Content style={{ margin: '0 16px', }} >
          <Breadcrumb style={{ margin: '16px 0', }} >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div  className="site-layout-background" style={{ padding: 24, minHeight: 360, }} >
            <Routes>        
              <Route path='/home' element={<Home />} /> 
              <Route path='/store' element={<Reports />} />  
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', }} >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard;