import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { useWindowSize } from '../_hooks';
import './index.less';

const backtopStyle = {
  backgroundColor: "#dc314f",
  borderRadius: "50%",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export default ({ children }) => {
  const size = useWindowSize();
  return(
    <div className="layout-main-cont">
      <Header />
      {children}
      <Footer />
      <BackTop visibilityHeight={6000} />
    </div>
  )
}