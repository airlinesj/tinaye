# 🚀 Deployment Guide

## How to Deploy Your Valentine Website to Netlify

This guide will help you deploy your beautiful Valentine's website to Netlify so you can share it with your girlfriend!

---

## 📋 Prerequisites

- ✅ Your project is ready and working locally
- ✅ You have Node.js and npm installed
- ✅ You have a GitHub account (recommended) or Netlify account

---

## 🌟 Option 1: Deploy Using GitHub (Recommended)

This method gives you automatic deployments every time you push code to GitHub.

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it `tinaye-proposal`
4. Choose "Public" (so you can share the link easily)
5. Click **Create repository**

### Step 2: Push Your Code to GitHub

```bash
# Navigate to your project folder
cd /home/julius/Desktop/tinaye

# Initialize git and push
git init
git add .
git commit -m "Initial commit: Valentine proposal website ❤️"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tinaye-proposal.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Connect to Netlify

1. Go to [Netlify.com](https://netlify.com) and sign in (create account if needed)
2. Click **Add new site** → **Import an existing project**
3. Click **GitHub** to connect
4. Find and select `tinaye-proposal` repository
5. Click **Deploy site**

**That's it!** Your site will be live in a few minutes with a URL like `https://tinaye-proposal.netlify.app`

---

## 🎯 Option 2: Deploy Using Netlify CLI

Perfect if you want quick deployment without GitHub.

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Build Your Project

```bash
cd /home/julius/Desktop/tinaye
npm run build
```

### Step 3: Deploy

```bash
netlify deploy --prod --dir=dist/tinaye-proposal
```

Follow the prompts to:
- Log in to Netlify
- Create a new site
- Connect to your Netlify account

Your site will go live immediately!

---

## ⚡ Option 3: Drag and Drop (Easiest)

No code knowledge needed!

### Step 1: Build Your Project

```bash
cd /home/julius/Desktop/tinaye
npm run build
```

### Step 2: Deploy

1. Go to [Netlify.com](https://netlify.com) (create account if needed)
2. Drag and drop the **dist/tinaye-proposal** folder onto the Netlify page
3. Your site is live!

---

## ✏️ Customizing Before Deployment

Before deploying, you might want to customize these things:

### Change the Site Title

Edit `src/index.html`:
```html
<title>Tinaye & His Love - A Valentine's Proposal</title>
```

Change to something like:
```html
<title>Tinaye & [Girlfriend's Name] - A Valentine's Proposal</title>
```

### Customize the Message

Edit `src/app/app.component.html` and update:
- The "My Dearest Love" heading
- The cute paragraph text
- The special message
- The Valentine's question

### Customize Colors

Edit `src/styles.css` and change the CSS variables:
```css
:root {
  --primary-pink: #ff1493;     /* Main pink - change this */
  --dark-red: #c41e3a;         /* Dark red - change this */
  --soft-purple: #d8a5d8;      /* Purple - change this */
  /* ... more colors ... */
}
```

### Test Locally Before Deploying

```bash
npm start
```

Visit `http://localhost:4200` to see your changes, then deploy when everything looks perfect!

---

## 🎁 After Deployment

### Share Your Site

Once deployed, you'll get a live URL like:
```
https://tinaye-proposal.netlify.app
```

You can:
- Share the link via WhatsApp, email, or SMS
- Send it on Valentine's Day for that special moment
- Display it on your phone or laptop for the proposal
- Post it on social media

### Make Updates

If you want to make changes after deploying:

1. **If using GitHub:**
   - Make changes locally
   - Run `git add .` → `git commit -m "Update message"` → `git push`
   - Netlify automatically deploys!

2. **If using CLI:**
   - Make changes
   - Run `npm run build`
   - Run `netlify deploy --prod --dir=dist/tinaye-proposal`

---

## 🆘 Troubleshooting

### Build fails locally

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Images/Videos not showing

1. Check they're in `src/assets/` folder
2. Verify file names in `app.component.ts`
3. Make sure file names match exactly (case-sensitive!)

### Netlify deployment shows blank page

1. Make sure `netlify.toml` is in your root folder
2. Check that Node.js version is compatible (18+)
3. Check Netlify build logs for error messages

---

## 📞 Additional Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Angular Documentation](https://angular.io/docs)
- [GitHub Getting Started](https://docs.github.com/en/get-started)

---

## 💖 Final Tips

✨ **Make it Personal**: Customize the messages to reflect your feelings
🎨 **Test Everything**: Check all images and videos load correctly
📱 **Test on Mobile**: Make sure it looks good on phones too
🎉 **Practice**: Try showing your friends first to get feedback
💕 **Good luck with your proposal!**

---

**Remember: The effort you put into this website shows how much you care. Your girlfriend will love it!** 💕🎉
