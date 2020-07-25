import React, { useEffect } from 'react';
import { Button } from '../../../_components/buttons';
import Avatar from '../../../_components/avatar';
import { TimelineLite } from 'gsap';
import './index.less';

export default ()=> {

  useEffect(()=> {
    const tl = new TimelineLite();
    tl.to('.hero-image-background', { duration: 2, height: "90vh" })
      .to('.hero-info-animate', { duration: 1, opacity: 1, stagger: 0.15 })
      .to('.hero-down-button-cont', { duration: 1, ease: "back.out(4)", opacity: 1, scale: 1.1 })
      .to('#avatar-left', { duration: 1, ease: "back.out(2)", opacity: 1, x: '135px'  })
      .to('#avatar-right', { duration: 1, ease: "back.out(2)", opacity: 1, x: '-90px'  })

    return ()=> {
      tl.clear();
    }
  },[])

  return(
    <div className="hero-main-cont">
      <section className="hero-cont">
        <div className="hero-image-background">
          <img src='/hero/hero.png' />
          <h1>
            <span className="hero-info-animate">Contactamos </span>
            <span className="hero-info-animate">propiedades </span>
            <span className="hero-info-animate">con clientes</span>
          </h1>
          <p>
            <span className="hero-info-animate">Clasihome, el CRM Inmobiliario que te brinda </span>
            <span className="hero-info-animate">mejores y nuevas herramientas para optimizar </span>
            <span className="hero-info-animate">tu gestión. Todo en un sólo lugar.</span>
          </p>
          <span className="hero-info-animate">
            <Button style={{ width: 330 }}>
              Probalo gratis
            </Button>
          </span>
        </div>
        <a href="#property" className="hero-down-button-cont">
          <span>
            <img src="/icons/chevron.svg" />
          </span>
          <span>Conoce más</span>
        </a>
      </section>
      <div id="avatar-left">
          <Avatar
            size={175}
            src="/hero/person-1.png"
          >
            <h3>ClasiHome</h3>
            <small>Conectamos propiedades con clientes.</small>                        
          </Avatar>
        </div>
        <div id="avatar-right">
          <Avatar
            size={130}
            src="/hero/person-2.png"
          >
            <h3>ClasiHome</h3>
            <small>Conectamos propiedades con clientes.</small>            
          </Avatar>
        </div>      
    </div>
  )
}