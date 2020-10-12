import React, { useState } from "react"
import Section from "../../../_components/section"
import Sphere from "../../../_components/sphere"
import { Form, Input, Row, Col, Spin } from "antd"
import { Button } from "../../../_components/buttons"
import { Fade, Bounce } from "react-reveal"
import { LoadingOutlined, CheckCircleFilled } from "@ant-design/icons"
import "./index.less"

const { Item } = Form

export default () => {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(null)

  const success = (
    <div>
      <CheckCircleFilled style={{ color: "#002438" }} />
      <span style={{ color: "#002438" }}> ¡Mensaje enviado con exito!</span>
    </div>
  )

  const onFinish = async values => {
    try {
      setDone(null)
      setLoading(true)
      /*const options = {
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(values),
      }

      const response = await fetch("https://google.com", options);
      const result = await response.json();
      console.log(result);*/
      setTimeout(() => {
        setLoading(false)
        setDone(success)
      }, 5000)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Section id="contact">
      <div className="contact-cont">
        <div className="center-fix-cont">
          <Sphere size={1772} id="contact-sphere" />
        </div>
        <Fade>
          <header>
            <Row>
              <Col xs={24}>
                <h2>¿Listo para pasar al siguiente nivel?</h2>
              </Col>
              <Col xs={24}>
                <Button
                  block
                  onClick={() =>
                    (window.location.href =
                      "https://app.clasihome.com/register")
                  }
                >
                  Pruébalo gratis
                </Button>
              </Col>
            </Row>
          </header>
        </Fade>
        <Bounce bottom>
          <div className="form-main-cont">
            <Form
              className="contact-form"
              layout="vertical"
              onFinish={onFinish}
            >
              <Row gutter={[32, 16]} align="middle">
                <Col
                  xs={24}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h3>¿Tienes alguna consulta? con gusto te responderemos</h3>
                </Col>
                <Col xs={24} md={12}>
                  <Item name="fullName" label="Nombre y apellido">
                    <Input disabled={loading} />
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  <Item name="phone" label="Teléfono">
                    <Input disabled={loading} />
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  <Item name="bussines" label="Empresa">
                    <Input disabled={loading} />
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  <Item name="email" label="Email">
                    <Input disabled={loading} />
                  </Item>
                </Col>
                <Col xs={24}>
                  <Item name="message" label="Mensaje">
                    <Input.TextArea rows={4} disabled={loading} />
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  <Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      disabled={loading}
                    >
                      Enviar
                    </Button>
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  {/*<img src="/contact/captcha.png" width="100%" />*/}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {loading && (
                      <Spin
                        indicator={
                          <LoadingOutlined style={{ color: "#dc314f" }} />
                        }
                      />
                    )}
                    {done}
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Bounce>
        <footer />
      </div>
    </Section>
  )
}
