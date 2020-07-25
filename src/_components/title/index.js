import React from 'react';
import Sticker from '../sticker';
import './index.less';

export default ({ title, text, src }) => (
  <div className="title-section">
    <Sticker src={src} />
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
)
