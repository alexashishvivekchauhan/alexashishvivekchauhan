import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/alexashishvivekchauhan/', // ✅ THIS MATCHES YOUR REPO NAME EXACTLY
})
