import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../_layout"
import {
  Hero,
  Content,
} from "../_sections/customers"

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
      <Content />
    </Layout>
  )
}
