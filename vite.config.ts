import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// El sitio se sirve desde la raiz del dominio propio (pueblito-viejo-menu.com),
// no desde /pueblito-viejo-menu/ (esa ruta solo aplicaba a la URL por defecto
// usuario.github.io/repo/ antes de tener dominio propio).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
