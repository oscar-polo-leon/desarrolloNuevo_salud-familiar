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
    getItem(<Link to="healthyconditions">Condiciones de salud</Link>, 'healthyconditions', <ShopOutlined />),
    getItem(<Link to="healthyindicators">Indicadores de salud</Link>, 'healthyindicators', <FireOutlined />),
    getItem(<Link to="examresults">Resultados de examenes</Link>, 'examresults', <LockOutlined />),
    getItem(<Link to="professionalconsultations">Consultas profecionales</Link>, 'professionalconsultations', <SettingOutlined />),
    getItem(<Link to="conditiontracking">Seguimiento de condiciones</Link>, 'conditiontracking', <LockOutlined />),
    getItem(<Link to="reports">Reportes</Link>, 'reports', <SettingOutlined />),
  ];

  return (
    <Sider width={280} breakpoint="sm" className="site-layout-background" collapsed={collapsed} collapsible onCollapse={(value) => setCollapsed(value)} >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ borderRight: 0, fontSize: '16px' }} items={items} />
    </Sider>
  );
};

export default SiderMenu;