# AI名人传

《AI名人传》数字产品官方网站，基于 VitePress 构建，托管于 GitHub Pages。

## 技术架构

```
域名（腾讯云 star-sea-go.cn）
    ↓
Cloudflare（DNS + CDN 加速）
    ↓
GitHub Pages（网站托管，hiwahahaha/ai-heroes-website）
    ↓
GitHub Actions（自动构建 + 部署）
```

## 部署说明

每次 push 到 master 分支，GitHub Actions 会自动：
1. 安装依赖（npm ci）
2. 构建网站（npm run docs:build）
3. 部署到 GitHub Pages

无需手动构建或上传。

## 本地开发

```bash
cd website
npm install
npm run docs:dev      # 开发模式（热重载）
npm run docs:build    # 构建生产版本
npm run docs:preview  # 预览构建结果
```

## 目录结构（方式二：GitHub Actions 自动构建）

```
website/
├── docs/
│   ├── .vitepress/
│   │   └── config.mjs      # VitePress 配置
│   ├── index.md             # 首页
│   ├── books/               # 书籍章节
│   │   ├── pro/            # Pro版试读
│   │   ├── pro-a/          # ProA版
│   │   ├── pro-b/          # ProB版
│   │   ├── max/            # Max版
│   │   └── mega/           # Mega版
│   ├── tech/               # 技术服务
│   ├── purchase/           # 购买渠道
│   └── license/            # 许可协议
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署
├── package.json
├── .gitignore
└── CNAME                   # 自定义域名
```

## 联系方式

- 邮箱：3472770851@qq.com
- 网站：https://star-sea-go.cn
