# 🎁 TaufaBazar — eCommerce Platform for Toys & Gifts

**TaufaBazar** is a custom-built eCommerce store focused on the Pakistani market, designed for selling toys and gifts with a **Cash-on-Delivery (COD)** checkout model. Built using **Next.js**, it includes a full-featured **admin dashboard**, **real-time features**, and is optimized for mobile and future reusability.

---

## 🚀 Project Goals

- Build a clean, modern, mobile-first storefront
- Enable fast order placements via COD
- Offer a custom admin dashboard with complete control
- Use 100% free-tier tools (Neon, Vercel, Cloudinary, Resend)
- Make the entire project **reusable for launching future stores**

---

## 🛠 Tech Stack

| Layer            | Tool                        |
|------------------|-----------------------------|
| Frontend         | Next.js (App Router)        |
| Styling          | Tailwind CSS                |
| State Handling   | React Hooks, React Context  |
| Forms            | React Hook Form             |
| Database         | PostgreSQL via Neon + Drizzle ORM |
| Image Hosting    | Cloudinary                  |
| Emails           | Resend (for order confirmations) |
| Notifications    | Novu (admin/mobile alerts)  |
| Deployment       | Vercel (Free Tier)          |
| Authentication   | Next Auth |

---

## 📦 Core Features

### 🛍️ Storefront (Public Site)
- Home page with product grid
- Product listing by category
- Product detail page with image gallery and variant selector
- Cart page with quantity update & remove
- Checkout form (Name, Phone, Address, City)
- Order confirmation page with order ID

### 🛒 Admin Dashboard
- Google-authenticated login (email domain check)
- Add/Edit/Delete products
- Manage product variants (size, color, stock)
- View customer orders and shipping info
- Update order status (Pending → Shipped → Delivered)

### 🔒 Admin Approval Logic
- Two admin users allowed
- No critical action (e.g. product CRUD) can be done **without both admins' approval**
- Role-based permissions (Main Admin & Secondary Admin)

### 💬 Real-time Features (Planned or Optional)
- Real-time user-to-admin messaging (via custom WebSocket or Socket.IO)
- Admin dashboard shows incoming messages
- Push notifications (via Novu)

---

## 🗃 Database Schema (Prisma)

**Models**:
- `User` — Admins with email and role
- `Product` — Name, Description, Image, Base Price
- `Variant` — Size, Color, Variant-specific price & stock
- `Order` — Customer info, Variant ID, Quantity, Status
- `EmailTrigger` — Optional email notification log

---

## 🚀 Current Status

### ✅ Completed
- Basic Next.js setup with TypeScript
- Responsive header with navigation
- Hero section with call-to-action
- Product grid with cards
- Category showcase
- Footer with company information
- Mobile-responsive design
- Sample product data structure

### 🔄 Next Steps
1. **Database Setup** - Configure Prisma with PostgreSQL
2. **Product Management** - Create product detail pages with variants
3. **Shopping Cart** - Implement cart functionality with React Context
4. **Checkout Flow** - COD checkout form with order management
5. **Admin Dashboard** - Google OAuth and admin interface
6. **Real-time Features** - Messaging and notifications
7. **Deployment** - Vercel deployment with environment setup

---

## 🏃‍♂️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3001
```

---

## 📱 Current Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Product Showcase**: Beautiful product cards with ratings and pricing
- **Category Navigation**: Easy browsing by product categories
- **Search Functionality**: Header search bar for product discovery
- **Wishlist**: Heart icon to save favorite products
- **Mobile Menu**: Hamburger menu for mobile navigation

---

## 🎯 Target Audience

- **Primary**: Pakistani customers looking for toys and gifts
- **Secondary**: Parents, gift shoppers, and toy enthusiasts
- **Payment**: Cash-on-Delivery (COD) focused
- **Language**: English with potential for Urdu localization

---

## 🔧 Development Notes

- Built with Next.js 15 and TypeScript for type safety
- Uses Tailwind CSS for rapid, responsive development
- Component-based architecture for reusability
- SEO optimized with proper metadata
- Ready for database integration and admin features