import React, { Fragment, useEffect } from 'react';
import { gsap } from "gsap";
import { v1 as uuid } from 'uuid';
import CUSTOMERS from '../../../_constants/CUSTOMERS.json';
import './index.less';

export default ()=> {
  let controller = null;

  useEffect(()=>{
    gsap.set(".box", {
      x: (i) => i * 200,
    });
    const mod = gsap.utils.wrap(0, 200 * 29);
    const tween = gsap.to(".box",{
      paused: true,
      duration: 120,
      x: "-=" + (200 * 29),
      ease: "linear",
      //paused: true,
      repeat: -1,
      modifiers:{
        x: x => mod(parseFloat(x)) + "px"
      },    
    });    
    controller = tween;
    tween.play();
  });

  return(
    <section className="very-main-cont">
      <h2 className="title">LOS QUE PREFIEREN LA EXCELENCIA ELIGIERON CLASIHOME</h2>
      <div className="main-cont" id="elm">
        {
          CUSTOMERS.map((item, i) => (
            <div key={uuid()} className="box">
              <img src={item.logo} alt={item.office} className="logo" />
            </div>          
          ))
        }
      </div>      
    </section>
  )
}