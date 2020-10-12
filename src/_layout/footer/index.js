import React from "react"
import Container from "../../_components/container"
import Logo from "../../_components/logo"
import {
  CopyrightCircleOutlined,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons"
import { Row, Col } from "antd"
import "./index.less"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <footer className="main-footer">
      <Container>
        <div className="footer-main-cont">
          <Row align="middle" justify="space-between">
            <Col xs={24}>
              <div className="footer-logo-cont">
                <Logo />
              </div>
            </Col>
            <Col xs={{ span: 24, order: 3 }} md={{ span: 8, order: 1 }}></Col>
            <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 2 }}>
              <div className="footer-copyright">
                <span>
                  <CopyrightCircleOutlined />
                </span>
                <span>2020 Clasihome. Todos los derechos reservados.</span>
              </div>
            </Col>
            <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 3 }}>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/clasihome"
                    target="_blank"
                    style={{ fontSize: 18 }}
                  >
                    <FacebookFilled />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/_clasihome?igshid=1u34cmwk5fudl"
                    target="_blank"
                    style={{ fontSize: 19 }}
                  >
                    <InstagramFilled />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}
