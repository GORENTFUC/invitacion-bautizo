import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/invitacion-bautizo/',
  plugins: [react()],
  server: {
    host: true, // Permite el acceso desde la red local
  },
})