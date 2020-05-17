module.exports = {
  mode: 'development',  // development, production
  entry: {
    hello: [
      './ts/hello.ts',
      './ts/hello2.ts'
    ]
  },
  output: {
    path: __dirname + '/js',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};
