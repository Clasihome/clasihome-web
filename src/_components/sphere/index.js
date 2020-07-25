import React from 'react';
import './index.less';

export default ({ rotation,className, size, id, children })=> (
  <div
    className={`sphere ${className}`}
    id={id}
    style={{ transform: `rotate(${rotation}deg)`, width: size, height: size }}
  >
    {children}
  </div>
)