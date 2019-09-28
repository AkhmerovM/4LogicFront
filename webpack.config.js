const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = {
    public: path.resolve(__dirname, 'www/'),
    src: path.resolve(__dirname, 'assetSource/')
};
// const isDev = NODE_ENV == 'development';
// console.log(process.env.NODE_ENV);
module.exports = {
    context: paths.src,
    entry: {
        main: './index.js'
    },
    output: {
        filename: 'build/[name].js',
        path: paths.public
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: '/node_modules'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                exclude: '/node_modules',
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [new ExtractTextPlugin({
        filename: 'build/[name].min.css'
    })],
    devServer: {
        contentBase: paths.public,
        // publicPath: paths.public,
        historyApiFallback: true,
        compress: true,
        port: 9001,
        hot: true
    },
    devtool: 'source-map',
    watch: false,
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: ['node_modules', paths.src]
    },
    watchOptions: {
        aggregateTimeout: 300
    }
};
