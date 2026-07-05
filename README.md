# Ring

极简个人博客 — 用 [Astro](https://astro.build) v7 构建，纯静态内容驱动。

## 开发

```bash
npm install
npm run dev     # 本地开发 http://localhost:4321
npm run build   # 构建到 dist/
npm run preview # 预览构建产物
```

## 写文章

在 `src/content/posts/` 下创建 `.md` 或 `.mdx` 文件，Frontmatter 格式：

```yaml
---
title: '文章标题'
date: 2026-07-05
category: '分类'
tags: ['标签1', '标签2']
summary: '摘要文字'
draft: false  # true 时不会发布
---
```

## 部署

`npm run build` → `dist/` 部署到 Vercel（或其他静态托管）。
