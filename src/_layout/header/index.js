import React, { useEffect, useState } from "react"
import Logo from "../../_components/logo"
import Container from "../../_components/container"
import Sphere from "../../_components/sphere"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Link } from 'gatsby';
import {
  ArrowRightOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  CopyrightOutlined,
} from "@ant-design/icons"
import { Button } from "../../_components/buttons"
import "./index.less"
import SEO from "../../_components/seo"

gsap.registerPlugin(ScrollToPlugin)

export default () => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline()
    if (menu) {
      tl.to(".responsive-nav", 0.3, { y: "100vh" })
        .to(".nav-option", {
          duration: 1.5,
          ease: "back.out(1.7)",
          opacity: 1,
          stagger: 0.1,
        })
        .to(
          "#nav-sphere",
          { duration: 1, ease: "back.out(1.7)", y: "-50vw" },
          "-=1.5"
        )
      gsap.to("#top", 0.25, { y: 7, rotate: 45 })
      gsap.to("#middle", 0.25, { opacity: 0 })
      gsap.to("#bottom", 0.25, { y: -7, rotate: -45 })
    } else {
      tl.set("#nav-sphere", { y: "100vw" })
        .set(".nav-option", { opacity: 0 })
        .to(".responsive-nav", 0.3, { y: "-100vh" })
      gsap.to("#top", 0.25, { y: 0, rotate: 0 })
      gsap.to("#middle", 0.25, { opacity: 1 })
      gsap.to("#bottom", 0.25, { y: 0, rotate: 0 })
    }
    return () => {
      tl.clear()
    }
  }, [menu])

  const handleNav = section => {
    setMenu(false)
    //document.getElementById(section).scrollIntoView();
    gsap.to(window, { scrollTo: `#${section}`, ease: "power2" })
  }

  const handleFunctionOption = () => {
    const tl = gsap.timeline()
    tl.to(window, { scrollTo: "#property", ease: "power2", autoKill: true })
      .to(window, {
        scrollTo: "#visit-orders",
        delay: 3,
        ease: "power2",
        autoKill: true,
      })
      .to(window, {
        scrollTo: "#contacts",
        delay: 3,
        ease: "power2",
        autoKill: true,
      })
      .to(window, {
        scrollTo: "#diffusion",
        delay: 3,
        ease: "power2",
        autoKill: true,
      })
      .to(window, {
        scrollTo: "#querys",
        delay: 3,
        ease: "power2",
        autoKill: true,
      })
      .to(window, {
        scrollTo: "#templates",
        delay: 3,
        ease: "power2",
        autoKill: true,
      })
    //.clear();
  }

  return (
    <header className="main-header">
      <SEO />
      <nav className="responsive-nav">
        <ul>
          {/*<li className="nav-option"><a href="#a">Funciones</a></li>*/}
          <li className="nav-option">
            <Button onClick={() => handleNav("property")} type="link">
              Funciones
            </Button>
          </li>
          <li className="nav-option">
            <Button onClick={() => handleNav("stats")} type="link">
              Precios
            </Button>
          </li>
          <li className="nav-option">
            <Button onClick={() => handleNav("contact")} type="link">
              Contacto
            </Button>
          </li>
          <li className="nav-option">
            <Link to="/customers" onClick={()=> setMenu(false)}>
              <Button type="link">
                Nuestros clientes
              </Button>
            </Link>
          </li>          
          <li className="nav-option">
            <Button
              type="link"
              rounded
              block
              style={{ fontSize: "30px", fontWeight: "bold", color: "#F1034A" }}
              onClick={() =>
                (window.location.href = "https://app.clasihome.com/login")
              }
            >
              Ingresar
            </Button>
          </li>
        </ul>
        <Sphere id="nav-sphere">
          <ul>
            <li>
              <a href="https://facebook.com">
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <InstagramFilled />
              </a>
            </li>
          </ul>

          <p>
            <CopyrightOutlined /> 2020 Clasihome <br />
            Todos los derechos reservados
          </p>
        </Sphere>
      </nav>
      <Container>
        <nav className="main-nav">
          <Logo />
          <ul className="desktop-nav">
            <li>
              <Button onClick={() => handleNav("property")} type="link">
                Funciones
              </Button>
            </li>
            <li>
              <Button onClick={() => handleNav("stats")} type="link">
                Precios
              </Button>
            </li>
            <li>
              <Button onClick={() => handleNav("contact")} type="link">
                Contacto
              </Button>
            </li>
            <li>
              <Link to="/customers" onClick={()=> setMenu(false)}>
                <Button type="link">
                  Nuestros clientes
                </Button>
              </Link>
            </li>                      
          </ul>
          <div className="desktop-nav-buttons">
            <Button
              rounded={"true"}
              shadow="true"
              size="middle"
              type="primary"
              onClick={() =>
                (window.location.href = "https://app.clasihome.com/register")
              }
            >
              Empieza ahora
            </Button>
            <Button
              id="register-button"
              type="link"
              onClick={() =>
                (window.location.href = "https://app.clasihome.com/login")
              }
            >
              Ingresar
            </Button>
          </div>
          <button className="responsive-button" onClick={() => setMenu(!menu)}>
            <ul className="menu-icon">
              <li id="top" />
              <li id="middle" />
              <li id="bottom" />
            </ul>
          </button>
        </nav>
      </Container>
    </header>
  )
}
