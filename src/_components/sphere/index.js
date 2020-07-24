import React from 'react';
import './index.less';

export default ({ rotation, size })=> <div className="sphere" style={{ transform: `rotate(${rotation}deg)`, width: size, height: size }} />