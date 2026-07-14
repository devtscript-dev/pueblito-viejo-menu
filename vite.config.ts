import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages sirve el sitio bajo /pueblito-viejo-menu/ (subcarpeta = nombre del repo),
// asi que solo ahi necesitamos ese base path. Netlify, Vercel, u otro host sirven desde
// la raiz del dominio, asi que usan base '/'. GITHUB_ACTIONS lo define automaticamente
// el workflow de Actions, no hay que configurar nada a mano.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_ACTIONS ? '/pueblito-viejo-menu/' : '/',
})
