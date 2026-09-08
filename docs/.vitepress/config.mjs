import { defineConfig } from 'vitepress'

// ===== 品牌与定位常量（SEO/GEO 全局复用，单点维护）=====
const BRAND = 'AI名人传'
const SITE_URL = 'https://star-sea-go.cn'
const SITE_DESC = 'AI名人传：给孩子讲AI的人工智能启蒙书。通过100位AI名人的真实故事（从图灵到GPT），激发学生与孩子的学习兴趣，轻松开启AI启蒙，快速入门人工智能。'
const BRAND_KEYWORDS = 'AI名人传,给孩子讲AI,AI启蒙,100位AI名人,AI名人故事,人工智能启蒙,快速学AI,AI名人传记,名人故事学AI,深度学习,图灵,AI教育'

export default defineConfig({
  title: BRAND,
  titleTemplate: `:title - ${BRAND}`,
  description: SITE_DESC,

  head: [
    // Cloudflare Web Analytics（仅站长可见，Dashboard 内查看）
    ['script', { defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "241686ff3ee54a40b454e9bd154b38ef"}' }],
    // 轮播和模态窗全局脚本（外部文件确保挂载到window）
    ['script', { src: '/carousel.js' }],
    // Favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Theme color
    ['meta', { name: 'theme-color', content: '#f5f0e8' }],
    // SEO - 安全头（通过meta实现，GitHub Pages不支持HTTP头）
    ['meta', { 'http-equiv': 'X-Frame-Options', content: 'DENY' }],
    ['meta', { name: 'keywords', content: BRAND_KEYWORDS }],
    ['meta', { name: 'author', content: 'Oliver' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: `${BRAND}：给孩子讲AI · 100位AI名人的故事` }],
    ['meta', { property: 'og:description', content: SITE_DESC }],
    ['meta', { property: 'og:site_name', content: BRAND }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/og-image.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: `${BRAND}：给孩子讲AI的100位AI名人故事` }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: `${BRAND}：给孩子讲AI · 100位AI名人的故事` }],
    ['meta', { name: 'twitter:description', content: SITE_DESC }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/og-image.png` }],
    // Sitemap hint
    ['link', { rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml' }],
    // 说明：canonical / og:url / JSON-LD 结构化数据在下方 transformHead 中按页面动态生成（每页独立）
  ],

  // ==========================================
  // 动态 per-page SEO/GEO：canonical、og:url、JSON-LD
  // 坑：VitePress head 数组是全局静态；canonical/og:url 必须每页独立。
  // TransformContext 字段是 pageData（含 url/title/description），不是 page.url。
  // JSON-LD 必须用三元素格式 [tag, attrs, innerHTML] 才会写入 <script> 内容，
  // 放 attrs.innerHTML 会被渲染成属性，结构化数据完全失效。
  // ==========================================
  transformHead({ pageData }) {
    // 页面真实 URL：优先 pageData.url，缺失时由 relativePath 推导
    let pageUrl = (pageData && pageData.url) || ''
    if (!pageUrl && pageData && pageData.relativePath) {
      const rp = pageData.relativePath.replace(/\.md$/, '')
      pageUrl = rp === 'index' ? '/' : `/${rp}`
    }
    if (!pageUrl.startsWith('/')) pageUrl = '/' + pageUrl
    // 规范化：目录 index 页 canonical 应为 /purchase/ 而非 /purchase/index
    if (pageUrl !== '/' && pageUrl.endsWith('/index')) pageUrl = pageUrl.slice(0, -5)
    if (pageUrl.endsWith('.html')) pageUrl = pageUrl.slice(0, -5)
    const url = SITE_URL + (pageUrl === '/' ? '/' : pageUrl)
    const title = (pageData && pageData.title) || BRAND
    const desc = (pageData && pageData.description) || SITE_DESC
    const topicTags = ['给孩子讲AI', 'AI启蒙', '100位AI名人', 'AI名人故事', '人工智能']
      .map((n) => ({ '@type': 'Thing', name: n }))

    const ld = pageUrl === '/'
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              url: `${SITE_URL}/`,
              name: BRAND,
              description: SITE_DESC,
              inLanguage: 'zh-CN',
              publisher: { '@id': `${SITE_URL}/#organization` }
            },
            {
              '@type': 'Organization',
              '@id': `${SITE_URL}/#organization`,
              name: BRAND,
              alternateName: 'AI Heroes Biography',
              url: `${SITE_URL}/`,
              logo: `${SITE_URL}/favicon.ico`,
              description: SITE_DESC
            },
            {
              '@type': 'Book',
              name: BRAND,
              alternateName: 'AI Heroes Biography',
              url: `${SITE_URL}/`,
              inLanguage: 'zh-CN',
              description: SITE_DESC,
              genre: ['人物传记', '人工智能', 'AI启蒙教育'],
              author: { '@type': 'Person', name: 'Oliver', url: SITE_URL },
              about: topicTags
            }
          ]
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: title,
          description: desc,
          inLanguage: 'zh-CN',
          about: topicTags,
          isPartOf: { '@id': `${SITE_URL}/#website`, name: BRAND, url: `${SITE_URL}/` }
        }

    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(ld)]
    ]
  },

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
          text: 'Pro版',
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
            { text: '版本介绍', link: '/books/pro-b/' }
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
          text: '技术服务',
          items: [
            { text: '技术交流与服务', link: '/tech/' }
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