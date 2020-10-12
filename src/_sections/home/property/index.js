import React from 'react';
import Section from '../../../_components/section';
import Container from '../../../_components/container';
import Header from '../../../_components/section-header';
import Sphere from '../../../_components/sphere';
import { Row, Col } from 'antd';
import { Bounce } from 'react-reveal';
import { useWindowSize } from '../../../_hooks';
import './index.less';

const items = [
  "Carga propiedades de manera rápida, sencilla e intuitiva. Incorpora imágenes, videos y tours virtuales en cada propiedad.",
  "Envía y comparte por correo o Whatsapp propiedades que puedan interesarles a tus contactos.",
  "Ordena, asigna y cambia de estado tus propiedades. Gestiona con ellas.",
]

export default ()=> {
  const size = useWindowSize();
  return(
    <Section id="property" className="property-main-cont">
      <Row>
        <Col xs={24} md={10}>
          <Container>
            <Header
              title="Gestiona tus propiedades"
              icon="/icons/home.svg"
              items={items}
            />
          </Container>
        </Col>
        <Col xs={24} md={14}>
          <div className="property-images-section">
            <Sphere
              size={150}
              rotation={45}
              className="property-sphere"
            />
            <Bounce left={size.width <= 768 ? true : false} right={size.width >= 768 ? true : false}>
              <img src="/properties/back.png" className="back" />
            </Bounce>
            <Bounce delay={250} bottom>
              <img src="/properties/top.png" className="top" />
            </Bounce>
          </div>
        </Col>
      </Row>
    </Section>
  )
}