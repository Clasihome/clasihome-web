import React from 'react';
import Header from './header';
import './index.less';

export default ({ children }) => (
  <div className="layout-main-cont">
    <Header />
    <div className="layout-body">
      {children}
    </div>
  </div>
)