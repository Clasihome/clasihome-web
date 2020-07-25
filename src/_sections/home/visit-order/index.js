import React from 'react';
import Section from '../../../_components/section';
import Container from '../../../_components/container';
import Title from '../../../_components/title';
import Sphere from '../../../_components/sphere';
import { Row, Col } from 'antd';
import './index.less';

export default ()=> {
  return(
    <Section id="visit-orders" className="visit-orders-main-cont" dark>
      <Row>
        <Col xs={24} md={12}>
          <Container>
            <Title
              title="Emite ordenes de visita"
              text="Gestiona profesionalmente tus órdenes de visita; individualiza la propiedades, el valor, el cliente y la fecha."
              src="/icons/paper.svg"
            />
          </Container>
        </Col>
        <Col xs={24} md={12}>
          <div className="visit-orders-images-section">
            <Sphere
              size={297}
              rotation={90}
              className="visit-orders-property-sphere"
            />
            <img src="/visit-orders/back.png" className="back" />
            <img src="/visit-orders/mid.png" className="mid" />
            <img src="/visit-orders/top.png" className="top" />
          </div>          
        </Col>        
      </Row>
    </Section>
  )
}
