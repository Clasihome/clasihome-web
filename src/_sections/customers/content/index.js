import React from 'react';
import Cotnainer from '../../../_components/container';
import { Row, Col } from 'antd';
import "./index.less";
import CUSTOMERS from '../../../_constants/CUSTOMERS.json';
import { v1 as uuid } from 'uuid';

export default ()=> {

  return(
    <section className="customers-content-main">
      <Cotnainer>
        <Row align="middle" gutter={48}>
          <Col xs={24}>
            <h1 className="customers-content-title">ALGUNOS DE NUESTROS CLIENTES</h1>
          </Col>        
          {
            CUSTOMERS.map((item)=> (
              <Col key={uuid()} xs={8} md={4}>
                <img className="customers-content-img" src={item.logo} alt={item.office} />
              </Col>
            ))
          }        
        </Row>
        <hr></hr>
      </Cotnainer>
    </section>
  )
}