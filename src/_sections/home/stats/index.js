import React, { useState } from "react"
import Section from "../../../_components/section"
import Container from "../../../_components/container"
import UserInterface from "./user-inteface"
import Graphics from "./graphics"
import { Button } from "../../../_components/buttons"
import { CloseCircleOutlined, DownCircleOutlined } from "@ant-design/icons"
import { Bounce, Fade } from "react-reveal"
import Payment from "./payment"
import "./index.less"

export default () => {
  const [more, setMore] = useState(true)
  return (
    <Section id="stats">
      <Container>
        <div className="stats-main-cont">
          <Bounce delay={250}>
            <h2>Te acompañamos en tu crecimiento</h2>
          </Bounce>
          <Fade bottom delay={300}>
            <p>
              Somos la única plataforma inmobiliaria donde pagas en base a las
              propiedades y usuarios cargados durante el mes. ¿Cómo funciona
              esto? Al final de cada mes, el sistema calcula el promedio diario
              y establece un monto total, así de fácil y simple.
            </p>
          </Fade>
          <Fade bottom>
            <Payment />
          </Fade>
        </div>
      </Container>
    </Section>
  )
}
