import React from 'react';
import { Breadcrumb, Form, DatePicker, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function ExamResults() {

  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e?.fileList;
  };

  return (
    <>
    <Breadcrumb style={{ margin: '16px 0', }} >
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Resultados de examenes</Breadcrumb.Item>
    </Breadcrumb>
    <div className='container__principal'>
      <Form name="basic" labelCol={{ span: 18, }} wrapperCol={{ sm: 24, md: 24, lg: 8 }} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
        <Form.Item label="Nombre del examen" name="description" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Fecha" name="diagnosisDate" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <DatePicker placeholder='Seleccione una fecha' style={{width: '100%'}} />
        </Form.Item>
        <Form.Item label="Descripcion" name="description" rules={[ { required: true, message: 'Campo requerido.', }, ]}>
          <TextArea rows={8} />
        </Form.Item>
        <Form.Item name="upload" label="Imagen del examen" valuePropName="fileList" getValueFromEvent={normFile} >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Seleccionar un archivo</Button>
          </Upload>
        </Form.Item>
        <Form.Item >
        <Button type="primary" htmlType="submit"> Guardar </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  )
}

export default ExamResults;
