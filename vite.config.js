import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Use '/Athena-26/' base path for GitHub Pages, '/' for Vercel and local dev
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/Athena-26/' : '/',
  plugins: [react(), tailwindcss()],
})
