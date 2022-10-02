import React from 'react';
import { Layout } from 'antd';
import SiderMenu from '../../components/sidermenu/SiderMenu';
import Header from '../../components/header/Header';
import { Routes, Route } from "react-router-dom";

import Home from '../home/Home';
import HealthyConditions from '../healthyconditions/HealthyConditions';
import HealthyIndicators from '../healthindicators/HealthIndicators';
import ExamResults from '../examresults/ExamResults';
import ProfessionalConsultations from '../professionalconsultations/ProfessionalConsultations';
import ConditionTracking from '../conditiontracking/ConditionTracking';
import Reports from '../reports/Reports';


function Dashboard() {

  const { Content, Footer  } = Layout;

  return (
    <Layout style={{ minHeight: '100vh', }} >
      <SiderMenu />
      <Layout className="site-layout" style={{minWidth: '450px'}}>
        <Header />
        <Content style={{ margin: '0 16px' }} >
          <div className="site-layout-background" style={{ padding: '0 14px', height: '100%', background: 'none' }} >
            <Routes>        
              <Route path='/home' element={<Home />} /> 
              <Route path='/healthyconditions' element={<HealthyConditions />} /> 
              <Route path='/healthyindicators' element={<HealthyIndicators />} />
              <Route path='/examresults' element={<ExamResults />} />
              <Route path='/professionalconsultations' element={<ProfessionalConsultations />} />
              <Route path='/conditiontracking' element={<ConditionTracking />} />
              <Route path='/reports' element={<Reports />} /> 
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', }} >
          Ingenieria de software 2022. Todos los derechos reservados
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard;