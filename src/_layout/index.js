import React from 'react';
import Container from '../_components/container';
import Logo from '../_components/logo';
import './index.less';

export default ({ children }) => (
  <div className="layout-main-cont">
    <header style={{ padding: "1rem 0" }}>
      <Container>
        <Logo />
      </Container>
    </header>
    <div className="layout-body">
      {children}
    </div>
  </div>
)