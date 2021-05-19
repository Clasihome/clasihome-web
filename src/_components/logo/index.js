import React from 'react';
import { Link } from 'gatsby';
import './index.less';

export default ()=> (
  <Link className="link-logo" to="/" title="Inicio">
    <img src="/logotipo_full.png" alt="clasihome logo" />
  </Link>
)