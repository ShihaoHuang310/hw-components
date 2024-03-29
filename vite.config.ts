import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      "@/": resolve(__dirname, "src"),
      // @component 替代为 src/component
      "@/components": resolve(__dirname, "src/components"),
      "@/views": resolve(__dirname, "src/views")
    }
  }
})
