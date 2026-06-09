# 欧洲旅行行程 Web 应用

这是一个纯静态的旅行行程 Web 应用，包含 `index.html`、`styles.css`、`app.js`、`manifest.json`、`sw.js` 等文件。

## 目标

把本地项目部署到一个静态站点服务上，例如 Vercel、GitHub Pages 等。

## 直接部署到 Vercel

1. 在 GitHub 上新建一个仓库，例如 `europe-trip`。
2. 把当前项目文件推送到该仓库。
3. 访问 [https://vercel.com](https://vercel.com)，登录后选择 `New Project`。
4. 连接你的 GitHub 账号，选择刚刚的仓库。
5. 部署时：
   - 框架预设直接让 Vercel 自动识别即可
   - Build Command 留空
   - Output Directory 留空
6. 部署完成后你会得到一个 `*.vercel.app` 或 `*.pages.dev` 地址。

## GitHub 推送命令

如果你本地已经安装 Git，可以在项目根目录执行：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

> 如果你已经有仓库，只需把 `origin` 替换为你的仓库地址。

## 手机打开方式

部署成功后，直接用手机浏览器打开生成的网址即可。

如果你的浏览器支持 PWA，还可以点击“添加到主屏幕”，把它当成手机应用使用。

## 备用方案：GitHub Pages

1. 把项目推送到 GitHub 仓库。
2. 进入仓库 Settings -> Pages。
3. 选择 `Branch: main` 和根目录 `/`。
4. 保存后会生成一个 `https://<用户名>.github.io/<仓库名>/` 地址。

## 注意

- `manifest.json` 已经配置为 PWA。
- `sw.js` 会让页面具备简单离线能力。
