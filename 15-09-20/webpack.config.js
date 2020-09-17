const path = require("path");

module.exports = {
    // entry: "./srcone/subject.ts",
    // entry: "./subscribe/count.ts",
    entry: "./srctwo/index.ts",

    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};