# Vanilão Roleplay — Unofficial Website

An unofficial, front-end concept inspired by the Vanilão Unturned Roleplay server. This project was created exclusively for learning and portfolio purposes.

> [!IMPORTANT]
> This is an independent, unofficial project. It is not affiliated with, endorsed by, or maintained by Vanilão Roleplay. The Vanilão Roleplay name, third-party trademarks, and referenced materials belong to their respective owners. The server does not use this website.

## About the project

This project explores the design and development of a modern website for an Unturned roleplay community. It combines a responsive landing page, a searchable documentation area, and a visual shop concept in a single-page React application.

The shop, prices, benefits, server address, Discord destinations, rules, and commands shown in the project are demonstration content. No purchases or real server services are processed by this website.

## Features

- Responsive landing page with animated sections
- Mobile navigation
- Step-by-step server onboarding area
- Copy-to-clipboard server address button
- Searchable and collapsible penal code documentation
- Documentation navigation with active-section tracking
- Shop and VIP presentation pages
- Route transition notice identifying the project as unofficial
- Smooth scrolling and viewport-based animations

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/)

## Routes

| Route | Description |
| --- | --- |
| `/` | Main landing page |
| `/docs` | Rules, penal code, commands, and VIP documentation |
| `/loja` | Demonstration shop and VIP page |

## Getting started

### Requirements

- Node.js `20.19+` or `22.12+`
- npm

### Installation

```bash
git clone https://github.com/akashlenvo/VanilaoRP.git
cd VanilaoRP
npm install
npm run dev
```

Open the local address displayed by Vite in your browser.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Project structure

```text
public/assets/       Static images used by the interface
src/components/     Shared UI and layout components
src/data/           Penal code content
src/pages/          Route-level page exports
src/styles/         Global and shared styles
src/App.jsx         Main routes and landing page
src/Docs.jsx        Documentation experience
src/Shop.jsx        Shop concept
```

## Before using this project

Replace all demonstration values before adapting the project for another community:

- `SEU-IP-AQUI:27015` with a valid server address
- Generic `https://discord.com` links with the intended community link
- Sample rules, commands, prices, benefits, and staff information
- Brand names, text, and images for which you do not have permission

If you reuse the source code, make sure you have the necessary rights or permission for every third-party brand and asset included in your version.

## Deployment

The application can be deployed to Vercel or another static hosting provider after running a successful production build. When using client-side routing, configure the host to direct unknown paths to `index.html` so routes such as `/docs` and `/loja` work when opened directly.

## Project status

Educational and portfolio project. It is not an official Vanilão Roleplay product and is not used by the server.
