import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/course': {
        target: 'https://desolate-stream-68947.herokuapp.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
