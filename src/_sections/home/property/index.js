import React from 'react';
import Section from '../../../_components/section';
import Container from '../../../_components/container';
import Title from '../../../_components/title';
import Sphere from '../../../_components/sphere';
import { Row, Col } from 'antd';
import './index.less';

export default ()=> {

  return(
    <Section id="property" className="property-main-cont">
      <Row>
        <Col xs={24} md={12}>
          <Container>
            <Title
              title="Gestiona tus propiedades"
              text="Carga propiedades de manera rápida y sencilla e incorpora imágenes, videos y tours virtuales a cada propiedad."
              src="/icons/home.svg"
            />
          </Container>
        </Col>
        <Col xs={24} md={12}>
          <div className="property-images-section">
            <Sphere
              size={150}
              rotation={45}
              className="property-sphere"
            />
            <img src="/properties/back.png" className="back" />
            <img src="/properties/top.png" className="top" />
          </div>
        </Col>
      </Row>
    </Section>
  )
}