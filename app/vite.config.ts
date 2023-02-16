import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // tout ce qui est derrière le /api ça part sur le back-end
      '/api': {
        target: 'http://localhost:3000',
      },
    }
  }
})
