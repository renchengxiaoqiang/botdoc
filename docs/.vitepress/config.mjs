import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: 'dark',
  title: '智能客服',
  description: '电商智能客服机器人',
  lang: 'zh-CN',
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
    nav: [
      { text: '文档', link: '/features' },
      { text: '关于', link: '/about' },
      {
        text: "v1.0.7",
        items: [
          {
            text: '更新日志',
            link: '/changelog'
          }
        ]
      },
      { text: '立即下载', link: '/bot_setup.exe' },
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/renchengxiaoqiang/pdkbot' },
    ],
    sidebar: [
      {
        text: '简介',
        collapsed: true,
        items: [
          { text: '如何下载', link: '/guide/' },
          { text: '安装注册', link: '/guide/install' },
          { text: '快速上手', link: '/guide/getting-started' },
          { text: '如何购买', link: '/guide/how-to-buy' },
        ]
      },
      {        
        text: '知识库',
        collapsed: true,
        items: [
          { text: '创建分组', link: '/kownledge/' },
          { text: '创建规则', link: '/kownledge/create_rule' },
        ]
      }
    ],
  }
})