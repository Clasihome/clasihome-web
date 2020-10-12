import React from 'react';
import { v1 as uuid } from 'uuid';
import Section from '../section';
import Sticker from '../sticker';
import { Bounce, Fade } from 'react-reveal';
import Container from '../container';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import Sphere from '../sphere';
import { Row, Col } from 'antd';
import { useWindowSize } from '../../_hooks';
import './index.less';

const items = [
  {
    id: uuid(),
    icon: "/icons/home.svg",
    title: "Gestiona, organiza y crece",
    description: "<p>Carga propiedades de forma sencilla e intuitiva.</p><p>Inclue videos, tours virtuales, compartelas por correo y WhatsApp.</p>",
  },
  {
    id: uuid(),
    icon: "/icons/paper.svg",
    title: "Toma ventaja con tus órdenes de visita",
    description: "<p>Gestiona profesionalmente tus órdenes de visita y compártelas fácilmente, realiza un seguimiento de ellas. Podrás adjuntar varias propiedades en una misma orden</p>",
  },
  {
    id: uuid(),
    icon: "/icons/clients.svg",
    title: "Administra tus contactos",
    description: "<p>Agrega contactos y manténlos al tanto de las mejores propiedades. Recuerda que un contacto, es una oportunidad</p>",
  }
]

const Header = ({ icon, title, description })=>(
  <div className="section-header-main-cont">
    <div className="section-header-icon-cont">
      <Bounce delay={250}>
        <Sticker src={icon} />
      </Bounce>
      <Bounce delay={300} bottom>
        <h2>{title}</h2>
      </Bounce>
    </div>
    <div className="section-header-carousel-cont">
      <Fade delay={800} bottom>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Fade>
    </div>
  </div>
)

const CarItem = ({ id, title, description, index, icon }) => {
  const size = useWindowSize();
  return(
    <Row>
      {console.log(index)}
      <Col xs={24} md={10}>
        <Container>
          <Header icon={icon} title={title} description={description}  />
        </Container>
      </Col>
      <Col xs={24} md={14}>
        {
          index === 0 && (
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
          )
        }        
        {
          index === 1 && (
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
          )
        }
        {
          index === 2 && (
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
          )          
        }        
      </Col>
    </Row>
  )
}

export default ()=> {
  return(
      <Section>
          <Row>
            <Col xs={24}>
              <CarouselProvider
                naturalSlideWidth={100}
                //naturalSlideHeight={60}
                isIntrinsicHeight={true}
                totalSlides={items.length}
                visibleSlides={1}
                orientation="horizontal"
                isPlaying
                className="main-carousel-cont"
              >
                <Slider>
                  {
                    items.map((item, index) => (
                      <Slide key={item.id} index={index}>
                        <CarItem {...item} index={index} />
                      </Slide>
                    ))
                  }
                </Slider>
                <Container>
                  <div className="carousel-text-dots-container">
                    {
                      items.map((item, i) => <Dot className="carousel-text-dot" key={item.id} slide={i} />)
                    }      
                  </div>      
              </Container>
              </CarouselProvider>
            </Col>
          </Row>
      </Section>
  )
}