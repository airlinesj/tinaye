# 💕 Tinaye's Valentine Proposal Website

A beautiful, modern Angular-based Valentine's Day proposal website with memories gallery and romantic UI.

## ✨ Features

- **Stunning Romantic Design**: Modern thick UI with beautiful pink and red color palette
- **Cute Proposal Section**: Heartfelt message with smooth animations
- **Interactive Memories Gallery**: Showcase images and videos with thumbnail navigation
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Animated Elements**: Floating hearts, pulse animations, and smooth transitions
- **Netlify Ready**: Pre-configured for easy deployment

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Move your images and videos to the assets folder:**
   - Copy all your images (img1.jpg, img2.jpg, img3.jpg, img4.jpg)
   - Copy your videos (video1.mp4, video2.mp4)
   - Place them in the `src/assets/` directory

   ```bash
   # On Linux/Mac
   cp /path/to/images/img*.jpg src/assets/
   cp /path/to/videos/video*.mp4 src/assets/
   ```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/` to view the website in your browser.

## 📁 Project Structure

```
tinaye-proposal/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── assets/          # Place your images and videos here
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── dist/                # Build output (auto-generated)
├── package.json
├── angular.json
├── tsconfig.json
└── netlify.toml         # Netlify configuration
```

## 🎨 Customization

### Edit the Messages

Edit the cute text and proposal message in `src/app/app.component.html`:

```html
<p class="cute-text">
  With every moment we share... (customize your message here)
</p>
```

### Change Colors

Edit the CSS variables in `src/styles.css`:

```css
:root {
  --primary-pink: #ff1493;
  --secondary-pink: #ff69b4;
  --light-pink: #ffc0cb;
  --dark-red: #c41e3a;
  --soft-purple: #d8a5d8;
  /* ... more colors ... */
}
```

### Update Memories

In `src/app/app.component.ts`, update the `memories` array with your image and video files:

```typescript
memories = [
  {
    type: 'image',
    src: 'assets/img1.jpg',
    caption: '💕 Your custom caption'
  },
  // Add more memories...
];
```

## 📦 Building for Production

```bash
npm run build
```

The production build will be created in the `dist/tinaye-proposal` folder.

## 🌐 Deploying to Netlify

### Option 1: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Connect and deploy
netlify deploy --prod
```

### Option 2: Connect GitHub and Auto-Deploy

1. Push your project to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Netlify will automatically deploy your site

### Option 3: Drag and Drop

1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist/tinaye-proposal` folder to deploy

## 💡 Tips

- The website auto-plays the proposal section on load
- Click "Next" and "Previous" buttons or click thumbnails to navigate memories
- Use the "YES!" button for a special moment (you can add a function to handle this)
- All animations are smooth and optimized for performance

## 📝 Adding Your Own Custom Message

Edit `src/app/app.component.html` and update these sections:

1. **Main heading**: Change "My Dearest Love" to something personal
2. **Proposal paragraph**: Update the cute text with your own words
3. **Special message**: Customize the italic message
4. **Question**: Modify the Valentine's question
5. **Footer**: Update the credits

## 🛠️ Troubleshooting

### Images not showing?
- Ensure images are in `src/assets/` folder
- Check that file names match exactly (case-sensitive)
- Verify the `src` paths in `app.component.ts`

### Netlify deployment issues?
- Run `npm run build` locally to check for errors
- Ensure `netlify.toml` is in the project root
- Check that Node.js version is compatible

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 💖 Made with Love

Created to help express love in the most beautiful way possible. Perfect for Valentine's Day proposals!

---

**Good luck with your proposal! 💕🎉**
