import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './https://github.com/simo994q/react-to-do-app',
  plugins: [react()],
})
