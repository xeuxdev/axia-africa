import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import "./style.css"
import App from "./App.vue"
import HomePage from "./pages/Home/HomePage.vue"
import SchoolOfProduct from "./pages/Schools/SchoolOfProduct.vue"
import DataPage from "./pages/Schools/DataPage.vue"
import SchoolOfEngineering from "./pages/Schools/SchoolOfEngineering.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomePage },
    { path: "/schools/product", name: "Product", component: SchoolOfProduct },
    { path: "/schools/data", name: "Data", component: DataPage },
    {
      path: "/schools/engineering",
      name: "Engineering",
      component: SchoolOfEngineering,
    },
  ],
})

createApp(App).use(router).mount("#app")
