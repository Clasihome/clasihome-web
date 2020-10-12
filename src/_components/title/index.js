import React from 'react';
import Sticker from '../sticker';
import { Bounce, Fade } from 'react-reveal';
import './index.less';

export default ({ title, text, src }) => {

  return(
    <div className="title-section">
      <Bounce delay={250}>
        <Sticker src={src} />
      </Bounce>
      <Bounce delay={300} bottom>
        <h2>{title}</h2>
      </Bounce>
      <Fade delay={800}>
        <p>{text}</p>
        <ul>
          <li />
          <li />
          <li />
        </ul>      
      </Fade>
    </div>
  )  
}