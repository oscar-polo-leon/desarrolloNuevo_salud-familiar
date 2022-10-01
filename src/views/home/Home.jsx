import React, { useState } from 'react';
import { Typography, Avatar, List, Row, Col, Card } from 'antd';
import ReactApexChart from 'react-apexcharts'

function Home() {

  const { Title } = Typography;
  const data = [
    {
      title: 'Ant Design Title 1',
      email: 'prueba@prueba.com'
    },
    {
      title: 'Ant Design Title 2',
      email: 'prueba@prueba.com'
    },
    {
      title: 'Ant Design Title 3',
      email: 'prueba@prueba.com'
    },
    {
      title: 'Ant Design Title 4',
      email: 'prueba@prueba.com'
    },
  ];


const [series, setSeries] = useState([44, 55, 13, 43, 22])

const [options, setOptions] = useState({
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
})













  return (
    <>
    <Title>Buenvenido Oscars Polo</Title>

<Row>

      <Col xs={24} sm={24} md={12} lg={6}>
        <Card type="inner" title="Familiares registrados" >
          <List size="small"  itemLayout="horizontal" dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.email}
                  />
                </List.Item>
                )}
              />
        </Card>
      </Col>


      <Col xs={24} sm={24} md={12} lg={18}>

        <Row>

            <Col xs={24} sm={24} lg={24}>
                <Card type="inner" title="Informacion basica" >
                  Inner Card content
                </Card>
            </Col>

            <Col flex="none"style={{width: '100%', maxWidth: '400px'}} >
              <Card type="inner" title="Frecuencia cardiaca" >
                <div id="chart" >
                  <ReactApexChart options={options} series={series} type="pie"  />
                </div>
              </Card>
            </Col>
            <Col flex="auto">
              <Card type="inner" title="Distancia recorrida" >
                Inner Card content
              </Card>
            </Col>
        </Row>

        </Col>

</Row>

<Row>

<Col span={24}>
            <Card type="inner" title="Entrenamientos" >
              Inner Card content
            </Card>
            </Col>

</Row>









    </>
  )
}

export default Home;