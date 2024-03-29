<script setup>
	import { ref, onMounted, onBeforeMount, provide } from "vue";
	import axios from "axios";
	import { RouterView } from "vue-router";

	import SidebarVue from "@/components/app/Sidebar.vue";
	import QuickTransactionVue from "../components/app/QuickTransaction.vue";
	import { user } from "@/stores/user";
	import AddMoneyModal from "../components/app/AddMoneyModal.vue";
	import WithdrawModal from "../components/app/WithdrawModal.vue";
	import VerificationModal from "../components/app/VerificationModal.vue";
	import Chat from "../components/Chat.vue";

	const env = import.meta.env;
	const sessions = ref([]);
	const appUser = ref(user.getUser());
	const wallets = ref([]);
	const userWallets = ref([]);

	provide("user", appUser);
	provide("wallets", {
		userWallets,
		wallets,
		loadWallets,
		loadUserWallets,
	});

	function loadSessions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.getUser().id}/sessions`,
		};

		axios
			.request(config)
			.then((response) => {
				const session = user.getSession();
				sessions.value = response.data;

				const check = sessions.value.find(
					(e) => e.deviceId == session.deviceId
				);

				if (!check) {
					user.logout();
				}
			})
			.catch(function (error) {
				window.debug.log(error);
			});
	}

	async function loadUser() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.getUser().id}`,
		};

		await axios
			.request(config)
			.then((response) => {
				appUser.value = response.data;
				window.debug.log("User", appUser.value);
			})
			.catch(function (error) {});
	}

	async function loadWallets() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/wallets/${user.getUser().id}`,
		};

		await axios
			.request(config)
			.then((response) => {
				wallets.value = response.data;
			})
			.catch(function (error) {
				window.debug.log(error);
			});
	}

	async function loadUserWallets() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/wallets/user-wallets/${user.getUser().id}`,
		};

		await axios
			.request(config)
			.then((response) => {
				userWallets.value = response.data;
				window.debug.log(userWallets.value);
			})
			.catch(function (error) {
				window.debug.log(error);
			});
	}

	onMounted(() => {
		loadSessions();
		loadUserWallets();
		loadWallets();
	});

	async function mountChat() {
		window.$crisp = [];
		window.CRISP_WEBSITE_ID = "8ec38427-7bdf-4dec-bb90-ef3e9b628802";

		const plugin = document.createElement("script");

		plugin.setAttribute("src", "https://client.crisp.chat/l.js");
		plugin.async = true;
		document.head.appendChild(plugin);
	}

	onBeforeMount(async () => {
		mountChat();
		await loadUser();
	});
</script>

<template>
	<div>
		<main class="page-wrapper vh-100 big-custom">
			<!-- Page content -->
			<section class="container-fluid pt-2">
				<AddMoneyModal></AddMoneyModal>
				<WithdrawModal></WithdrawModal>
				<VerificationModal></VerificationModal>
				<div class="row p-md-3">
					<!-- Sidebar (User info + Account menu) -->
					<aside
						class="col-lg-3 col-md-4 bordder-end pb-5 mb-3 mb-lg-n5"
					>
						<SidebarVue />
					</aside>

					<!-- Main -->
					<div
						class="col-md-8 col-lg-5 px-4 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n5 mt-md-0"
					>
						<RouterView></RouterView>
					</div>
					<div
						id="quick-trans"
						class="col-lg-4 vh-fitted th-rounded collapse d-lg-block position-fixed bg-transact bg-lg-white mt-n2 mt-lg-0 pb-2 pt-3 pt-lg-2 position-lg-relative"
					>
						<QuickTransactionVue></QuickTransactionVue>
					</div>
				</div>
			</section>
		</main>
		<Chat />
	</div>
</template>

<style scoped>
	.bg-transact {
		background-color: rgb(245, 236, 247);
	}

	@media (min-width: 768px) {
		.bg-transact {
			background-color: rgb(255, 255, 255) !important;
		}
	}

	.th-rounded {
		border-radius: 15px !important;
	}

	.vh-fitted {
		height: 100vh !important;
		/* top: 30px; */
	}

	@media (min-width: 768px) {
		.vh-fitted {
			height: calc(100vh - 80px) !important;
			top: 30px;
		}
	}
</style>
