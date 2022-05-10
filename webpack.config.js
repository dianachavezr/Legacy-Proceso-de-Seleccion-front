const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtraxtPlugin = require("mini-css-extract-plugin");

const nodeEnv = process.env.NODE_ENV === "development";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            //   {
            //       test: /\.(sass|less|css)$/,
            //       loaders: ['style-loader', 'css-loader', 'less-loader']
            //     },
            //   {
            //     test: /\.(sass|less|css)$/,
            //     loaders: ["style-loader", "css-loader", "less-loader"],
            //   },

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                },
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtraxtPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|gif|jpg|svg|otf|pdf|docx|)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: nodeEnv
                                ? "assets/[name].[ext]"
                                : "assets/[hash].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtraxtPlugin({
            filename: nodeEnv ? "assets/[name].css" : "assets/[name].css",
        }),
    ],
};
