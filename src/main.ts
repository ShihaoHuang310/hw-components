import { createApp } from "vue"
import App from "./App.vue"
import "./style.css"
import router from "./router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
//引入所有图标
import * as Icons from "@element-plus/icons-vue"
import { camelize } from "./utils"

const app = createApp(App)

for (const [key, component] of Object.entries(Icons)) {
  app.component(`hw-icon${camelize(key)}`, component)
}

app.use(router).use(ElementPlus)

app.mount("#app")
