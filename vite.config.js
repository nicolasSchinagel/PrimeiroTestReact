import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <- plugin correto

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
