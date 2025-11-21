import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path для GitHub Pages
  // Измените на название вашего репозитория
  base: process.env.NODE_ENV === 'production' ? '/tools/' : '/',
})
