import React, { useEffect, useState } from 'react';
import Logo from '../../_components/logo';
import Container from '../../_components/container';
import Sphere from '../../_components/sphere';
import { gsap, TimelineLite } from 'gsap';
import { MenuOutlined, FacebookFilled, TwitterCircleFilled, InstagramFilled, CopyrightOutlined } from '@ant-design/icons';
import './index.less';

export default ()=> {
  const [menu, setMenu] = useState(false);

  useEffect(()=> {
    const tl = new TimelineLite();
    if(menu){
      tl.to('.responsive-nav', .30, { y: "100vh" })
        .to('.nav-option', { duration: 1.5, ease: "back.out(1.7)", opacity: 1, stagger: 0.1})
        .to('#nav-sphere', { duration: 1, ease: "back.out(1.7)", y: "-50vw" }, "-=1.5")
      gsap.to('#top', .25, { y: 7, rotate: 45 });
      gsap.to('#middle', .25, { opacity: 0 });
      gsap.to('#bottom', .25, { y: -7, rotate: -45 });
    } else{
      tl.set('#nav-sphere',{ y: "100vw" })
        .set('.nav-option', { opacity: 0 })
        .to('.responsive-nav', .30, { y: "-100vh" })
      gsap.to('#top', .25, { y: 0, rotate: 0 });
      gsap.to('#middle', .25, { opacity: 1 });
      gsap.to('#bottom', .25, { y: 0, rotate: 0 });
    }
    return ()=> {
      tl.clear();
    }
  },[menu])

  return(
    <header className="main-header">
      <nav className="responsive-nav">
        <ul>
          <li className="nav-option"><a href="#a">Funciones</a></li>
          <li className="nav-option"><a href="#b">Precios</a></li>
          <li className="nav-option"><a href="#c">Contacto</a></li>
        </ul>
        <Sphere id="nav-sphere" size={window.innerWidth}>
          <ul>
            <li>
              <a href="https://facebook.com">
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <TwitterCircleFilled />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <InstagramFilled />
              </a>
            </li>                        
          </ul>
          <p>+56 9 97733 9829 / ventas@clasihome.com</p>
          <p>
            <CopyrightOutlined />
            2020 Clasihome, All rights reserved.
          </p>
        </Sphere>
      </nav>
      <Container>
        <nav className="main-nav">
          <Logo />
          <button onClick={()=> setMenu(!menu)}>
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