import React from 'react';
import { PageHeader, Dropdown, Menu, Tag, Tooltip } from 'antd';
import { UserOutlined, UnlockOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';
import './Header.css';
import { useNavigate, Link } from 'react-router-dom';

function Header() {

  let navigate = useNavigate();
  const admin = true

  const onMenuClick = (e) => {
    localStorage.setItem("user", JSON.stringify({login: false}))
    navigate('login')
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