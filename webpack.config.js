const fs = require('fs')
const path = require('path')

const BannerPlugin = require('./webpack_plugins/BannerPlugin')
const DefinePlugin = require('webpack').DefinePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackObfuscator = require('webpack-obfuscator')

const timestamp = + Date.now()


let config = {
    mode: 'development',
    entry: {
        yukon: './src/Game.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        path: path.resolve(__dirname, 'assets/scripts/client')
    },
    optimization : {
        minimize: false
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname),
            publicPath: '/',
            watch: {
                ignored: [
                    path.resolve(__dirname, '.git'),
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        },
        devMiddleware: {
            writeToDisk: true
        },
        proxy: {
            '/world/blizzard': {
                target: 'http://localhost:6112',
                pathRewrite: { '^/world/blizzard': '' },
                ws: true
            }
        },
        host: 'localhost',
        port: 8080,
        hot: false
    },
    resolve: {
        alias: {
            '@engine': path.resolve(__dirname, 'src/engine'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@components': path.resolve(__dirname, 'src/scenes/components'),
            '@rooms': path.resolve(__dirname, 'src/scenes/rooms'),
            '@games': path.resolve(__dirname, 'src/scenes/games'),
            '@igloos': path.resolve(__dirname, 'src/scenes/igloos'),
            '@parties': path.resolve(__dirname, 'src/scenes/parties')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            TIMESTAMP: timestamp
        })
    ]
}

module.exports = (env, argv) => {
    if (argv.mode !== 'production') {
        return config
    }

    config.output = {
        filename: '[name].bundle.min.js',
        chunkFilename: '[id].bundle.min.js',
        path: path.resolve(__dirname, 'assets/scripts/client'),
        clean: true,
    }

    config.optimization.minimize = true
    config.optimization.minimizer = [
        new TerserPlugin({
            extractComments: false
        })
    ]

    config.plugins.push(
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: false,
            template: 'index.ejs',
            templateParameters: {
                timestamp: timestamp
            }
        }),
        // MIT License do not remove
        new BannerPlugin({
            banner: fs.readFileSync('./LICENSE', 'utf-8')
        })
    )

    if (env.obfuscate === 'true') {
        config.plugins.push(
            new WebpackObfuscator({
                rotateStringArray: true,
                reservedStrings: ['\s*']
            }, [])
        )
    }

    return config
}
