import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Row, Col, Tooltip } from 'antd';
import { useObserver } from '../../../_hooks';
import { Fade } from 'react-reveal';
import './index.less';

gsap.registerPlugin(ScrollTrigger);

export default ()=> {

  const [observed, setTarget] = useObserver();

  useEffect(()=> {
    if(observed){
      gsap.to('.property-graph', {
        duration: 1,
        height: (i) => i + 1 * 60,
        stagger: 0.010,
      });
  
      gsap.to('.user-graph', {
        duration: 1.2,
        height: (i) => i + 1 * 70,
        stagger: 0.030,
      })
    }

  },[observed])
  

  return(
    <div className="graphics-main_cont">
      <Row gutter={[32, 32]}>
        <Col xs={24}>
          <div className="graphics-inner-cont" ref={el => setTarget(el)}>
            {
              Array(30).fill(0).map((_,i)=> (
                <Tooltip title={`${i + 1} de Abril ${(i + 1) * 2} propiedades`}>
                  <ul>
                    <li className="property-graph" /*style={{ height: i + 1 * 60 }}*/ />
                    <li className="user-graph" /*style={{ height: i + 1 * 70 }}*/ />
                  </ul>
                </Tooltip>
              ))
            }
          </div>
        </Col>
        <Col xs={24}>
          <Fade>
          <div className="graphic-date">
            <p>abr</p>
            <div />
            <p>may</p>
          </div>
          </Fade>
        </Col>           
        <Col xs={24} md={6}>
          <Fade>
          <div className="graphic-info">
            <p>Promedio diario de propiedades</p>
            <h3 id="property">50 propiedades</h3>
          </div>
          </Fade>
        </Col>
        <Col xs={24} md={6}>
          <Fade delay={500}>
          <div className="graphic-info">
            <p>Promedio diario de usuarios</p>
            <h3 id="user">2 usuarios</h3>
          </div>          
          </Fade>
        </Col>
        <Col xs={24} md={{ span: 6, offset: 6 }}>
          <Fade delay={1000}>
          <div className="graphic-info">
            <p>Total consumo</p>
            <h3 id="total">UF 1,9 + IVA</h3>
          </div>
          </Fade>          
        </Col>
        <Col xs={24}>
          <Fade bottom>
          <footer><p>Este gráfico representa la cantidad de usuarios y propiedades mantenidos diariamente en una oficina. Clasihome calcula el promedio diario de propiedades, usuarios y en base a eso se establece el total del consumo mensual.</p></footer>
          </Fade>
        </Col>                        
      </Row>
    </div>
  )
}