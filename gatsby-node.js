/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "components": path.resolve(__dirname, "src/components"),
        "images": path.resolve(__dirname, "src/images"),
        "src": path.resolve(__dirname, "src")
      }
    }
  });
};