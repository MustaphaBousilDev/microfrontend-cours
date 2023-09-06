const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports={
    mode:'development',
    devServer:{
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'products',
            filename:'remoteEntry.js',
            exposes:{
                './ProductsIndex': './src/index.js'
            },
            //shared dependency
            shared: {
                faker: {
                  //if exists diffetent version of dependancy in diffenrent compoennt they loading both file but when we using singlton true we loading one fucking file
                 singleton: true,
                }
             }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}