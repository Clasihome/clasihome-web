import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../_layout"
import {
  Hero,
  CustomersList,
  Reviews,
} from "../_sections/customers";
import { Customers } from '../_sections/home';

export default () => {
  return (
    <Layout>
      <Helmet>
        <script
          type="text/javascript"
          async
          src="https://s.cliengo.com/weboptimizer/5f847378f356b4002a66285a/5f84746df356b4002a6628b7.js"
        />
      </Helmet>
      <div style={{ backgroundColor: "#F4F7FC" }}>
        <Hero />
        {/*<CustomersList />*/}
        <Customers title="NUESTROS CLIENTES HABLAN POR NOSOTROS" />
        <Reviews />        
      </div>
    </Layout>
  )
}
