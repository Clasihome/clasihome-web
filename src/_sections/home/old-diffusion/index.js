import React, { useEffect } from 'react';
import Section from '../../../_components/section';
import Container from '../../../_components/container';
import Header from '../../../_components/section-header';
import { Bounce, Fade } from 'react-reveal';
import PORTALS from '../../../_constants/PORTALS.json';
import Sticker from '../../../_components/sticker';
import { Row, Col } from 'antd';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.less';

const items = [
  "Vincula tu cuenta con los mejores portales de pago y gratuitos.",
  "Vincula también con tus redes sociales: Facebook y Twitter.",
  "Siempre te ayudaremos a vincular tu cuenta con cada uno de ellos.",
]

gsap.registerPlugin(ScrollTrigger);

export default ()=> {

  useEffect(()=> {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: ".diffusion-main-cont",
        start: "top bottom",
        end: "center top",
        scrub: 1,
      }      
    });
  
    tl.to('.diffusion-background-image-section', { duration: 1.5, ease: "back.out(2)", opacity: 0 })
      .to('.diffusion-background-image-section', { duration: 1.5, ease: "back.out(2)", opacity: 1 })
  
    return()=> {
      tl.clear();
    }
  });  

  return(
    <Section dark className="diffusion-main-cont" id="diffusion">
      <Row>
        <Col xs={25} md={{ span:10, order: 2 }}>
          <Container>
            <Header
              title="Vincula con portales y redes sociales"
              icon="/icons/diffusion.svg"
              items={items}
            />                
          </Container>
        </Col>
        <Col xs={25} md={14}>
          <div className="diffusion-images-section">
            <img src="/diffusion/background.svg" className="diffusion-background-image-section" />
            <Fade bottom>
              <img src="/diffusion/back.png" className="back" />
            </Fade>
          </div>
          <div className="portals-cont">
            {
              PORTALS.map((p, i) => (
                <Bounce key={p.id} delay={1000/i}>
                  <Sticker                    
                    id={p.id}
                    src={p.src}
                    portal
                  />
                </Bounce>
              ))
            } 
          </div>
        </Col>        
      </Row>
    </Section>
  )
}