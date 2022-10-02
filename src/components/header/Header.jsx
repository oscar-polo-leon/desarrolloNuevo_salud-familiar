import React from 'react';
import { PageHeader, Dropdown, Menu, Tag, Tooltip } from 'antd';
import { UserOutlined, UnlockOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {

  const admin = true

  const onMenuClick = (e) => {
    console.log('click', e);
  };

  const menu = (
    <Menu
      onClick={onMenuClick}
      items={[
        {
          key: '1',
          label: 'Cerrar Seccion',
          icon: <LogoutOutlined />,
        }
      ]}
    />
  );

  return(
    <PageHeader
      style={{background: 'white'}}
      subTitle={admin ? 
        <Tooltip placement="bottomLeft" title={"Todos los permisos consedidos"}>
          <Tag style={{display: 'flex', alignItems: 'center', fontSize: '15px'}} icon={<UnlockOutlined />} color="success">Administrador</Tag>
        </Tooltip> :
        <Tooltip placement="bottomLeft" title={"Permisos reservados"}>
          <Tag style={{display: 'flex', alignItems: 'center', fontSize: '15px'}} icon={<LockOutlined />} color="processing">Usuario</Tag>
        </Tooltip>
        }
      extra={[
          <Dropdown.Button key={1} overlay={menu} >{<UserOutlined />}prueba@prueba.com</Dropdown.Button>
        ]}
    />
  );
}

export default Header;