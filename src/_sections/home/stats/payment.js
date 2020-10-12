import React, { useState, useEffect } from "react"
import { Row, Col, Slider } from "antd"
import { Button } from "../../../_components/buttons"
import { formatCurrency, calculatePlan } from "../../../_utils"

export default () => {
  const [parameters, setParameters] = useState({
    users: 1,
    properties: 20,
    total: 2.6,
    tasaProperties: 0.2,
  })

  const handleCalculatePlan = () => {
    const UF = 28800
    return formatCurrency(
      "UF",
      calculatePlan(UF, parameters.properties, parameters.users)
    )
  }

  useEffect(() => {
    const property = document.getElementsByClassName("slider-property")
    const propertyImg = document.createElement("img")
    propertyImg.src = "/icons/home-white.svg"
    propertyImg.width = 20
    propertyImg.height = 23
    property[0].children[3].appendChild(propertyImg)

    const user = document.getElementsByClassName("slider-user")
    const userImg = document.createElement("img")
    userImg.src = "/icons/user.svg"
    userImg.width = 20
    userImg.height = 23
    user[0].children[3].appendChild(userImg)
  }, [])

  useEffect(() => {
    setParameters({ ...parameters, total: handleCalculatePlan() })
  }, [parameters.users, parameters.properties])

  return (
    <div className="stats-ui-main-cont">
      <Row gutter={40}>
        <Col xs={24} md={8}>
          <Slider
            className="slider-home-inactive slider-property"
            defaultValue="40"
            onAfterChange={value =>
              setParameters({
                ...parameters,
                properties: value,
              })
            }
            max={500}
            min={1}
          />
          <h4>
            <span
              style={{
                color: "#DC314F",
                fontWeight: "800",
              }}
            >
              {parameters.properties} propiedades
            </span>{" "}
            promedio
          </h4>
        </Col>
        <Col xs={24} md={8}>
          <Slider
            defaultValue="10"
            className="slider-home-inactive slider-user"
            max={40}
            min={1}
            onAfterChange={value =>
              setParameters({ ...parameters, users: value })
            }
          />
          <h4>
            <span
              style={{
                color: "#DC314F",
                fontWeight: "800",
              }}
            >
              {parameters.users} usuarios
            </span>{" "}
            promedio
          </h4>
        </Col>
        <Col xs={24} md={8}>
          <Button block type="primary" htmlType="button">
            Abonas UF{parameters.total} + IVA
          </Button>
          <br />
          <p className="text-muted">Precio de base UF 1 + IVA</p>
        </Col>
      </Row>
    </div>
  )
}
