module.exports = {
  plugins: {
    autoprefixer: {}, //  添加浏览器前缀
    // 'postcss-preset-env': {}, //  使用新的css特性，如变量
    'postcss-pxtorem': {  //  将px转为rem, 移动端屏幕自适应方案，配合flexible.js
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
