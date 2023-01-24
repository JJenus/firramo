import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/product/HomeView.vue";
import About from "@/views/product/About.vue";
import Contact from "@/views/product/ContactUs.vue";
import FAQs from "@/views/product/FAQs.vue";
import Product from "@/views/Product.vue";

import App from "../views/App.vue";
import MainView from "../views/app/MainView.vue";
import AccountDetails from "../views/app/UserAccount.vue";
import Security from "../views/app/Security.vue";
import CardsVue from "../views/app/Cards.vue";
import PaymentsVue from "../views/app/Payments.vue";

import Admin from "../views/Admin.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import Users from "../views/admin/Users.vue";
import Testimonials from "../views/admin/Testimonials.vue";
import Settings from "../views/admin/Settings.vue";
import Login from "../views/admin/Login.vue";

import { user } from "@/stores/user";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/app",
			redirect: "/app/overview",
			name: "app",
			component: App,
			beforeEnter: (to, from, next) => {
				console.log(user.getUser());
				if (!user.getUser()) {
					next({ name: "home" });
				} else {
					next();
				}
			},
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
			],
		},

		{
			path: "/admin",
			redirect: "/admin/dashboard",
			name: "admin",
			component: Admin,
			beforeEnter: (to, from, next) => {
				console.log(user.getUser());
				if (!user.getUser()) {
					next({ name: "login" });
				} else {
					
					const isAdmin = user
						.getUser()
						.roles.find((e) => e.name === "ADMIN");
						
					if (isAdmin) {
						next();
					} else {
						next({ name: "login" });
					}
				}
			},
			children: [
				{
					path: "dashboard",
					name: "dashboard",
					component: Dashboard,
				},
				{
					path: "users",
					name: "users",
					component: Users,
				},
				{
					path: "security",
					name: "adminSecurity",
					component: Security,
				},
				{
					path: "testimonials",
					name: "testimonials",
					component: Testimonials,
				},
				{
					path: "settings",
					name: "settings",
					component: Settings,
				},
			],
		},

		{
			path: "/",
			component: Product,
			redirect: "/home",
			children: [
				{
					path: "home",
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
					path: "/faqs",
					name: "faqs",
					component: FAQs,
				},
			],
		},
		{
			path: "/admin/login",
			name: "login",
			component: Login,
		},
	],
});

export default router;
