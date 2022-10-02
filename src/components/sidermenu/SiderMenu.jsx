import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { ScanOutlined, FileProtectOutlined, LockOutlined, MinusSquareOutlined, HomeOutlined, ExperimentOutlined, EyeOutlined } from '@ant-design/icons';

function SiderMenu() {

  const { Sider } = Layout;

  const getItem = (label, key, icon, children, type) => {
    return {key, icon, children, label, type};
  }
  
  const [current, setCurrent] = useState('Home');

  const [collapsed, setCollapsed] = useState(false);

  const onClick = (e) => {
    console.log(e)
    setCurrent(e.key);
  };

  const items = [
    getItem(<Link to="home">Inicio</Link>, 'home', <HomeOutlined />),
    getItem(<Link to="healthyconditions">Condiciones de salud</Link>, 'healthyconditions', <ScanOutlined />),
    getItem(<Link to="healthyindicators">Indicadores de salud</Link>, 'healthyindicators', <MinusSquareOutlined />),
    getItem(<Link to="examresults">Resultados de examenes</Link>, 'examresults', <ExperimentOutlined />),
    getItem(<Link to="professionalconsultations">Consultas profecionales</Link>, 'professionalconsultations', <EyeOutlined />),
    getItem(<Link to="conditiontracking">Seguimiento de condiciones</Link>, 'conditiontracking', <LockOutlined />),
    getItem(<Link to="reports">Reportes</Link>, 'reports', <FileProtectOutlined />),
  ];

  return (
    <Sider width={280} breakpoint="sm" className="site-layout-background" collapsed={collapsed} collapsible onCollapse={(value) => setCollapsed(value)} >
      <div className="logo" />
      <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="inline" style={{ borderRight: 0, fontSize: '16px' }} items={items} />
    </Sider>
  );
};

export default SiderMenu;