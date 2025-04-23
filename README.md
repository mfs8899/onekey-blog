# Simple Blog with Caddy and nip.io

这是一个使用 Caddy 作为 web 服务器，并利用 nip.io 提供免费域名的简单博客项目。

## 功能特点

- 简单的博客界面
- 自动 HTTPS 支持（通过 Caddy）
- 使用 nip.io 提供的免费域名
- 响应式设计

## 快速开始

1. 安装 Caddy：
   ```bash
   # Windows (使用 Chocolatey)
   choco install caddy

   # Linux
   sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
   curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
   curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
   sudo apt update
   sudo apt install caddy
   ```

2. 克隆本项目：
   ```bash
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

3. 启动服务：
   ```bash
   caddy run
   ```

4. 访问网站：
   使用你的 IP 地址加上 .nip.io 作为域名，例如：`192.168.1.100.nip.io`

## 项目结构

```
.
├── public/          # 静态文件目录
│   ├── index.html  # 主页
│   ├── css/        # 样式文件
│   └── js/         # JavaScript 文件
├── Caddyfile       # Caddy 配置文件
└── README.md       # 项目说明文档
```

## 配置说明

Caddy 会自动处理 SSL 证书的申请和续期。你只需要确保：
1. 服务器有公网 IP
2. 80 和 443 端口可以访问
3. 使用正确的 nip.io 域名格式

## 许可证

MIT License 
