import React, { useEffect } from "react"
import { Button } from "../../../_components/buttons"
import Avatar from "../../../_components/avatar"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useWindowSize } from "../../../_hooks"
import "./index.less"

gsap.registerPlugin(ScrollTrigger)

/*export default ()=> {

  return(
    <div className="hero-main-cont">
      <div className="background" />
    </div>
  )
}*/

export default () => {
  const size = useWindowSize()

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(".hero-image-background", {
      duration: 1,
      height: size.width >= 768 ? "48vw" : "90vh",
      delay: 0.5,
    })
      .to(".hero-info-animate", { duration: 0.5, opacity: 1, stagger: 0.15 })
      .to(".hero-down-button-cont", {
        duration: 0.5,
        ease: "back.out(4)",
        opacity: 1,
        scale: 1.1,
      })
      .to("#avatar-left", {
        duration: 0.5,
        ease: "back.out(2)",
        opacity: 1,
        x: "95px",
      })
      .to("#avatar-right", {
        duration: 0.5,
        ease: "back.out(2)",
        opacity: 1,
        x: "-90px",
      })
    //.to('.hero-vector', { duration: 1, y: '45%', x: '4%', opacity : 1 }, '-=3.5')
    const tlScroll = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-very-main-cont",
        start: "center bottom",
        end: "center top",
        scrub: 1,
        //markers: true
      },
    })

    tlScroll
      .to(".hero-vector", { yPercent: 0, xPercent: 0, opacity: 0, duration: 1 })
      .to(".hero-vector", {
        duration: 1,
        ease: "back.out(2)",
        yPercent: 40,
        xPercent: 4,
        opacity: 1,
      })
    return () => {
      tl.clear()
    }
  }, [])

  const handleNav = section => {
    //document.getElementById(section).scrollIntoView();
    gsap.to(window, { scrollTo: `#${section}`, ease: "properties" })
  }

  return (
    <div className="hero-very-main-cont">
      <div className="hero-main-cont">
        <img className="hero-vector" src="/hero/vector-2.svg" />
        <section className="hero-cont">
          <div className="hero-image-background">
            <img src="/hero/hero.png" />
            <h1>
              <span className="hero-info-animate">Optimiza, </span>
              <span className="hero-info-animate">gestiona </span>
              <span className="hero-info-animate">y vende más</span>
            </h1>
            <p>
              <span className="hero-info-animate">
                La nueva plataforma inmobiliaria que te ayuda{" "}
              </span>
              <span className="hero-info-animate">
                a optimizar tu tiempo de trabajo{" "}
              </span>
              <span className="hero-info-animate">
                y obtener mejores resultados.
              </span>
            </p>
            <span className="hero-info-animate">
              <a href="https://app.clasihome.com/register">
                <Button style={{ width: 330 }}>Pruébalo gratis</Button>
              </a>
            </span>
          </div>
          <a
            onClick={() => handleNav("property")}
            className="hero-down-button-cont"
          >
            <span>
              <img src="/icons/chevron.svg" />
            </span>
            <span>Conoce más</span>
          </a>
          <div id="avatar-left">
            <Avatar size={175} src="/hero/person-1.png">
              <h3>ClasiHome</h3>
              <small>Conectamos propiedades con clientes.</small>
            </Avatar>
          </div>
          <div id="avatar-right">
            <Avatar size={130} src="/hero/person-2.png">
              <h3>ClasiHome</h3>
              <small>Conectamos propiedades con clientes.</small>
            </Avatar>
          </div>
        </section>
      </div>
    </div>
  )
}
