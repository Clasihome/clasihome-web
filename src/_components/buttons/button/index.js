import React from 'react';
import { Button } from 'antd';
import './index.less';

export default (props) => (
  <Button
    {...props}
    size={props.size ? props.size : "large"}
    className={props.rounded ? 'button-rounded' : ''}
  >
    {props.children}
  </Button>
)