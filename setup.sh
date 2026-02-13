#!/bin/bash

# Tinaye's Valentine Website Setup Script
# This script sets up all dependencies and prepares the project for deployment

echo "🎉 Welcome to Tinaye's Valentine Website Setup! 💕"
echo "=================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed! Please install Node.js from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies!"
    exit 1
fi

echo ""
echo "🚀 Setup completed successfully!"
echo ""
echo "Available commands:"
echo "  npm start       - Start development server (http://localhost:4200)"
echo "  npm run build   - Build for production"
echo "  npm run watch   - Build in watch mode"
echo ""
echo "📋 Next steps:"
echo "  1. Start the development server: npm start"
echo "  2. Open http://localhost:4200 in your browser"
echo "  3. Customize the messages in src/app/app.component.html"
echo "  4. Update memories array in src/app/app.component.ts if needed"
echo "  5. Deploy to Netlify when ready!"
echo ""
echo "💖 Happy proposal! Good luck! 💕"
