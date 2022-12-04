import path from "path"
import CopyPlugin from "copy-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin"
import { cwd } from "process"
export default {
    mode: "development",
    entry: {
        index: [
            path.resolve(cwd(), "src/js/script.js"),
        ]
    },
    output: {
        path: path.resolve(cwd(), "dist"),
        clean: true,
        filename: "[name][fullhash].js",
        // assetModuleFilename: "[name][ext]",
        chunkFilename: "[id].[fullhash].js",
        pathinfo: false,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                type:"asset"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: true,
            filename: "index.html",
            template: path.resolve(cwd(), "src/views/view.html")
        }),
        new CopyPlugin({
            patterns: [
                { from: cwd() + "/src/views", to: cwd() + "/dist" }
            ]
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        static: "./dist"
    },
    resolve: {
        extensions: [".js", ".html", ".scss", ".svg", "..."]
    },
    optimization: {
        runtimeChunk: true,
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        // Lossless optimization with custom option
                        // Feel free to experiment with options for better result for you
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            // Svgo configuration here https://github.com/svg/svgo#configuration
                            [
                                "svgo",
                                {
                                    plugins: [
                                        {
                                            name: "preset-default",
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                    addAttributesToSVGElement: {
                                                        params: {
                                                            attributes: [
                                                                { xmlns: "http://www.w3.org/2000/svg" },
                                                            ],
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    }
}
