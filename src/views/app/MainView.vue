<script setup>
	import { inject, computed, onMounted } from "vue";
	import BankCardVue from "../../components/app/BankCard.vue";
	import { util } from "@/stores/utility";
	import currency from "currency.js";

	const user = inject("user");
	const settings = inject("settings", util.settings());

	const balance = computed(() => {
		const amount = currency(user.value.balance.amount, {
			symbol: settings.value.currencySymbol,
		}).format();
		return amount;
	});

	function addMoney() {
		// console.log("Add money");
	}

	function withdraw() {
		// console.log("Withdraw");
	}

	function appCurrency() {
		return settings.value.currency;
	}

	onMounted(() => {});
</script>

<template>
	<div class="d-flex mb-3 px-2 align-items-center justify-content-between">
		<span class="fs-3 fw-bold text-dark ps-md-4">{{ balance }}</span>

		<div class="d-flex">
			<div
				class="fw-bold me-3"
				@click="withdraw()"
				data-bs-toggle="modal"
				data-bs-target="#withraw-modal"
			>
				<a
					style="text-decoration: none"
					href="#"
					class="d-none text-dark d-md-inline"
				>
					Send
				</a>
				<button
					class="btn btn-outline-secondary ms-2 fw-bold p-2 p-md-1"
				>
					<i class="bx bx-transfer-alt"></i>
				</button>
			</div>
			<div
				class="fw-bold"
				@click="addMoney()"
				data-bs-toggle="modal"
				data-bs-target="#add-money-modal"
			>
				<a
					style="text-decoration: none"
					href="#"
					class="d-none text-dark d-md-inline"
				>
					Add
				</a>
				<button
					class="btn btn-outline-secondary ms-2 fw-bold p-2 p-md-1"
				>
					<i class="bx bx-plus"></i>
				</button>
			</div>
		</div>
	</div>

	<div class="pe-md-5 px-md-5">
		<BankCardVue :user="user.name"></BankCardVue>
	</div>

	<div class="d-flex my-3 justify-content-center">
		<div class="w-75">
			<hr />
		</div>
	</div>
	<div class="d-flex my-3 justify-content-center">
		<div class="w-75">
			<hr />
		</div>
	</div>

	<div class="text-center d-none align-items-center">
		<div class="btn btn-outline-secondary border-0">
			<button class="btn-outline-secondary btn-icon btn">
				<i class="bx bx-at fs-3"></i>
			</button>
			<span class="ms-3 fs-5">Create your username</span>
		</div>
	</div>

	<div class="d-flex my-3 mb-5 justify-content-center">
		<div class="w-75">
			<hr />
		</div>
	</div>
	<div class="mb-5">
		<div class="d-flex mb-3 align-items-center justify-content-between">
			<div class="d-flex align-items-center justify-content-start">
				<i class="fs-1 bx bx-circle me-2"> </i>
				<div class="d-flex flex-column fs-xs">
					<span class="fw-bold">Credit limit</span>
					<span>0/4000 {{ appCurrency() }}</span>
				</div>
			</div>

			<i class="bx bx-chevron-right fs-4"></i>
		</div>

		<div class="d-flex mb-3 align-items-center justify-content-between">
			<div class="d-flex align-items-center justify-content-start">
				<i class="fs-1 bx bx-circle me-2"> </i>
				<div class="d-flex flex-column fs-xs">
					<span class="fw-bold">Online limit</span>
					<span>0/4000 {{ appCurrency() }}</span>
				</div>
			</div>

			<i class="bx bx-chevron-right fs-4"></i>
		</div>
	</div>
</template>
