<!-- HEADER BANNER -->
<p align="center">
  <img src="https://raw.githubusercontent.com/ganeshsai4408/scrble-front-end/main/assets/banner.png" alt="Scrble E-Commerce Banner" width="100%" />
</p>

<h1 align="center">🛍️ SCRBLE – Modern E-Commerce Frontend</h1>
<p align="center">
  <strong>A sleek, responsive, and production-grade e-commerce UI built with React, Tailwind & Razorpay integration support.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/github/license/ganeshsai4408/scrble-front-end?style=for-the-badge&color=blue" />
  <img src="https://img.shields.io/github/issues/ganeshsai4408/scrble-front-end?style=for-the-badge&logo=github&color=yellow" />
  <img src="https://img.shields.io/github/stars/ganeshsai4408/scrble-front-end?style=for-the-badge&logo=github-sponsors&color=ff69b4" />
</p>

---

## 🚀 What Is This?

SCRBLE is a **modern, fully responsive e-commerce frontend** designed to match real-world marketplace standards.  
It supports:

- Clean product browsing  
- Dynamic cart management  
- Multi-step checkout flow  
- Responsive UI  
- Razorpay-ready frontend  
- Admin-side views (if backend connected)

Basically, the same vibe as Amazon/Flipkart but simplified, aesthetic, and fully yours.

---

## 🧰 Tech Stack (Frontend)

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,tailwind,js,vite" />
</p>

- ⚛️ **React.js** – component-driven UI  
- 🎨 **TailwindCSS** – utility-first styling  
- 🔄 **Axios** – API calls  
- 🚀 **React Router** – smooth navigation  
- 🧩 **Context API / Redux (if used)** – global state  
- 💳 **Razorpay Checkout (integrated via backend)**  

---

## ✨ Core Features

| Feature | Description | Status |
|--------|-------------|--------|
| 🛒 Product Listing | Browse items with responsive grid | ✔️ Done |
| 📄 Product Details | View images, description, stock | ✔️ Done |
| 🛍️ Add to Cart | Add / update / remove items | ✔️ Done |
| 🔄 Real-Time Cart Sync | Context-powered cart updates | ✔️ Done |
| 🧾 Multi-Step Checkout | Cart → Shipping → Summary | ✔️ Done |
| 💳 Razorpay UI Support | Payment-ready frontend | ✔️ Ready |
| 👤 User Auth Pages | Login / Register UI | ✔️ Done |
| 🗂 Admin Skeleton UI | Product management frontend | ✔️ Done |
| 📱 Fully Responsive | Mobile-first, tablet, desktop | ✔️ Done |

---

## 📁 Project Structure

```bash
scrble-front-end/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page views (Home, Product, Cart, Checkout)
│   ├── context/          # Cart / Auth state management
│   ├── hooks/            # Custom hooks
│   ├── assets/           # Images & UI graphics
│   ├── utils/            # Helper functions
│   ├── App.jsx           # Main entry file
│   └── main.jsx          # App bootstrap
├── public/               # Static files
├── package.json          # Dependencies & scripts
└── README.md             # You're reading it now :)
