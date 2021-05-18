import { Button, Result } from "antd"
import { Link } from "gatsby"
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
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          async
          src="https://s.cliengo.com/weboptimizer/5f847378f356b4002a66285a/5f84746df356b4002a6628b7.js"
        />
      </Helmet>
      <Result
        style={{ paddingTop: "150px" }}
        status="404"
        title="404"
        subTitle="Disculpa, esta página no existe."
        extra={
          <Link to="/">
            <Button type="primary" size="large">
              Ir al inicio
            </Button>
          </Link>
        }
      />

      {/*<div style={{ height: "100vh" }} />*/}
    </>
  )
}
