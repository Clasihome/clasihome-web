import React, { useEffect } from "react"
import Section from "../../../_components/section"
import Container from "../../../_components/container"
import Header from "../../../_components/section-header"
import Sphere from "../../../_components/sphere"
import { Bounce, Fade } from "react-reveal"
import { Row, Col } from "antd"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./index.less"

const items = [
  "Clasihome es la única plataforma capaz de centralizar las consultas de tus potenciales clientes desde los portales a los que vinculas tu cuenta.",
  "Responde las consultas de todos los portales de manera unificada.",
]

gsap.registerPlugin(ScrollTrigger)

export default () => {
  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".querys-main-cont",
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    })

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".querys-main-cont",
        start: "center bottom",
        end: "center top",
        scrub: 1,
      },
    })

    tl1.to(".querys-sphere-2", {
      duration: 1,
      ease: "back.out(2)",
      rotation: 360,
      yPercent: -45,
      xPercent: 55,
      opacity: 1,
    })

    tl2.to(".querys-sphere", {
      duration: 1,
      ease: "back.out(2)",
      yPercent: -10,
      xPercent: -75,
      opacity: 1,
      rotation: 180,
    })

    return () => {
      tl1.clear()
      tl2.clear()
    }
  })

  return (
    <Section id="querys" className="querys-main-cont">
      <Row>
        <Col xs={24} md={10}>
          <Container>
            <Header
              title="Ahorra tiempo, atiende en un solo lugar"
              icon="/icons/mail.svg"
              description="<p>Clasihome es la única plataforma capaz de centralizar las consultas provenientes de los portales que vinculas tu cuenta.</p>"
            />
          </Container>
        </Col>
        <Col xs={24} md={14}>
          <div className="querys-images-section">
            <Sphere size={500} className="querys-sphere-2" rotation={-45} />
            <Sphere size={349} className="querys-sphere" rotation={-90} />
            <Bounce bottom>
              <img className="back" src="/query/back.png" />
            </Bounce>
            <Bounce left>
              <img className="top" src="/query/top.png" />
            </Bounce>
          </div>
        </Col>
      </Row>
    </Section>
  )
}
