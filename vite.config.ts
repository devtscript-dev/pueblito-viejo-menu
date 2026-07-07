import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base debe coincidir con el nombre del repo de GitHub para que Pages sirva los assets bien
// ejemplo: si el repo es "pueblito-viejo-menu" -> base: '/pueblito-viejo-menu/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/pueblito-viejo-menu/',
})
