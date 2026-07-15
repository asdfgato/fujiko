import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base path so the build works when deployed to a GitHub Pages
// project site (https://<user>.github.io/<repo>/) without any extra
// configuration. Combined with HashRouter, this means no server-side
// rewrite rules are needed for client-side routing to work.
export default defineConfig({
  plugins: [react()],
  base: './',
})
