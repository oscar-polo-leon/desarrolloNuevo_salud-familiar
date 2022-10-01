import React from 'react';
import { PageHeader, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import image from '../../images/logo-groupby.svg';
import './Header.css';

function Header() {

  return(
    <PageHeader
      style={{ boxShadow: '0px -20px 20px 5px #4a80a1', transition: 'ease-in-out 0.2s'}}
      title={<Link to="/"><h3 className='h3-brand'>GroupBy</h3></Link>}
      avatar={{ src: `${image}` }}
      extra={[
        <Link to="account" key="3" ><Button ghost icon={<LoginOutlined />} type="success"><span className='span-button'>Cuenta</span></Button></Link>
      ]}
    />
  );
}

export default Header;