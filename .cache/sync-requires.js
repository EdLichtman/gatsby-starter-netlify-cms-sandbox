const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/pages/404.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/pages/blog/index.js"))),
  "component---src-pages-contact-examples-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/pages/contact/examples.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/pages/contact/file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/pages/contact/index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/pages/contact/thanks.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/pages/tags/index.js"))),
  "component---src-templates-about-page-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/templates/about-page.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/templates/blog-post.js"))),
  "component---src-templates-index-page-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/templates/index-page.js"))),
  "component---src-templates-product-page-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/templates/product-page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/edwardlichtman/Projects/gatsby-starter-template/src/templates/tags.js")))
}

