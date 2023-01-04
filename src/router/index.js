import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/product/HomeView.vue";
import About from "@/views/product/About.vue";
import Contact from "@/views/product/ContactUs.vue";


import App from "../views/App.vue";
import MainView from "../views/app/MainView.vue";
import AccountDetails from "../views/app/UserAccount.vue";
import Security from "../views/app/Security.vue"
import CardsVue from "../views/app/Cards.vue"
import PaymentsVue from "../views/app/Payments.vue"


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
    {
			path: "/about",
			name: "about",
			component: About,
		},
    {
			path: "/contact",
			name: "contact",
			component: Contact,
		},
		{
			path: "/app",
      redirect: "/app/overview",
			name: "app",
			component: App,
      children: [
        {
          path: "overview",
          name: "overview",
          component: MainView,
        },
        {
          path: "account",
          name: "account",
          component: AccountDetails,
        },
        {
          path: "security",
          name: "security",
          component: Security,
        },
        {
          path: "cards",
          name: "cards",
          component: CardsVue,
        },
        {
          path: "transactions",
          name: "payments",
          component: PaymentsVue,
        },
      ]
		},
	],
});

export default router;
