<script setup>
	import { ref, onMounted } from "vue";
	import axios from "axios";
	import { RouterView } from "vue-router";

	import SidebarVue from "@/components/app/Sidebar.vue";
	import QuickTransactionVue from "../components/app/QuickTransaction.vue";
	import { user } from "@/stores/user";

	const env = import.meta.env;
	const sessions = ref([]);

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
				console.log(error);
			});
	}

	onMounted(() => {
		loadSessions();
	});
</script>

<template>
	<main class="page-wrapper vh-100 big-custom">
		<!-- <Navbar></Navbar> -->
		<!-- Page content -->
		<section class="container-fluid pt-2">
			<div class="row p-md-3">
				<!-- Sidebar (User info + Account menu) -->
				<aside class="col-lg-3 col-md-4 bordder-end pb-5 mb-3 mb-lg-n5">
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
