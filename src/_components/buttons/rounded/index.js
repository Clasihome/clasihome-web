import React from 'react';
import { Button } from 'antd';
import './index.less';

export default ({
  children,
  size,
  onClick,
  icon,
  type,
  htmlType,
  rightIcon,
}) => (
  <Button
    size={size}
    onClick={onClick}
    icon={icon}
    type={type}
    htmlType={htmlType}
    className="button-rounded"
  >
    {children}
    {rightIcon}
  </Button>
)