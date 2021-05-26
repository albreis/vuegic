module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vuegic/' : '/',
  devServer: {
    host: 'everaldoreis.com.br',
    https: false,
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  configureWebpack: {
    resolve: {
      // Add `.ts` as a resolvable extension.
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        // ... other rules omitted
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] }
        }
      ]
    },
  }
}