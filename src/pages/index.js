import React from "react";
import Layout from '../_layout';
import {
  Hero,
  Property,
  VisitOrder,
} from '../_sections/home';

export default ()=>{
  return (
    <Layout>
      <Hero />
      <Property />
      <VisitOrder />
    </Layout>
  )
}
