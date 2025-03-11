# Simpledocs Boilerplate
<a href="https://opensource.org/license/mit"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" height="24" /></a>
<a href="https://pnpm.io/"><img src="https://img.shields.io/badge/Package-PNPM-orange?style=flat-square" height="24" /></a>
<img src="https://img.shields.io/badge/Module-ECMAScript-yellow?style=flat-square" height="24" />

Boilerplate for Simpledocs, a dead simple documentation site

## Features
- Create documentation pages based on category
- Access the search box with a hotkey to search for documentation
- Responsive design for use on both desktop and mobile devices
- Predefined elements and embeddables, preserving consistency

## Stack Used
- [SvelteKit](https://svelte.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Fuse.js](https://www.fusejs.io/)

## Local Preview
1. Clone this repository to your local computer
2. Copy the default environment file and ensure all variables are correctly filled
   ```sh
   cp .env.example .env
   ```
3. Install all required dependencies
   ```sh
   pnpm i
   ```
4. Run the application in development mode
   ```sh
   pnpm run dev
   ```

## Deployment
1. Adjust the `VITE_BASE_PATH` inside the environment file
2. Run the deployment script
   ```sh
   pnpm run deploy
   ```
