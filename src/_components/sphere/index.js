import React from 'react';
import './index.less';

export default ({ rotation, size, id, children })=> (
  <div
    className="sphere"
    id={id}
    style={{ transform: `rotate(${rotation}deg)`, width: size, height: size }}
  >
    {children}
  </div>
)