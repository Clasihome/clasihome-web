import React from 'react';
import Container from '../container';
import './index.less';

export default ({ children, dark })=> (
  <section
    style={{ backgroundColor: dark ? "#F4F7FC" : "#FFFFFF" }}
    className="section-cont"
  >
    <Container>
      {children}
    </Container>
  </section>
)