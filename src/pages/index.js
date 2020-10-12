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
} from "../_sections/home"

export default () => {
  const getCliengo = () => {
    var ldk = document.createElement("script")
    ldk.type = "text/javascript"
    ldk.async = true
    ldk.src =
      "https://s.cliengo.com/weboptimizer/5f847378f356b4002a66285a/5f84746df356b4002a6628b7.js"
    var s = document.getElementsByTagName("script")[0]
    s.parentNode.insertBefore(ldk, s)
  }
  return (
    <Layout>
      <Helmet>
        <script type="text/javascript">{`${getCliengo()}`}</script>
      </Helmet>
      <Hero />
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
