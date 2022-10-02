import React from 'react';
import { Typography, Avatar, List, Row, Col, Card, Descriptions, Breadcrumb, Layout  } from 'antd';
import CharPie from '../../components/charpie/CharPie';
import CharLine from '../../components/charline/CharLine';
import CharBar from '../../components/charbar/CharBar';

function Home() {

  const { Title, Text } = Typography;

  const data = [
    {
      Name: 'Ant Design Title 1',
      email: 'prueba@prueba.com'
    },
    {
      Name: 'Ant Design Title 2',
      email: 'prueba@prueba.com'
    },
    {
      Name: 'Ant Design Title 3',
      email: 'prueba@prueba.com'
    },
    {
      Name: 'Ant Design Title 4',
      email: 'prueba@prueba.com'
    },
  ];

  const infoPersonal = {
    name: 'Oscar Anyei Polo Leon',
    mobile: '3082552244',
    age: '22', 
    gender: 'Masculino',
    email: 'prueba@prueba.com'
  }

  return (
    <>
    <Breadcrumb style={{ margin: '16px 0', }} >
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>

    <div className='container__principal'>
      <Title>Bienvenido Oscar Polo</Title>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={24} lg={6} gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }}>
          <Card type="inner" title="Familiares registrados" style={{height: '100%'}}>
            <List size="small"  itemLayout="horizontal" dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                      title={<a href="https://ant.design">{item.Name}</a>}
                      description={item.email}
                    />
                  </List.Item>
                  )}
                />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={24} lg={24} gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }}>
                <Card type="inner" title="Informacion basica" >
                <Descriptions>
                  <Descriptions.Item label="Nombre"><Text strong>{infoPersonal.name}</Text></Descriptions.Item>
                  <Descriptions.Item label="Celular"><Text strong>{infoPersonal.mobile}</Text></Descriptions.Item>
                  <Descriptions.Item label="Edad"><Text strong>{infoPersonal.age}</Text></Descriptions.Item>
                  <Descriptions.Item label="Genero"><Text strong>{infoPersonal.gender}</Text></Descriptions.Item>
                  <Descriptions.Item label="Correo"><Text strong>{infoPersonal.email}</Text></Descriptions.Item>
                </Descriptions>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={10} >
              <Card type="inner" title="Frecuencia cardiaca" style={{height: '350px'}} >
                <CharPie />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={14} >
              <Card type="inner" title="Distancia recorrida" style={{height: '350px'}} >
                <CharLine />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[8, 32]} style={{marginTop:'30px'}}>
        <Col span={24} gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }}>
          <Card type="inner" title="Entrenamientos" >
            <CharBar />
          </Card>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Home;