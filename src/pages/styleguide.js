import React from "react";
import Layout from '../_layout';
import { RoundedButton } from '../_components/buttons';
import { ArrowRightOutlined, DownOutlined } from '@ant-design/icons';
import Section from '../_components/section/index';
import { Divider, Button, Row, Col } from 'antd';

export default function Home() {
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
            <Button size="large" block type="primary">Antd Primary Button size large </Button>
          </Col>
          <Col xs={24} />
          <Col xs={24} md={12}>
            <Button size="large" block>Antd Default Button size large</Button>
          </Col>
          <Col xs={24}>
            <br />
            <h3>Redondeados</h3>
          </Col>
          <Col xs={6}>
            <RoundedButton
              type="primary"
              rightIcon={<ArrowRightOutlined />}
              >
              Primary
            </RoundedButton>
          </Col>
          <Col xs={6}>
            <Button
              shape="circle"
              icon={<DownOutlined style={{ fontSize: 12 }} />}
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
      </Section>
  </Layout>
  )
}
