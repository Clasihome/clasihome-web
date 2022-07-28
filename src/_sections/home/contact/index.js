import React, { useState } from "react"
import Section from "../../../_components/section"
import Sphere from "../../../_components/sphere"
import { Form, Input, Row, Col, Spin } from "antd"
import { Button } from "../../../_components/buttons"
import { Fade, Bounce } from "react-reveal"
import { LoadingOutlined, CheckCircleFilled } from "@ant-design/icons"
import "./index.less"
import Recaptcha from "react-google-recaptcha"
/*import ReCaptcha, { Loader } from "@pittica/gatsby-plugin-recaptcha"
 var Recaptcha = require("react-recaptcha")
 */
const { Item } = Form

export default () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState({ state: false, label: "Enviar" })
  const [done, setDone] = useState(null)
  const [disableButton, setDisableButton] = useState(true)

  const error = (
    <div>
      <span style={{ color: "red" }}>Error! intente mas tarde porfavor</span>
    </div>
  )
  const success = (
    <div>
      <CheckCircleFilled style={{ color: "#002438" }} />
      <span style={{ color: "#002438" }}> ¡Mensaje enviado con exito!</span>
    </div>
  )

  const onSendMail = values => {
    setLoading({ state: true, label: "Enviando correo..." })
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

    var urlencoded = new URLSearchParams()
    urlencoded.append("emailType", "ContactForm")
    urlencoded.append("message", String(values.message))
    urlencoded.append("email", values.email)
    urlencoded.append("name", values.fullName)
    urlencoded.append("company", values.bussines)
    urlencoded.append("phone", values.phone)

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    }

    fetch(
      `https://api.clasihome.com/pdf-and-email-service/email-send?${urlencoded}`,
      requestOptions
    )
      .then(response => response.json())
      .then(r => {
        form.resetFields()
        setLoading({ state: false, label: "Enviar" })
        setDone(success)
      })
      .catch(() => {
        setLoading({ state: false, label: "Error" })
        setDone(error)
      })
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
              form={form}
              className="contact-form"
              layout="vertical"
              onFinish={onSendMail}
            >
              <Row gutter={[32, 16]} align="middle">
                <Col
                  xs={24}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h3>¿Tienes alguna consulta? con gusto te responderemos</h3>
                  <div id="schedule"></div>
                </Col>
                
                <Col xs={24} md={12}>
                  <Item
                    name="fullName"
                    label="Nombre y apellido"
                    rules={[{ required: true, message: "Ingrese su nombre" }]}
                  >
                    <Input disabled={loading.state} />
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  <Item
                    name="phone"
                    label="Teléfono"
                    rules={[{ required: true, message: "Ingrese su teléfono" }]}
                  >
                    <Input disabled={loading.state} />
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  <Item
                    name="bussines"
                    label="Empresa"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese el nombre de su empresa",
                      },
                    ]}
                  >
                    <Input disabled={loading.state} />
                  </Item>
                </Col>
                <Col xs={24} md={12}>
                  <Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese su email",
                      },
                      {
                        type: "email",
                        message: "Ingrese un email correcto",
                      },
                    ]}
                  >
                    <Input disabled={loading.state} />
                  </Item>
                </Col>
                <Col xs={24}>
                  <Item
                    name="message"
                    label="Mensaje"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese su mensaje",
                      },
                    ]}
                  >
                    <Input.TextArea rows={4} disabled={loading.state} />
                  </Item>
                </Col>
                <Col span={24}>
                  <Recaptcha
                    /* ref="recaptcha" */
                    sitekey="6LfvPu0ZAAAAADBB_wP0dleX2eXrwbjnrvxXqgUC"
                    onChange={() => setDisableButton(false)}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      disabled={loading.state || disableButton}
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
                      textAlign: "left",
                    }}
                  >
                    {loading.state && (
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
