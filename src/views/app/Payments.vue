<script setup>
	import axios from "axios";
	import { util } from "@/stores/utility";
	import { onMounted, ref, inject } from "vue";

	const env = import.meta.env;
	env.VITE_BE_API = util.backendApi;
	const user = inject("user");

	const transactions = ref({
		withdrawals: [],
		deposits: [],
		transfers: [],
	});

	function loadTransactions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.value.id}/transactions`,
		};

		axios
			.request(config)
			.then((response) => {
				transactions.value = response.data;
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
	<div class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
		<h1 class="h2 pt-xl-1 mb-2 pb-2 pb-lg-3">Transactions</h1>
		<h2 class="h5 text-primary mb-4">Your transactions</h2>

		<!-- Item -->
		<!-- Nav tabs alternative style -->
		<ul class="nav nav-tabs-alt" role="tablist">
			<li class="nav-item">
				<a
					href="#withdrawal-transaction"
					class="nav-link active"
					data-bs-toggle="tab"
					role="tab"
				>
					<i class="bx bx-money-withdraw opacity-70 me-2"></i>
					Payments
				</a>
			</li>
			<li class="nav-item">
				<a
					href="#deposit-transaction"
					class="nav-link"
					data-bs-toggle="tab"
					role="tab"
				>
					<i class="bx bxs-bank opacity-70 me-2"></i>
					Deposit
				</a>
			</li>
			<li class="nav-item dropdown">
				<a
					href="#transfer-transacton"
					class="nav-link"
					data-bs-toggle="tab"
					role="tab"
				>
					<i class="bx bx-transfer-alt opacity-70 me-2"></i>
					Transfer
				</a>
			</li>
		</ul>

		<!-- Tabs content -->
		<div class="tab-content">
			<div
				class="tab-pane fade show active"
				id="withdrawal-transaction"
				role="tabpanel"
			>
				<p
					v-if="transactions.withdrawals.length < 1"
					class="text-center"
				>
					No payments
				</p>
			</div>
			<div class="tab-pane fade" id="deposit-transaction" role="tabpanel">
				<p v-if="transactions.deposits.length < 1" class="text-center">
					No deposits
				</p>
			</div>

			<div class="tab-pane fade" id="transfer-transacton" role="tabpanel">
				<p v-if="transactions.transfers.length < 1" class="text-center">
					No transfers
				</p>
			</div>
		</div>
	</div>
</template>
