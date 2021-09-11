const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
    entry: "./src/index.tsx",

    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, 'build'),
    },

    devtool: "source-map",

    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.json']
    },

    devServer: {
        static: './build/',
        port: 3000
    },

    performance: {
        hints: false
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new Dotenv()
    ]
}