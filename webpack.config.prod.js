const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require("./webpack.config.base");
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin=require("copy-webpack-plugin");
module.exports =merge(base,{
    plugins: [ 
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name]-[hash].css',
            chunkFilename: '[id].css',
        }),
     
            new CopyWebpackPlugin([{
                from: __dirname + '/src/mock',
                to:__dirname+"/dist/mock"
                }])      
  
    ]
    ,
    mode: "production",
    optimization: {
        minimize: true, //使用 TerserPlugin 压缩js,默认true
        minimizer: [   //自定义 TerserPlugin压缩
            new TerserPlugin({
                cache: true, //缓存 优化速度
                parallel: true //多线程
            }),
            new OptimizeCSSAssetsPlugin({})  //css压缩
        ]
    },        
    module: {
        rules: [        
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader
                    }, 
                   {
                    loader:'css-loader',
                    options: {
                        modules: false,
                        },
                        
                   }
                ],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
               
                        
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        modules: true,
                        },
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles sass to CSS
                }]
            },

        ]
    }

});
