<script setup>
	import SidebarVue from "@/components/app/Sidebar.vue";
	import Navbar from "@/components/app/Navbar.vue";
	import { RouterLink, RouterView } from "vue-router";
	import QuickTransactionVue from "../components/app/QuickTransaction.vue";
</script>

<template>
	<main class="page-wrapper vh-100 big-custom">
		<!-- <Navbar></Navbar> -->
		<!-- Page content -->
		<section class="container-fluid pt-2">
			<div class="row p-md-3">
				<!-- Sidebar (User info + Account menu) -->
				<aside class="col-lg-3 col-md-4 bordder-end pb-5 mb-3">
					<SidebarVue />
				</aside>

				<!-- Main -->
				<div
					class="col-md-8 col-lg-4 px-4 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n5 mt-md-0"
				>
					<RouterView></RouterView>
				</div>
				<div class="col-lg-5 vh-80">
					<QuickTransactionVue></QuickTransactionVue>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped>
	.bg-custom {
		background-color: rgba(193, 84, 207, 0.05);
	}
</style>
