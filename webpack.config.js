var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development', //production, development or none
    entry: {
        pageMain: './src/pages/main/index.js',
        pageOne: './src/pages/page1/index.js',
        pageTwo: './src/pages/page2/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
                ],
            },
            {
                test: /\.ts$/, use: 'ts-loader'
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/pages/main/index.html',
            filename: 'main.html',
            minify: {
              removeComments: true,
              collapseWhitespace: true
            }
          }),
        
          new HtmlWebpackPlugin({
            template: './src/pages/page1/index.html',
            filename: 'page1.html',
            minify: {
              removeComments: true,
              collapseWhitespace: true
            }
          }),

          new HtmlWebpackPlugin({
            template: './src/pages/page2/index.html',
            filename: 'page2.html',
            minify: {
              removeComments: true,
              collapseWhitespace: true
            }
          }),
    ]
};