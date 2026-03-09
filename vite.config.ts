import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  // VITE_BASE_PATH lets you host the app under a sub-path (e.g. GitHub Pages).
  // Set it to the repo name in your CI environment, e.g. "/new_loop_builder/"
  const base = env.VITE_BASE_PATH || '/'

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
    },
  }
})