<script setup>
	import BankCardVue from "../../components/app/BankCard.vue";
	const AppName = import.meta.env.VITE_APP_NAME;
</script>

<template>
	<div class="d-flex mb-3 px-2 align-items-center justify-content-between">
		<span class="fs-4 fw-bold text-dark">$19,000</span>
		<div class="fw-bold">
			add
			<button class="btn btn-outline-secondary ms-2 fw-bold p-1">
				<i class="bx bx-plus"></i>
			</button>
		</div>
	</div>
	<BankCardVue></BankCardVue>
	<div class="d-flex my-3 justify-content-center">
		<div class="w-75">
			<hr />
		</div>
	</div>

	<div class="text-center align-items-center">
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
					<span>0/4000 EUR</span>
				</div>
			</div>

			<i class="bx bx-chevron-right fs-4"></i>
		</div>

		<div class="d-flex mb-3 align-items-center justify-content-between">
			<div class="d-flex align-items-center justify-content-start">
				<i class="fs-1 bx bx-circle me-2"> </i>
				<div class="d-flex flex-column fs-xs">
					<span class="fw-bold">Online limit</span>
					<span>0/4000 EUR</span>
				</div>
			</div>

			<i class="bx bx-chevron-right fs-4"></i>
		</div>
	</div>
</template>
