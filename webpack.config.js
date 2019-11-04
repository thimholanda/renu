const modoDev = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 9000,
        open: true,
        host: '0.0.0.0'
    }
    ,
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    }
    ,
    output:{
        filename: 'app.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'css/styles.css'}),
        new CopyWebpackPlugin([
            {context: 'src/', from: '**/*.html'},
            {context: 'src/', from: '**/*.php'},
            {context: 'src/', from: 'imgs/**/*'}
        ]),
        // new ImageminPlugin({
        //     disable: process.env.NODE_ENV !== 'production', // Disable during development
        //     pngquant: {
        //         quality: '70'
        //     },
        //     plugins: [
        //         imageminMozjpeg({
        //             quality: 70,
        //             progressive: true
        //         })
        //     ]
        //
        // })
        // ,
        // new TerserPlugin({
        //     parallel: true,
        //     terserOptions: {
        //         ecma: 6,
        //     },
        // })

    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(webp|jp2|png|jpg|gif|ttf|otf|eot|svg|woff(2)?)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            outputPath: './build'
                        }

                    }
                ]
            }
        ]
    }
}