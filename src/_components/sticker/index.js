import React from 'react';
import './index.less';

export default (props)=> (
  <span className={props.portal ? 'sticker-portal' : 'sticker'} id={props.id}>
    <img width={props.width} height={props.height} src={props.src} />
  </span>
)