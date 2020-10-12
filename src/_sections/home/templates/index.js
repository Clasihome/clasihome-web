import React, { useEffect } from 'react';
import Section from '../../../_components/section';
import Container from '../../../_components/container';
import Header from '../../../_components/section-header';
import Sphere from '../../../_components/sphere';
import { Bounce, Fade } from 'react-reveal';
import { Row, Col } from 'antd';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.less';

const items = [
  "¿No tienes una web donde poder mostrar tus propiedades? Obtén tu web desde UF5 y págala en cuotas.",
  "Sitios webs de última tecnología y con adaptación a móviles.",
]

gsap.registerPlugin(ScrollTrigger);

export default ()=> {

  useEffect(()=> {
    const tl1 = gsap.timeline({
      scrollTrigger:{
        trigger: ".templates-main-cont",
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1.5,
      }      
    });

    /*const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: ".templates-main-cont",
        start: "center bottom",
        end: "center top",
        scrub: 1,
      }      
    });    */

    tl1.to('.templates-sphere-2', { duration: 1, ease: "back.out(2)", y: "355.25px", xPercent: -30, opacity: 1, rotation: 180 })
        .to('.templates-sphere-1', { duration: 1, ease: "back.out(2)", rotation: 360, yPercent: -45, xPercent: -55, opacity: 1 }, "-=.5")
    

    return ()=> {
      tl1.clear();
      //tl2.clear();
    }
  })

  return(
    <Section id="templates" className="templates-main-cont" dark>
      <Row>
        <Col xs={24} md={{ span: 10, order: 2 }}>
          <Container>
            <Header
              title="Vende más con tu propio sitio web"
              icon="/icons/diffusion.svg"
              description="<p>Contamos con las mejores sitios webs adaptados a móviles.</p><p>Podrás sincronizar tus propiedades en un sólo click.</p>"
            />                         
          </Container>
        </Col>
        <Col xs={24} md={14}>
          <div className="templates-images-section">
            <Sphere
              size={180}
              className="templates-sphere-1"
              rotation={-45}
            />            
            <Sphere
              size={715}
              className="templates-sphere-2"
              rotation={-90}
            />
            <Bounce bottom>
              <img src="/templates/back-left.png" className="back-left" />
            </Bounce>
            <Bounce bottom delay={250}>
              <img src="/templates/top.png" className="top" />
            </Bounce>
            <Bounce bottom delay={500}>
              <img src="/templates/back-right.png" className="back-right" />
            </Bounce>
          </div>
        </Col>
      </Row>
      
    </Section>
  )
}