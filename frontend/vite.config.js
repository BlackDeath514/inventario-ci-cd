import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Configuración de Vitest
  test: {
    environment: 'jsdom', // Para simular un navegador
    setupFiles: './src/setupTests.js', // Mocks globales
    globals: true, // Permite usar describe/test/expect sin importar
    css: false,
    mockReset: true,
    restoreMocks: true,
    clearMocks: true
  }
});