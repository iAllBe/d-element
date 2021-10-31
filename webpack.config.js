const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader",],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};