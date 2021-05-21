import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../_layout"
import {
  Hero,
  //Property,
  //VisitOrder,
  //Contacts,
  Diffusion,
  Querys,
  Templates,
  Stats,
  Contact,
  Description,
  Customers
} from "../_sections/home"

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
      <Hero />
      <Customers title="LOS QUE PREFIEREN LA EXCELENCIA ELIGIERON CLASIHOME" />
      <Description />
      <Diffusion />
      <Querys />
      <Templates />
      <Stats />
      <Contact />

      {/*<div style={{ height: "100vh" }} />*/}
    </Layout>
  )
}
