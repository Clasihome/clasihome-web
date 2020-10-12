import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from '../../../_components/buttons';
import { Slide, Fade } from 'react-reveal';
import './index.less';

export default ()=> {
  return(
    <div className="stats-ui-main-cont">
      <Row align="middle" gutter={32, 32}>
        <Col xs={24} md={8}>
          <div className="stat-ui-cont">
            <div className="stat-ui-inner-cont">
              <Slide left>
                <div className="stat-icon-cont" id="stat-property">
                  <HomeOutlined />
                </div>
              </Slide>
              <div className="stat-rail" />
            </div>
            <Fade bottom>
            <p><span>50 propiedades</span> promedio</p>
            </Fade>
          </div>
        </Col>
        <Col xs={24} md={8}>
        <div className="stat-ui-cont">
            <div className="stat-ui-inner-cont">
              <Slide left>
                <div className="stat-icon-cont" id="stat-user">
                  <UserOutlined />
                </div>
              </Slide>
              <div className="stat-rail" />
            </div>
            <Fade bottom>
              <p><span>2 usuarios</span> promedio</p>
            </Fade>
          </div>          
        </Col>
        <Col xs={24} md={8}>
          <Fade bottom>
            <Button block type="primary" htmlType="button">
              Abonas UF 1,9 + IVA
            </Button>
            <p>Precio de base UF 1,9 + IVA</p>
          </Fade>
        </Col>                
      </Row>
    </div>
  )
}