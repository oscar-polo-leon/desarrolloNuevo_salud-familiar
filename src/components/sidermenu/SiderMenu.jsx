import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";
import { ScanOutlined, FileProtectOutlined, LockOutlined, MinusSquareOutlined, HomeOutlined, ExperimentOutlined, EyeOutlined } from '@ant-design/icons';

function SiderMenu() {

  const { Sider } = Layout;
  let location = useLocation();

  const getItem = (label, key, icon, children, type) => {
    return {label,key, icon, children,  type};
  }

  const [collapsed, setCollapsed] = useState(false);

  const items = [
    getItem(<Link to="/dashboard/home">Inicio</Link>, '/dashboard/home', <HomeOutlined />),
    getItem(<Link to="/dashboard/healthyconditions">Condiciones de salud</Link>, '/dashboard/healthyconditions', <ScanOutlined />),
    getItem(<Link to="/dashboard/healthyindicators">Indicadores de salud</Link>, '/dashboard/healthyindicators', <MinusSquareOutlined />),
    getItem(<Link to="/dashboard/examresults">Resultados de examenes</Link>, '/dashboard/examresults', <ExperimentOutlined />),
    getItem(<Link to="/dashboard/professionalconsultations">Consultas profecionales</Link>, '/dashboard/professionalconsultations', <EyeOutlined />),
    getItem(<Link to="/dashboard/conditiontracking">Seguimiento de condiciones</Link>, '/dashboard/conditiontracking', <LockOutlined />),
    getItem(<Link to="/dashboard/reports">Reportes</Link>, '/dashboard/reports', <FileProtectOutlined />),
  ];

  return (
    <Sider width={280} breakpoint="sm" className="site-layout-background" collapsed={collapsed} collapsible onCollapse={(value) => setCollapsed(value)} >
      <div className="logo" />
      <Menu theme="dark" activeKey={location.pathname} selectedKeys={location.pathname} mode="inline" style={{ borderRight: 0, fontSize: '16px' }} items={items} />
    </Sider>
  );
};

export default SiderMenu;