const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externalsType: 'script',
  externals: {
    googleAPI: ['https://apis.google.com/js/api:client.js', 'gapi'],
  },
  mode: 'development',
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      },
      
    ],
  },
  
};

