import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Portofolio from "./components/Portofolio.vue";
import Home from "./components/Home.vue";
import Price from "./components/Price.vue";
import DoDont from "./components/DoDont.vue";
// createApp(App).mount("#app");
const routes = [
    {
        path: "/",
        component: App, // Ini adalah layout utama
        children: [
            {
                path: "",
                component: Home,
            },
            {
                path: "price",
                component: Price,
            },
            {
                path: "dodont",
                component: DoDont,
            },
        ],
    },
    {
        path: "/portofolio",
        components: {
            default: Portofolio, // Di sini Portofolio di-render di router-view yang berbeda
        },
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
createApp(App).use(router).mount("#app");
