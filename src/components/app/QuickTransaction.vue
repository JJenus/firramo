<script setup>
	import axios from "axios";
	import { user } from "@/stores/user";
	import { util } from "@/stores/utility";
	import { onMounted, ref } from "vue";
	import Beneficiary from "@/components/app/main/Beneficiary.vue";
	import Recent from "./quick/Recent.vue";

	const env = import.meta.env;
	env.VITE_BE_API = util.backendApi;

	const recent = ref([]);

	function loadTransactions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.getUser().id}/transfers`,
		};

		axios
			.request(config)
			.then((response) => {
				// if (transactions.value.transfers.length > 5) {
				// 	transactions.value.transfers.length = 5;
				// }

				// if (transactions.value.deposits.length > 5) {
				// 	transactions.value.deposits.length = 5;
				// }

				for (let i = 0; i < 5; i++) {
					recent.value.push(response.data[i]);
				}

				console.log(recent.value);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onMounted(() => {
		loadTransactions();
	});
</script>

<template>
	<div
		class="w-100 overflow-y-scroll h-100 position-sticky p-5 th-rounded bg-white"
	>
		<button
			class="btn-close m-3 top-0 d-lg-none position-absolute"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#quick-trans"
		></button>
		<h3 class="fs-6 mb-3">Quick transactions</h3>
		<div class="d-flex mb-4">
			<button
				class="btn th-rounded p-2 btn-outline-secondary"
				data-bs-toggle="modal"
				data-bs-target="#withraw-modal"
			>
				<div
					class="d-flex text-xxs flex-column fs-xs align-item-center justify-content-center"
				>
					<i class="bx bx-transfer fs-2 mb-1"></i>
					Send
				</div>
			</button>

			<!-- Beneficiaries -->
			<div class="d-flex align-items-center">
				<Beneficiary></Beneficiary>
				<span class="text-muted ms-3 fs-sm">No beneficiaries</span>
			</div>
		</div>

		<h3
			class="h6 mb-0 mt-3 d-flex align-items-center justify-content-between"
		>
			<span> Recent activity </span>
			<a
				href="transactions"
				class="btn btn-sm btn-outline-secondary p-2 py-1"
			>
				show all
			</a>
		</h3>
		<small class="fw-bold fs-xs mb-3 d-none">Today</small>
		<!-- Pricing list view (List group) -->
		<ul
			v-if="recent.length > 0"
			class="d-nonie list-group list-group-flush"
		>
			<!-- Pricing plan -->
			<Recent v-for="trans in recent" :transaction="trans"></Recent>
		</ul>
		<p v-else class="text-center pt-5 text-muted">No transactions</p>
	</div>
</template>

<style scoped>
	.text-xxs {
		font-size: xx-small;
	}

	.th-rounded {
		border-radius: 15px !important;
	}

	.btn-close {
		right: 0;
	}
</style>
