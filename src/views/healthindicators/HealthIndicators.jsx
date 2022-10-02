import React from 'react';
import { Breadcrumb, Form, DatePicker, Input, Button, Slider, Divider  } from 'antd';

function HealthIndicators() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const marks = {
    60: { style: { color: '#19B809', }, label: <strong>60ppm</strong>, },
    70: { style: { color: '#B9E600', }, label: <strong>70ppm</strong>, },
    84: { style: { color: '#E6A000', }, label: <strong>84ppm</strong>, },
    100: { style: { color: '#E60000', }, label: <strong>100ppm</strong>, },
  };


  return (
    <>
    <Breadcrumb style={{ margin: '16px 0', }} >
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Indicadores de salud</Breadcrumb.Item>
    </Breadcrumb>
    <div className='container__principal'>
      <Form name="basic" labelCol={{ span: 18, }} wrapperCol={{ sm: 24, md: 24, lg: 8 }} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
        <Form.Item label="Vacuna" name="conditionType" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <Input placeholder='Nombre de la vacuna' />
        </Form.Item>
        <Form.Item label="Fecha vacuna" name="diagnosisDate" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <DatePicker placeholder='Seleccione una fecha' style={{width: '100%'}} />
        </Form.Item>
        <Form.Item >
        <Button type="primary" htmlType="submit"> Guardar nueva vacuna </Button>
        </Form.Item>
      </Form>
      <Divider />
      <Form name="basic1" labelCol={{ span: 18, }} wrapperCol={{ sm: 24, md: 24, lg: 8 }} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
        <Form.Item name="slider" label="Frecuenca cardiaca" rules={[ { required: true, message: 'Campo requerido.', }, ]} >
          <Slider marks={marks} defaultValue={100} tooltip={{ open: true,}} min={50} />
        </Form.Item>
        <Form.Item label="Presion arterial" name="conditionType" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Saturacion de exigeno" name="conditionType" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Horas de entrenamiento" name='training' rules={[ { required: true, message: 'Campo requerido.', }, ]} >
          <Input placeholder="Cantidad de horas" />
        </Form.Item>
        <Form.Item label="Kilometros recorridos" name='kilometersTraveled'  rules={[ { required: true, message: 'Campo requerido.', }, ]} >
          <Input placeholder="Cantidad de kilometros" />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit"> Guardar entrenamiento </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  )
}

export default HealthIndicators;
