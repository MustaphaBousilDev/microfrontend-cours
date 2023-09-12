/**
 * #01-- create fodler prdducts 
 * /products :: cmd (npm init -y)
 * /products :: cmd (npm i faker@5.1.0 html-webpack-plugin@4.5.0 nodemon webpack@5.3.2 webpack-cli@4.1.0 webpack-dev-server@3.11.0)
 * /products :: create folder src/index.js
 * /products :: create file webpack.config.js (content:: 
 * moduule.exports={mode:'development',}
 * )
 * /products :: inside file package.json 
 * --> {
 *  "scripts": {
    "start":"webpack"
  },}
  /products :: cmd(npm run start)
  /products :: file webpack.config.js 
  {
    module.exports={
    mode:'development',
    devServer:{
        port: 8081,
    },
}
  /products/package.json
  {
    scripts:{
        "start": "webpack serve" 
    }
  }
  }
 */

