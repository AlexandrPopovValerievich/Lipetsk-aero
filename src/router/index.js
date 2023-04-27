import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/components/homePage.vue";
import aboutUs from "@/components/aboutUs.vue";
import ourClients from "@/components/ourClients.vue";
import forBusiness from "@/components/forBusiness.vue";
import ourVacancies from "@/components/ourVacancies.vue";

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
      {
        path: "/clients",
        name: "ourClients",
        component: ourClients,
      },
      {
        path: "/forBusiness",
        name: "forBusiness",
        component: forBusiness,
      },
      {
        path: "/vacancies",
        name: "ourVacancies",
        component: ourVacancies,
      },
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;