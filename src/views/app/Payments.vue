<script setup>
	import axios from "axios";
	import { util } from "@/stores/utility";
	import { onMounted, ref, inject } from "vue";
	import moment from "moment";

	const env = import.meta.env;
	env.VITE_BE_API = util.backendApi;
	const user = inject("user");

	const transactions = ref([]);

	function getTime(createdAt) {
		const fromNow = moment(createdAt).fromNow();

		let check = ["minutes", "seconds", "hours", "few"].find((e) =>
			fromNow.includes(e)
		);

		if (!check) {
			return moment(createdAt).format("lll");
		}

		return fromNow;
	}

	function formatMoney(money) {
		return util.money(money);
	}

	function statColor(tStatus) {
		return tStatus === "success"
			? "success"
			: tStatus === "processing"
			? "warning"
			: "danger";
	}

	function loadTransactions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.value.id}/transfers`,
		};

		axios
			.request(config)
			.then((response) => {
				transactions.value = response.data;
				window.debug.log("Transactions: ", transactions.value);
			})
			.catch(function (error) {
				window.debug.log(error);
			});
	}

	onMounted(() => {
		loadTransactions();
	});
</script>

<template>
	<div class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
		<h1 class="h2 pt-xl-1 mb-2 pb-2 pb-lg-3">Transactions</h1>
		<h2 class="h5 text-primary d-none mb-4">Your transactions</h2>

		<!-- Item -->

		<!-- Tabs content -->
		<div class="d-flex flex-column">
			<!-- Color background on hover -->
			<div
				v-for="trans in transactions"
				class="card border-0 shadow-0 card-hover-info mb-3"
			>
				<div class="card-body pb-0">
					<div
						class="d-flex align-items-start justify-content-between mb-0 pb-0"
					>
						<div class="d-flex align-items-center">
							<i
								v-if="
									trans.transactionType == null ||
									trans.transactionType == 'Transfer'
								"
								class="bx bx-money-withdraw me-2"
							></i>
							<button
								v-else
								class="btn btn-icoin btn-outline-dark rounded-circle btn-sm me-2 p-1"
							>
								<i class="bx bx-transfer-alt"></i>
							</button>

							<a
								v-if="
									trans.transactionType == null ||
									trans.transactionType == 'Transfer'
								"
								role="button"
								class="stretched-link btn-link text-dark"
							>
								Transfer to
								<span v-if="trans.name" class="text-capitalize">
									{{ trans.name }}
								</span>
								<span
									v-else
									class="badge bg-secondary border fw-bold py-2 ms-1 text-capitalize"
								>
									{{ trans.bank }}
								</span>
							</a>
							<a
								v-else
								role="button"
								class="stretched-link btn-link text-dark"
							>
								Credit transaction
							</a>
						</div>
						<span class="fs-sm fw-bold text-muted">
							{{ formatMoney(trans.amount) }}
						</span>
					</div>
				</div>
				<div
					class="card-footer d-flex align-items-center pt-0 text-muted mt-0 border-top-0"
				>
					<div
						:class="'text-' + statColor(trans.status)"
						class="fs-sm border-end pe-3 me-3"
					>
						{{ getTime(trans.createdAt) }}
					</div>
					<div class="d-flex align-items-center me-3">
						<span
							:class="'text-' + statColor(trans.status)"
							class="fs-sm fw-boild"
							>{{ trans.status }}</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
