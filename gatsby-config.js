/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Clasihome - Software Inmobilario de Chile",
    author: "Clasihome SPA",
    imageUrl: "https://clasihome.com/properties/back.png",
    description:
      "Conectamos clientes con propiedades. Optimiza, gestiona y vende más. La nueva plataforma inmobiliaria que te ayuda a optimizar tu tiempo de trabajo y obtener mejores resultados. Pruébalo gratis por 15 días.",
    keywords: `crm, inmobilario, chile, republica, propiedades, republicar, portales, portal, inmobiliaria, software, web, santiago, corredor, casas, departamentos, venta, arriendo, mejores, precios, app`,
    facebook: "https://www.facebook.com/Clasihome-109624727580277/",
    instagram: `https://www.instagram.com/_clasihome/?igshid=1u34cmwk5fudl`,
    siteUrl: `https://clasihome.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Clasihome - Software Inmobilario",
        short_name: "Clasihome",
        start_url: "/",
        icon: "static/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-1RFC3B3VKW", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lexend Deca`,
          `Lato`      
        ],
        display: 'swap'
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#dc314f",
            "font-family": "Lato",
            "font-size-base": "16px",
            "link-color": "#B0B6D1",
            "link-hover-color": "#dc314f",
            "link-active-color": "#bc203c",
            "text-color": "#002438",
            "btn-border-radius-base": "6px",
            "btn-shadow":
              "0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12)",
            "btn-primary-shadow":
              "0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12)",
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
}
