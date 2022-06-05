
  const { defaultTheme } = require('vuepress')
  
  module.exports = {
    lang: 'zh-CN',
    base: '/blog/',
    // port:'8080',  未测试
    title: 'NFT星联团购',
    description: '发布有关我们的动态.欢迎合作!',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    
    theme: defaultTheme({

        // 默认主题配置
        navbar: [
          {
            text: '首页',
            link: '/',
          },

          {
            text: '功能',
            link: '/guide',
          },
          {
            text: '公告',
            link: '/notice',
          },

          {
            text: '下载',
            link: '/download',
          },
        //   { text: '新闻', 
        //   children: 
        //   [
        //     {text:'笔记', link: '/sidebar/'}, // 可不写后缀 .md
              
        //     ] },
        ],

   // 我是侧边栏
     sidebar: "auto",

      }),
}
