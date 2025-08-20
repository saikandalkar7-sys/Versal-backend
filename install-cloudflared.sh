#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "📥 Downloading latest cloudflared for ARM64..."
wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64 -O $PREFIX/bin/cloudflared

echo "⚙️ Making it executable..."
chmod +x $PREFIX/bin/cloudflared

echo "✅ Installed successfully!"
cloudflared --version
