import React, { useEffect, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import { BackTop, Button, Col, Form, Input, Modal, Row } from "antd"
import {
  CheckCircleOutlined,
  CheckOutlined,
  UpOutlined,
} from "@ant-design/icons"
import { useWindowSize } from "../_hooks"
import "./index.less"

import logo from "./../../static/logo-3d.svg"
import portals from "./../../static/promotions/portals.png"
import { Fragment } from "react"

export default ({ children }) => {
  const [visibleModal, setVisibleModal] = useState(true)
  const [form] = Form.useForm()
  const [loading, setLoading] = useState({
    state: false,
    label: "OBTENER BENEFICIOS",
    sent: false,
  })

  const onFinish = values => {
    setLoading({ state: true, label: "" })

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

    var urlencoded = new URLSearchParams()
    urlencoded.append("emailType", "ContactForm")
    urlencoded.append("message", "Solicitaron una promoción desde la landing!")
    urlencoded.append("email", values.email)
    urlencoded.append("name", values.name)
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
      .then(() => {
        setTimeout(() => {
          form.resetFields()
          setLoading({
            state: false,
            label: (
              <span>
                <CheckOutlined /> En un momento te contactaremos!
              </span>
            ),
            sent: true,
          })
        }, 2000)

        setTimeout(() => {
          setVisibleModal(false)
        }, 8000)
      })
      .catch(() => {
        setLoading({
          state: false,
          label: "OBTENER BENEFICIOS",
          sent: false,
        })
      })
  }

  return (
    <Fragment>
      {/*      <Modal
        className="modal-promotion"
        visible={visibleModal}
        width={1000}
        onCancel={() => setVisibleModal(false)}
        footer={null}
      >
        <Row>
          <Col md={14} xs={24}>
            <div style={{ padding: "10px 20px" }}>
              <blockquote>
                <h2>
                  Conectamos <span className="highlight">tus propiedades</span>{" "}
                  con <span className="highlight">clientes</span>
                </h2>
              </blockquote>
              <br />

              <h3 style={{ color: "#fff", textAlign: "justify" }}>
                Trabaja como un corredor profesional, sincroniza tus propiedades
                con tu sitio web, los mejores portales y redes sociales!
              </h3>
              <br />
              <p style={{ fontSize: "25px", textAlign: "center" }}>
                {" "}
                Contratando hoy tu página web obtienes
              </p>

              <p style={{ fontSize: "40px", textAlign: "center" }}>
                <div style={{ display: "inline-flex" }}>
                  <img
                    src={logo}
                    style={{ width: "70px", margin: "0px 20px 0px 0px" }}
                  />
                  Clasihome
                </div>
                <br />6 MESES SIN COSTO
              </p>
            </div>
          </Col>
          <Col md={10} xs={24}>
            <div style={{ padding: "15px" }}>
              <h3>Déjanos tus datos y llévate 1 año de hosting web </h3>
              <Form layout="vertical" onFinish={onFinish} form={form}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: "Ingrese su nombre" }]}
                >
                  <Input placeholder="Nombre" />
                </Form.Item>
                <Form.Item
                  name="email"
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
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: "Ingrese su teléfono" }]}
                >
                  <Input placeholder="Teléfono" />
                </Form.Item>
                <Form.Item style={{ textAlign: "center" }}>
                  <Button
                    type={loading.sent ? "success" : "primary"}
                    htmlType="submit"
                    loading={loading.state}
                    block
                  >
                    {loading.label}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
        <div
          style={{
            background: "#fff",
            margin: "0px -25px",
            padding: "5px 20px",
          }}
        >
          {" "}
          <img style={{ width: "100%" }} src={portals} />
        </div>
      </Modal>
 */}
      <div className="layout-main-cont">
        <Header />
        {children}
        <Footer />
        <BackTop visibilityHeight={6000} />
      </div>
    </Fragment>
  )
}
