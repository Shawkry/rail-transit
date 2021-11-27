const webpack = require('webpack')

module.exports = {
	publicPath:'./',
	
  configureWebpack: {
	  plugins: [
	      new webpack.ProvidePlugin({
	          $: "jquery",
	          jQuery: "jquery",
	          "windows.jQuery": "jquery"
	      })
	  ],
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer:{
	  open:true,
    port: 1314,
	proxy: {
	    // 规则
	    // axios中相对地址开头的字符串  匹配请求uri中的前几位
	    "/api": {
	        // 把相对地址中的域名 映射到 目标地址中
	        // localhost:3000 => https://api.iynn.cn/film/api/v1/
	        target: "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples",
	        // 修改host请求的域名为目标域名
	        // changeOrigin: false,
	        changeOrigin: true,
	        // 请求uri和目标uri有一个对应关系
	        // 请求/api/login ==> 目标 /v1/api/login
	        pathRewrite: {
	            "^/api": "",
	        },
	    },
		
	},
  }

}

