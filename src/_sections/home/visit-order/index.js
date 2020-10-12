import React, { useEffect } from 'react';
import Section from '../../../_components/section';
import Container from '../../../_components/container';
import Header from '../../../_components/section-header';
import Sphere from '../../../_components/sphere';
import { Row, Col } from 'antd';
import { Bounce } from 'react-reveal';
import { useWindowSize } from '../../../_hooks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.less';

const items = [
  "Gestiona profesionalmente tus órdenes de visita para tus contactos. Envíalas rapidamente por correo o Whatsapp.",
  "Individualiza las propiedades con precio, contacto, fecha y dirección.",
  "Podrás incorporar distintas propiedades en una misma orden de visita.",
]

gsap.registerPlugin(ScrollTrigger);

export default ()=> {

  const size = useWindowSize();

  useEffect(()=> {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: ".visit-orders-main-cont",
        start: "top bottom",
        end: "center top",
        scrub: 1,
      }      
    });

    tl.to('.visit-orders-property-sphere', { yPercent: 0, xPercent: 0, opacity: 0, duration: 1 })
      .to('.visit-orders-property-sphere', { duration: 1, ease: "back.out(2)", yPercent: -52, xPercent: -40, opacity: 1 })

    return()=> {
      tl.clear();
    }
  });

  return(
    <Section id="visit-orders" className="visit-orders-main-cont">
      <Row>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 10, order: 2 }}>
          <Container>
            <Header
              title="Emite órdenes de visita"
              icon="/icons/paper.svg"
              items={items}
            />
          </Container>
        </Col>
        <Col xs={{ span: 24, order: 2 }} md={{ span: 14, order: 1 }}>
          <div className="visit-orders-images-section">
            <Sphere
              size={297}
              rotation={-90}
              className="visit-orders-property-sphere"
            />
            <Bounce>
              <img src="/visit-orders/back.png" className="back" />
            </Bounce>
            <Bounce delay={250} bottom>
              <img src="/visit-orders/mid.png" className="mid" />
            </Bounce>
            <Bounce delay={500} right>
              <img src="/visit-orders/top.png" className="top" />
            </Bounce>
          </div>          
        </Col>        
      </Row>
    </Section>
  )
}
