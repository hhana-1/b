# Banana Picker Pro - Warehouse Robot Management System

A modern web application for managing automated banana picking robots in warehouse environments.

## 🍌 Features

- **Home Dashboard**: Overview of the warehouse robot system
- **Orders Management**: Track and manage customer banana orders
- **Robot Fleet Management**: Monitor robot status, uptime, and maintenance
- **Yellow & Grey Theme**: Professional color scheme (yellow for bananas, grey for machines)
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Next.js 16** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality and consistency

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build for production:
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
app/
├── page.tsx              # Home dashboard
├── orders/
│   └── page.tsx         # Orders management page
├── robots/
│   └── page.tsx         # Robot fleet management page
├── layout.tsx           # Root layout
└── globals.css          # Global styles with theme colors
```

## 🎨 Color Scheme

- **Banana Yellow**: `#ffc107` - Used for bananas, active states, highlights
- **Machine Grey**: `#6b7280` - Used for robots, primary navigation
- **Dark Grey**: `#374151` - Footer, secondary elements
- **Light Grey**: `#e5e7eb` - Card backgrounds, dividers

## 📄 Pages

### Home Page (/)
Dashboard with quick access to orders and robot status

### Orders Page (/orders)
- View all customer orders
- Track order status (pending, in-progress, completed)
- See box quantities and order details
- Summary statistics

### Robots Page (/robots)
- Monitor all warehouse robots
- Check robot status (active, idle, maintenance)
- View uptime and maintenance schedules
- Current task assignments
- Fleet statistics

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is part of the Banana Picker Pro warehouse management system.
