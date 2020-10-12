/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lexend Deca`,
            //variants: [`400`, `700`]
          },
          {
            family: `Lato`,
            //subsets: [`latin`]
          },
        ],
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
