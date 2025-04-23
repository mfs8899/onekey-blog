# Simple Blog with Caddy and nip.io

This is a simple blog project using Caddy as the web server and nip.io for free domain service.

## Features

- Simple blog interface
- Automatic HTTPS support (via Caddy)
- Free domain service using nip.io
- Responsive design

## Quick Start

1. Install Caddy:
   ```bash
   # Windows (using Chocolatey)
   choco install caddy

   # Linux
   sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
   curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
   curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
   sudo apt update
   sudo apt install caddy
   ```

2. Clone this project:
   ```bash
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

3. Start the service:
   ```bash
   caddy run
   ```

4. Access the website:
   Use your IP address with .nip.io as the domain, for example: `192.168.1.100.nip.io`

## Project Structure

```
.
├── public/          # Static files directory
│   ├── index.html  # Homepage
│   ├── css/        # Style files
│   └── js/         # JavaScript files
├── Caddyfile       # Caddy configuration file
└── README.md       # Project documentation
```

## Configuration

Caddy will automatically handle SSL certificate application and renewal. You just need to ensure:
1. The server has a public IP
2. Ports 80 and 443 are accessible
3. Using the correct nip.io domain format

## License

MIT License 
