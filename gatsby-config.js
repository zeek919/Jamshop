module.exports = {
  siteMetadata: {
    title: "BEJAMAS | GATSBY SHOP",
    description: "",
    author: "@bejamasio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./src/assets/images/icon.png", // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "JAMSHOP",
    //     fieldName: "jamshop",
    //     url:
    //       ,
    //   },
    // },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-eu-central-1.graphcms.com/v2/ckho3c5wo495m01z49fvv6via/master",
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDU5MDA1MjIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NraG8zYzV3bzQ5NW0wMXo0OWZ2djZ2aWEvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYzk3NWI1MGEtZjE1Ni00YWE1LTllMGQtNzBiNTFkZDNiODI4IiwianRpIjoiY2tocW5waHFpY3NqNTAxeXg4eDlvYTgwbCJ9.rWdvqqI6P_uB8hGQD6Jdg-g97nunAtft0gwHjN88kAyzrDmviC6m_yCMoPjW2oiB91Q0lCwnc8lpISBv9IbzXvtqee7e4BKeoK8ARDXZMPJ-LyXA0eQEufJ4ZVSDgoPlEdM0ff3QTNvnFtMVOWrDoiiXma1kbXL7Gnw-6Iw0Zpgv9Fl8AUYrISwX3WStX0oNobqq1X1MLrpfopOtueRdR3bK8oo2vQiRQZMH43dYutXldPmVVnpLKQQ0xdLtxRoZlR9NNxiEs2dWTx4pgi7rpzEvasQ4VG11A0yHUE9uEy5lC5_qkrupOw7DsLS_juDvkB6_S1GS5PRhGXzlGjBnFlW2E81Ab-svttK_lnkx91NnhjRy3Y2Y8WZWVLwftRiTuVjyyd4XyGxPzcQYmTu8rTvIhM2gaKfcovsy_T6eyyN6VVF3g7Nr_aDBhATBpH4bYNrcnGyQTS7shxrwjlIBmpyhLz1TdrekzN_i4AN930pwk1i01X8S3jxKAPWzg5PavNxaUYT8hOGIku_-fgRSzwCy9huVR_oPAZn83YS3vYKF3FCiyFQRdW-VnFItWImug-AU4Z3FnWHD1ZmrglrC2E5OHvb9q9ZW5itRRdz8CD7hOAP_KCTUgnXyTsGHemNzEoXkPB9N2NbHPZZLijAekieEfki5dYL8XjF9rOpyKE0",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // eslint-disable-next-line
          `Montserrat\:200,400,500,600,700,900`,
          `Roboto\:400,700`,
        ],
        display: "swap",
      },
    },
  ],
}
