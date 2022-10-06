import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './Login.css'

function Login() {

  let navigate = useNavigate();

 const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const onFinish = (values) => {
    // localStorage.setItem("user", JSON.stringify({login: true}));
    navigate('/*');
  };

  useEffect(() => {
    console.log("login",user.login);
    if(user.login){
      navigate('dashboard/home');
    }
  }, [user,navigate])

  return (
    <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish} >
      <Form.Item name="username" rules={[ { required: true, message: 'Please input your Username!', }, ]} >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[ { required: true, message: 'Please input your Password!', }, ]} >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button"> Iniciar secion </Button>
      </Form.Item>
    </Form>
  )
}

export default Login;
