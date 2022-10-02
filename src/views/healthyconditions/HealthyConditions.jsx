import React from 'react';
import { Breadcrumb, Select, Form, DatePicker, Input, Button } from 'antd';

function HealthyConditions() {

  const { Option } = Select;
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    <Breadcrumb style={{ margin: '16px 0', }} >
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Condiciones de salud</Breadcrumb.Item>
    </Breadcrumb>
    <div className='container__principal'>
      <Form name="basic" labelCol={{ span: 18, }} wrapperCol={{ sm: 24, md: 24, lg: 8 }} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
        <Form.Item label="Tipo de condicion" name="conditionType" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <Select placeholder="Seleccione una opcion" style={{width: '100%'}}>
            <Option value="demo">Demo</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Fecha de diagnostico" name="diagnosisDate" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <DatePicker placeholder='Seleccione una fecha' style={{width: '100%'}} />
        </Form.Item>
        <Form.Item label="Descripcion" name="description" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <TextArea rows={8} />
        </Form.Item>
        <Form.Item  >
        <Button type="primary" htmlType="submit"> Guardar </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  )
}

export default HealthyConditions;