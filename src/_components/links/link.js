import React from 'react';
import { Tooltip } from 'antd';

export default ({ children, href, title, icon, tip, dark }) => (
  <a
    className={dark ? 'clasi-link clasi-link-dark' : 'clasi-link clasi-link-light'}
    href={href}
    title={title}
  >
    {children}
    <Tooltip title={tip}>
      {icon}
    </Tooltip>
  </a>
)