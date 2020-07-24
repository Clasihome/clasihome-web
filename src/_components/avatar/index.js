import React from 'react';
import './index.less';

export default ({ src, size, children })=> (
<div class="flip-card" style={{ width: size, height: size }}>
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={src} alt="Avatar" />
    </div>
    <div class="flip-card-back">
      {children}
    </div>
  </div>
</div>
)