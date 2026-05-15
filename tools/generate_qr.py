#!/usr/bin/env python3
"""
批量生成二维码：
1. 安装依赖：pip install qrcode[pil]
2. 修改 BASE_URL 为你的 GitHub Pages 地址，例如：
   https://dingbo199436.github.io/my-shiyang-portrait-site
3. 运行：python tools/generate_qr.py
"""
from pathlib import Path
import csv
import qrcode

BASE_URL = "https://你的用户名.github.io/你的仓库名"
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "qrcodes"
OUT.mkdir(exist_ok=True)

with (ROOT / "qr_links_template.csv").open("r", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        url = f"{BASE_URL.rstrip('/')}/{row['页面相对地址']}"
        img = qrcode.make(url)
        safe_name = f"{row['编号']}_{row['人群']}_{row['总分档']}_{row['短板维度']}_{row['画像名称']}.png"
        for ch in '/\\:*?"<>|':
            safe_name = safe_name.replace(ch, "-")
        img.save(OUT / safe_name)
print(f"已生成二维码到：{OUT}")
