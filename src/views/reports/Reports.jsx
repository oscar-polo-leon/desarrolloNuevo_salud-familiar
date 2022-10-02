import React from 'react';
import { Breadcrumb, Select, Form, DatePicker, Button } from 'antd';

function Reports() {

  const { Option } = Select;
  const { RangePicker } = DatePicker;

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
      <Breadcrumb.Item>Reportes</Breadcrumb.Item>
    </Breadcrumb>
    <div className='container__principal'>
      <Form name="basic" labelCol={{ span: 18, }} wrapperCol={{ sm: 24, md: 24, lg: 8 }} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
        <Form.Item label="Tipo de reporte" name="conditionType" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <Select placeholder="Seleccione una opcion" style={{width: '100%'}}>
            <Option value="demo">Demo</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tipo de archivo" name="conditionType" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <Select placeholder="Seleccione una opcion" style={{width: '100%'}}>
            <Option value="demo">Demo</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Rango de fechas" name="diagnosisDate" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <RangePicker style={{width: '100%'}} />
        </Form.Item>
        <Form.Item  >
        <Button type="primary" htmlType="submit"> Generar reporte </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  )
}

export default Reports;