import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      'api':{
        target: 'https://script.google.com/macros/s/AKfycbxmq9a4OVdqHt0cuukBsLBfzVWHcXQ7tofuDgsCT1YhcvIgf7VYcYD_9GfKqSIhlaVe/exec',
        changeOrigin:true,
      }
    }
  }
})
