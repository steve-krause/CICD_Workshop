/// <reference types='vite/client' />
/// <reference types='vitest' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-app',
  server: {
    host: true,
    port: 8081,
    allowedHosts: ["d2otfhqz8weojq.cloudfront.net", "test-a-testf-gh5fmwu2he4r-1389969898.us-east-2.elb.amazonaws.com"]
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },  
})
