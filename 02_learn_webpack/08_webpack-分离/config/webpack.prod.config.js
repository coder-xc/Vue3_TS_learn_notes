const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWepackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge")

const commonConfig = require("./webpack.comm.config");

module.exports = merge(commonConfig, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWepackPlugin({
            patterns: [
                {
                    from: "./public",
                    globOptions: {
                        ignore: [
                            "**/index.html"
                        ]
                    }
                }
            ]
        }),
    ]
})