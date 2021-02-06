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
