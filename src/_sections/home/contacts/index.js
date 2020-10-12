import React, { useEffect } from 'react';
import Section from '../../../_components/section';
import Container from '../../../_components/container';
import Header from '../../../_components/section-header';
import Sphere from '../../../_components/sphere';
import { Bounce } from 'react-reveal';
import { Row, Col } from 'antd';
import { useWindowSize } from '../../../_hooks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.less';

const items = [
  "Agrega contactos de una manera sencilla y mantenlos al tanto de las mejores propiedades.",
  "Asigna contactos a tus agentes y cambialos de estado. Recuerda que un contacto es una opotunidad.",
]

gsap.registerPlugin(ScrollTrigger);

export default ()=> {
  
  const size = useWindowSize();

  useEffect(()=> {
    const tl1 = gsap.timeline({
      scrollTrigger:{
        trigger: ".contacts-main-cont",
        start: "top bottom",
        end: "center top",
        scrub: 1,
      }      
    });

    const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: ".contacts-main-cont",
        start: "top bottom",
        end: "center top",
        scrub: 1,
      }      
    });    

    tl1.to('.contact-sphere', { yPercent: 0, xPercent: 0, opacity: 0, duration: .5 })
      .to('.contact-sphere', { duration: .5, ease: "back.out(2)", yPercent: -10, xPercent: -10, opacity: 1 })

    tl2.to('.contact-sphere-2', { yPercent: 0, xPercent: 0, opacity: 0, duration: .5 })
    .to('.contact-sphere-2', { duration: .5, ease: "back.out(2)", yPercent: -10, xPercent: -10, opacity: 1 })

    return ()=> {
      tl1.clear();
    }
  })

  return(
    <Section id="contacts" className="contacts-main-cont">
      <Row>
        <Col xs={24} md={10}>
          <Container>
            <Header
              title="Administra tus contactos"
              icon="/icons/clients.svg"
              items={items}
            />            
          </Container>
        </Col>
        <Col xs={24} md={14}>
          <div className="contact-images-section">
            <Sphere
              size={244}
              rotation={0}
              className="contact-sphere"       
            />
            <Bounce left={size.width <= 768 ? true : false} bottom={size.width >= 768 ? true : false}>
              <img src="/contacts/back.png" className="back" />
            </Bounce>
            <Bounce delay={500} right>
              <img src="/contacts/top.png" className="top" />
            </Bounce>            
            <Sphere
              size={500}
              rotation={0}
              className="contact-sphere-2"       
            />            
          </div>
        </Col>        
      </Row>
    </Section>
  )
}