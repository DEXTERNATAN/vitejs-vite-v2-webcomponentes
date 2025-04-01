import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Permite que Vue trate tags de componentes como custom elements
          isCustomElement: (tag) => tag.includes("br-"),
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      // Ignora 'stream' no build porque o pacote de webcomponents por padrão inclui isso em sua lib final
      external: ["stream"],
    },
  },
});
