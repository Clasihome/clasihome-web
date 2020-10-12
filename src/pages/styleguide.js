import React from "react";
import Layout from '../_layout';
import { ArrowRightOutlined, DownOutlined } from '@ant-design/icons';
import Section from '../_components/section/index';
import Sticker from '../_components/sticker';
import PORTALS from '../_constants/PORTALS.json';
import { Button } from '../_components/buttons';
import AnimatedAvatar from '../_components/avatar';
import Sphere from '../_components/sphere';

import { Row, Col, Avatar, Divider } from 'antd';

export default ()=> {
  return (
  <Layout>
    <Section dark>
      <h2>Secciones</h2>
      <Row style={{ border: "1px solid #002438" }}>
        <Col xs={24} md={12}>
          <Section dark>
            <h3>Dark</h3>
          </Section>
        </Col>
        <Col xs={24} md={12}>
          <Section>
            <h3>default</h3>
          </Section>
        </Col>      
      </Row>      
      </Section>
      <Section>
      <Row gutter={[0, 8]}>
        <Col xs={24} md={12}>
        <h2>Buttons:</h2>
        <Row gutter={[0, 8]}>
          <Col xs={24}>
            <h3>Comunes</h3>
          </Col>
          <Col xs={24} md={12}>
            <Button type="primary" block>
              Antd Primary Button size large
            </Button>
          </Col>
          <Col xs={24} />
          <Col xs={24} md={12}>
            <Button block>
              Antd Default Button size large
            </Button>
          </Col>
          <Col xs={24}>
            <br />
            <h3>Redondeados</h3>
          </Col>
          <Col xs={6}>
            <Button rounded size ="middle" type="primary">
              Primary
              <ArrowRightOutlined />
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              size ="middle"
              shape="circle"
              icon={<img src="/icons/chevron.svg" />}              
            />
          </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <h2>Links:</h2>
          <Row gutter={[0, 8]}>
            <Col xs={12}>
              <a href="#">Link default</a>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Divider />
      <Row>
        <Col xs={24}>
          <h2>Stikers:</h2>
        </Col>
        <Col xs={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <h3>Icono</h3>
            </Col>
            <Col xs={6}>
              <Sticker src="/icons/home.svg" />
            </Col>
            <Col xs={6}>
              <Sticker src="/icons/mail.svg" />
            </Col>
            <Col xs={6}>
              <Sticker src="/icons/paper.svg" />
            </Col>            
            <Col xs={6}>
              <Sticker src="/icons/diffusion.svg" />
            </Col>
            <Col xs={6}>
              <Sticker src="/icons/clients.svg" />
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <h3>Portal</h3>
            </Col>
            {
              PORTALS.map(p => (
                <Col>
                  <Sticker
                    id={p.id}
                    src={p.src}
                    portal
                  />
                </Col>
              ))
            }            
          </Row>
        </Col>
      </Row>
      <br />
      <Divider />
      <Row gutter={[16, 16]}>
        <Col xs={12}>
          <Row>
            <Col xs={24}>
              <h2>Avatar</h2>   
            </Col>
            <Col xs={12} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <AnimatedAvatar
                size={150}
                src="/hero/person-2.png"
              >
                <h3>ClasiHome</h3>
                <small>Conectamos propiedades con clientes.</small>
              </AnimatedAvatar>
              <h3>Animado(hover)</h3>
            </Col>            
            <Col xs={12} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <Avatar
                size={150}
                src="/hero/person-1.png"
              />
              <h3>Común</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Row gutter={[32, 16]}>
            <Col xs={24}>
              <h2>Esferas</h2>
            </Col>
            <Col>
              <Sphere
                size={150}
              />
            </Col>
            <Col>
              <Sphere
                size={150}
                rotation={45}
              />
            </Col>
            <Col>
              <Sphere
                size={150}
                rotation={135}
              />
            </Col>
            <Col>
              <Sphere
                size={150}
                rotation={180}
              />
            </Col>                                    
            <Col>
              <Sphere
                size={150}
                rotation={270}
              />
            </Col>        
            <Col>
              <Sphere
                size={150}
                rotation={315}
              />
            </Col>                                
          </Row>
        </Col>
      </Row>
      <br />
      <Divider />
      </Section>
  </Layout>
  )
}
