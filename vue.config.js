const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  publicPath: process.env.BASE_URL,
  productionSourceMap: false,
  devServer: {
    host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  configureWebpack:{
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,//console
              drop_debugger: false,
              pure_funcs: ['console.log']//移除console
            }
          }
        })
      ]
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    }
  },
};
