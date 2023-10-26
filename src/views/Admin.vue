<script setup>
	import { ref, onMounted, provide } from "vue";
	import axios from "axios";
	import { RouterView } from "vue-router";

	import DashBar from "../components/admin/DashBar.vue";
	import { user } from "@/stores/user";

	const env = import.meta.env;
	const sessions = ref([]);

	const wallets = ref([]);

	provide("wallets", {
		wallets,
		loadWallets,
	});

	function loadSessions() {
		// let config = {
		// 	method: "GET",
		// 	url: `${env.VITE_BE_API}/users/${user.getUser().id}/sessions`,
		// };
		// axios
		// 	.request(config)
		// 	.then((response) => {
		// 		const session = user.getSession();
		// 		sessions.value = response.data;
		// 		const check = sessions.value.find(
		// 			(e) => e.deviceId == session.deviceId
		// 		);
		// 		if (!check) {
		// 			user.logout();
		// 		}
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
	}

	async function loadWallets() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/wallets`,
		};

		await axios
			.request(config)
			.then((response) => {
				wallets.value = response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onMounted(() => {
		loadSessions();
		loadWallets();
	});
</script>

<template>
	<main class="page-wrapper vh-100 big-custom">
		<!-- Page content -->
		<section class="container-fluid pt-2">
			<div class="row p-md-3">
				<!-- Sidebar (User info + Account menu) -->
				<aside class="col-md-4 col-lg-3 bordder-end pb-5 mb-3 mb-lg-n5">
					<DashBar />
				</aside>

				<!-- Main -->
				<div
					class="col-md-8 col-lg-9 px-4 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n5 mt-md-0"
				>
					<RouterView></RouterView>
				</div>
			</div>
		</section>
	</main>
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
