import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { ShopOutlined, SettingOutlined, LockOutlined, FireOutlined, HomeOutlined } from '@ant-design/icons';

function SiderMenu() {

  const { Sider } = Layout;

  const getItem = (label, key, icon, children, type) => {
    return {key, icon, children, label, type};
  }
  
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    getItem(<Link to="home">Inicio</Link>, 'home', <HomeOutlined />),
    getItem(<Link to="store">Condiciones de salud</Link>, 'store', <ShopOutlined />),
    getItem(<Link to="store">Indicadores de salud</Link>, 'produc', <FireOutlined />),
    getItem(<Link to="store">Resultados de exemes</Link>, 'security', <LockOutlined />),
    getItem(<Link to="store">Consultas profecionales</Link>, 'account', <SettingOutlined />),
    getItem(<Link to="store">Seguimiento de condiciones</Link>, 'security', <LockOutlined />),
    getItem(<Link to="store">Reportes</Link>, 'account', <SettingOutlined />),
  ];

  return (
    <Sider width={280} breakpoint="sm" className="site-layout-background" collapsed={collapsed} collapsible onCollapse={(value) => setCollapsed(value)} >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ height: '100%', borderRight: 0, fontSize: '16px' }} items={items} />
    </Sider>
  );
};

export default SiderMenu;