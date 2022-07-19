module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: __dirname,
    filename: 'main.js',
    libraryTarget: "commonjs2",
  },
  devtool: false,
  externals: {
    application: 'application',
    uxp: 'uxp',
    scenegraph: 'scenegraph'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            "transform-react-jsx",
            "transform-object-rest-spread",
          ]
        }
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};