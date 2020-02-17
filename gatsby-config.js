module.exports = {
  siteMetadata: {
    title: `What Day Is It?`,
    description: `What Day Is It? podcast is the digital version of happy hour with your besties. PLAY Digital Founder Bailey Stanworth and her right hand gal Jacci Rai are covering every girl problem, life struggle and biz reality there is. Get ready to cheers and celebrate the inspirational and relatable af stories from girls (and gents) who may or may not have it all together. Also, FYI, it’s not drinking alone if you’re listening to WDII!`,
    author: `by PLAY DIGITAL`,
    twitter: ``,
    instagram: `https://www.instagram.com/whatdayisitpodcast/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1450232346?ct=podlink&mt=2`,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly93aGF0ZGF5aXNpdC5saWJzeW4uY29tL3Jzcw==`,
    pocket: `https://pca.st/itunes/1450232346`,
    spotify: `https://open.spotify.com/show/16dIprBDPbKq5ANPej1cYg`,
    overcast: `https://overcast.fm/itunes1450232346`,
    castbox: `https://castbox.fm/vic/1450232346`,
    castro: `https://castro.fm/itunes/1450232346`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Fwhatdayisit.libsyn.com%2Frss`,
    stitcher: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://whatdayisit.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
