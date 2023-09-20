// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  devServer: {
    open: true,
    // port: port,
    host: '0.0.0.0',
    https: false,
    proxy: {
      '/api': { //用/api代替服务端真实地址
        target: `//localhost:3000`, //服务端真实地址
        changeOrigin: true, //运行跨域
        pathRewrite: {
          '^/api': '' //请求的时候，地址重写
        }
      }
    }
  }
  // 选项...
  // css: {
  //   sourceMap: true,
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "@/styles/element/index.scss";`
  //     }
  //   }
  // },

}