import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import "./style.css"
import App from "./App.vue"

import HomePage from "./pages/Home/HomePage.vue"
import SchoolOfData from "./pages/Schools/SchoolOfData.vue"
import SchoolOfEngineering from "./pages/Schools/SchoolOfEngineering.vue"
import ProductSchool from "./pages/Schools/ProductSchool.vue"
// import SchoolOfProduct from "./pages/Schools/SchoolOfProduct.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomePage },
    { path: "/schools/product", name: "Product", component: ProductSchool },
    { path: "/schools/data", name: "Data", component: SchoolOfData },
    {
      path: "/schools/engineering",
      name: "Engineering",
      component: SchoolOfEngineering,
    },
  ],
})

createApp(App).use(router).mount("#app")
