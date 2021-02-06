const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        host: '127.0.0.1',
        contentBase: path.join(__dirname, "/"),
        compress: true,
        hot: true,
        inline: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ttf|otf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.mp3$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use : [
                    'file-loader?name=images/[name].[ext]?[hash]',
                    'image-webpack-loader'
                ]
            },
        ],
    },
};
