import React from 'react';
import './index.less';

export default ({ children, dark, className, id })=> (
  <section
    id={id}
    style={{ backgroundColor: dark ? "#F4F7FC" : "#FFFFFF" }}
    className={`section-cont ${className}`}
  >
    <div className="snap-child">
    {children}
    </div>
  </section>
)