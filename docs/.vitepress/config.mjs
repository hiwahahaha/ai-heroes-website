import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '书籍:《AI名人传》',
  titleTemplate: ':title — 书籍:《AI名人传》',
  description: '《AI名人传：那些让"龙虾"活起来的人——Pro/Max/Mega版》——以人物为线索，以故事为载体，讲述AI从图灵到GPT的史诗历程，品味20多位AI名人的百味人生与智慧，解析AI技术的迭代演进与发展，分享AI Agent热门场景下的落地实践与交流。适合从AI启蒙到从业者等不同阶段的读者。',

  head: [
    // 轮播和模态窗全局脚本（外部文件确保挂载到window）
    ['script', { src: '/carousel.js' }],
    // Favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Theme color
    ['meta', { name: 'theme-color', content: '#f5f0e8' }],
    // SEO - 安全头（通过meta实现，GitHub Pages不支持HTTP头）
    ['meta', { 'http-equiv': 'X-Frame-Options', content: 'DENY' }],
    ['meta', { name: 'keywords', content: 'AI名人传,人工智能,AI启蒙教育,AI应用,知识库,AI名人智慧思维,hermes实战,图灵,辛顿,李飞飞,黄仁勋,深度学习,人物传记,ChatGPT,AI书籍,AI启蒙' }],
    ['meta', { name: 'author', content: 'Oliver' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AI名人传 — 从图灵到GPT的史诗历程' }],
    ['meta', { property: 'og:description', content: '《AI名人传：那些让"龙虾"活起来的人——Pro/Max/Mega版》——以人物为线索，以故事为载体，讲述AI从图灵到GPT的史诗历程，品味20多位AI名人的百味人生与智慧，解析AI技术的迭代演进与发展，分享AI Agent热门场景下的落地实践与交流。适合从AI启蒙到从业者等不同阶段的读者。' }],
    ['meta', { property: 'og:url', content: 'https://star-sea-go.cn/' }],
    ['meta', { property: 'og:site_name', content: 'AI名人传' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: 'https://star-sea-go.cn/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'AI名人传 — 从图灵到GPT的史诗历程' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'AI名人传 — 从图灵到GPT的史诗历程' }],
    ['meta', { name: 'twitter:description', content: '《AI名人传：那些让"龙虾"活起来的人——Pro/Max/Mega版》——以人物为线索，以故事为载体，讲述AI从图灵到GPT的史诗历程，品味20多位AI名人的百味人生与智慧，解析AI技术的迭代演进与发展，分享AI Agent热门场景下的落地实践与交流。适合从AI启蒙到从业者等不同阶段的读者。' }],
    // Canonical
    ['link', { rel: 'canonical', href: 'https://star-sea-go.cn/' }],
    // Sitemap hint
    ['link', { rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml' }],
    // JSON-LD 结构化数据 (Book + Organization)
    ['script', { type: 'application/ld+json', innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "AI名人传",
      "alternateName": "AI Heroes Biography",
      "description": "《AI名人传：那些让\"龙虾\"活起来的人——Pro/Max/Mega版》——以人物为线索，以故事为载体，讲述AI从图灵到GPT的史诗历程，品味20多位AI名人的百味人生与智慧，解析AI技术的迭代演进与发展，分享AI Agent热门场景下的落地实践与交流。适合从AI启蒙到从业者等不同阶段的读者。",
      "author": {
        "@type": "Person",
        "name": "Oliver",
        "url": "https://star-sea-go.cn"
      },
      "url": "https://star-sea-go.cn",
      "inLanguage": "zh-CN",
      "genre": "Technology / Biography / Education",
      "about": [
        { "@type": "Thing", "name": "人工智能" },
        { "@type": "Thing", "name": "深度学习" },
        { "@type": "Thing", "name": "人物传记" },
        { "@type": "Thing", "name": "AI启蒙教育" },
        { "@type": "Thing", "name": "AI应用" },
        { "@type": "Thing", "name": "知识库" },
        { "@type": "Thing", "name": "AI名人智慧思维" }
      ],
      "hasPart": [
        { "@type": "BookChapter", "name": "第1章 — 图灵", "position": 1 },
        { "@type": "BookChapter", "name": "第2章 — 辛顿", "position": 2 },
        { "@type": "BookChapter", "name": "第3章 — 黄仁勋", "position": 3 },
        { "@type": "BookChapter", "name": "第4章 — 苏茨克维", "position": 4 },
        { "@type": "BookChapter", "name": "第5章 — 李飞飞", "position": 5 }
      ]
    }, null, 2) }],
    ['script', { type: 'application/ld+json', innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AI名人传",
      "url": "https://star-sea-go.cn",
      "logo": "https://star-sea-go.cn/favicon.ico",
      "description": "AI名人传 — 从图灵到GPT的史诗历程，以人物为线索讲述AI背后的真实英雄"
    }, null, 2) }],
  ],

  // Clean URLs (no .html extension)
  cleanUrls: true,

  // Sitemap (vitepress built-in)
  sitemap: {
    hostname: 'https://star-sea-go.cn',
    lastmod: 'date',
  },

  themeConfig: {
    logo: '/logo.png',

    // ==========================================
    // 顶部导航栏（5个一级分类）
    // ==========================================
    nav: [
      { text: '首页', link: '/' },
      {
        text: '书籍作品',
        link: '/books/',
        activeMatch: '/books/'
      },
      { text: '技术服务', link: '/tech/' },
      { text: '购买渠道', link: '/purchase/' },
      { text: '许可与合作', link: '/license/' }
    ],

    // ==========================================
    // 侧边栏
    // ==========================================
    sidebar: {
      // 首页
      '/': [
        {
          text: '欢迎来到AI名人传',
          items: [
            { text: '序言：AI重塑一切', link: '/#序言-ai重塑一切——走向有益的未来' },
            { text: '创作初衷', link: '/#创作初衷' },
            { text: '各版本介绍', link: '/#各版本介绍' }
          ]
        }
      ],

      // 书籍作品
      '/books/': [
        {
          text: 'Pro母版（试读）',
          items: [
            { text: '试读：第1/3/5章', link: '/books/pro/' }
          ]
        },
        {
          text: 'ProA版（艾萨克森风）',
          items: [
            { text: '版本介绍', link: '/books/pro-a/' },
            { text: '第一章', link: '/books/pro-a/chapter1' },
            { text: '第二章', link: '/books/pro-a/chapter2' },
            { text: '第三章', link: '/books/pro-a/chapter3' },
            { text: '第四章', link: '/books/pro-a/chapter4' },
            { text: '第五章', link: '/books/pro-a/chapter5' },
            { text: '第六章', link: '/books/pro-a/chapter6' },
            { text: '第七章', link: '/books/pro-a/chapter7' },
            { text: '第八章', link: '/books/pro-a/chapter8' },
            { text: '第九章', link: '/books/pro-a/chapter9' },
            { text: '第十章', link: '/books/pro-a/chapter10' },
            { text: '第十一章', link: '/books/pro-a/chapter11' },
            { text: '第十二章', link: '/books/pro-a/chapter12' },
            { text: '第十三章', link: '/books/pro-a/chapter13' },
            { text: '第十四章', link: '/books/pro-a/chapter14' }
          ]
        },
        {
          text: 'ProB版（AI名人智慧思维）',
          items: [
            { text: '引子', link: '/books/pro-b/chapter0' },
            { text: '试读内容', link: '/books/pro-b/' }
          ]
        },
        {
          text: 'Max版',
          items: [
            { text: '版本介绍', link: '/books/max/' }
          ]
        },
        {
          text: 'Mega版',
          items: [
            { text: '版本介绍', link: '/books/mega/' }
          ]
        }
      ],

      // 技术服务
      '/tech/': [
        {
          text: '衍生作品与交流',
          items: [
            { text: 'AI名人传衍生作品及服务', link: '/tech/' }
          ]
        }
      ],

      // 购买渠道
      '/purchase/': [
        {
          text: '版本对比',
          items: [
            { text: '各版本特点介绍', link: '/purchase/' }
          ]
        }
      ],

      // 许可与合作
      '/license/': [
        {
          text: '版权许可',
          items: [
            { text: '版权声明', link: '/license/' },
            { text: '隐私政策', link: '/license/privacy' },
            { text: '使用条款', link: '/license/terms' }
          ]
        }
      ]
    },

    // ==========================================
    // 页脚
    // ==========================================
    footer: {
      message: '版权所有 © 山邑咨询 2026-2030 AI名人传',
      copyright: '基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> 许可证开源'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hiwahahaha/ai-heroes-website' }
    ],

    // ==========================================
    // 首页 Hero 区域
    // ==========================================
    hero: {
      name: 'AI名人传',
      text: '从图灵到GPT的史诗历程',
      tagline: '以人物为线索，以故事为载体，讲述AI背后的真实英雄',
      actions: [
        {
          theme: 'brand',
          text: '免费试读',
          link: '/books/pro/'
        },
        {
          theme: 'alt',
          text: '版本对比',
          link: '/purchase/'
        }
      ]
    },

    // ==========================================
    // 首页 Features 区域
    // ==========================================
    features: [
      {
        title: '真实的人物故事',
        details: '不是教科书式的知识罗列，而是图灵、辛顿、李飞飞这些科学家的真实人生——包括他们的挣扎、失败和至暗时刻。',
        icon: '📖'
      },
      {
        title: '技术融入故事',
        details: '每一个技术概念都通过真实的应用场景来讲解，让读者在故事中自然理解神经网络、深度学习、Transformer。',
        icon: '🧠'
      },
      {
        title: '苏格拉底式追问',
        details: '每章结尾都有开放式问题，培养批判性思维，而不是灌输"标准答案"。',
        icon: '💡'
      }
    ]
  },

  // 不强制死链检查（有些预留页面对应内容未创建）
  ignoreDeadLinks: true
})