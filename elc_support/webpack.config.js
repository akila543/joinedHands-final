var config = {
  entry: './main.js',
  output: {
    path: __dirname + '/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 8082
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|jpe?g)$/,
        use: ['file-loader']
      }
    ]
  }
}
module.exports = config
