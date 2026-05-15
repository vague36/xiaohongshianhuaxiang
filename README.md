# 我的食养画像｜GitHub Pages 静态网站

这是一套适合 GitHub Pages 部署的静态网站，用于“我的食养画像”互动程序的图卡保存与二维码跳转。

## 目录结构

```text
my-shiyang-portrait-site/
├── index.html                  # 首页，支持六类人群筛选与搜索
├── cards/                      # 120 个独立图卡页面
├── assets/
│   ├── style.css
│   ├── script.js
│   └── images/                 # 120 张图片，按固定文件名替换
├── data/cards.json             # 图卡数据
├── qr_links_template.csv       # 二维码链接清单
└── tools/generate_qr.py        # 批量生成二维码脚本
```

## 使用方法

### 1. 替换正式图片

把你的 120 张正式图片按 `assets/images/` 中现有文件名替换。

例如：

```text
assets/images/family-01.png
assets/images/family-02.png
...
assets/images/children-20.png
```

不要改文件名，这样页面和二维码链接就不会失效。

### 2. 上传到 GitHub

新建一个 GitHub 仓库，例如：

```text
my-shiyang-portrait-site
```

把本文件夹里的全部内容上传到仓库根目录。

### 3. 开启 GitHub Pages

进入仓库：

```text
Settings → Pages → Build and deployment
```

选择：

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

保存后，GitHub 会生成一个网址，通常类似：

```text
https://你的用户名.github.io/my-shiyang-portrait-site/
```

### 4. 生成二维码

二维码建议指向 `cards/*.html` 页面，例如：

```text
https://你的用户名.github.io/my-shiyang-portrait-site/cards/family-01.html
```

如果你希望扫码后只打开图片原图，也可以使用图片直链：

```text
https://你的用户名.github.io/my-shiyang-portrait-site/assets/images/family-01.png
```

### 5. 批量二维码

先安装依赖：

```bash
pip install qrcode[pil]
```

打开：

```text
tools/generate_qr.py
```

把 `BASE_URL` 改成你的 GitHub Pages 地址，然后运行：

```bash
python tools/generate_qr.py
```

二维码会输出到：

```text
qrcodes/
```

## 建议

正式展馆中更推荐二维码指向 `cards/*.html` 页面，因为页面里有标题、分类、说明和“打开原图”按钮，观众体验比直接打开图片更好。
