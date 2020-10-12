import React from 'react';
import Section from '../../../_components/section';
import Cotnainer from '../../../_components/container';
import Sticker from '../../../_components/sticker';
import { Fade }  from 'react-reveal';
import { Row, Col } from 'antd';
import PORTALS from '../../../_constants/PORTALS.json';
import './index.less';

/*const Sticker = (props) => (
  <div className="protals-sticker">
    <img {...props} />
  </div>
)*/

export default ()=> {
  return (
    <Section className="diffusion-main-cont">
      <Cotnainer>
        <header>
          <Sticker src="/icons/diffusion.svg" />          
          <h1>Conectamos propiedades con clientes</h1>
          <p>Publica tus anuncios en portales inmobiliarios y multiplica tus posibilidades de cerrar negocios</p>
        </header>
        <Row justify="center" align="middle">
          {
            PORTALS.map(portal => (
              <Col xs={12} md={6} key={portal.id}>
                <Fade delay={300}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Sticker {...portal} portal />
                  </div>
                </Fade>
              </Col>
            ))
          }
        </Row>
      </Cotnainer>
    </Section>
  )
}