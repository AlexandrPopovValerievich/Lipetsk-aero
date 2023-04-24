import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/components/homePage.vue";
import aboutUs from "@/components/aboutUs.vue";

const routes = [
    {
      path: "/",
      name: "homePage",
      component: homePage,
    },
    {
        path: "/about",
        name: "aboutUs",
        component: aboutUs,
      },
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;