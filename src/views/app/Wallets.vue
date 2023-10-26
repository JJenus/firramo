<script setup>
	import { inject, ref } from "vue";
	import Wallet from "../../components/app/Wallet.vue";
	import axios from "axios";
	import { alert } from "../../stores/utility";
	const env = import.meta.env;

	const newWallet = ref(false);
	const sending = ref(false);
	const user = inject("user");

	const { userWallets, wallets, loadUserWallets, loadWallets } =
		inject("wallets");

	const form = ref({
		userId: user.value.id,
		cryptoBalance: "0",
		localBalance: "0",
		symbol: "",
		wallet: null,
	});

	function createWallet(iWallet) {
		sending.value = true;
		form.value.symbol = iWallet.symbol;
		form.value.wallet = iWallet;

		let config = {
			data: form.value,
			method: "POST",
			url: `${env.VITE_BE_API}/wallets/user-wallets`,
		};
		axios
			.request(config)
			.then((response) => {
				loadUserWallets();
				loadWallets();
				alert.success("Created");
				form.value.symbol = "";
				form.value.wallet = null;
				newWallet.value = false;
			})
			.catch(function (error) {
				alert.error("Failed");
			})
			.finally(() => {
				sending.value = false;
			});
	}
</script>

<template>
	<div class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
		<h1 class="h2 pt-xl-1 mb-3 pb-2 pb-lg-3">Wallets</h1>
		<h2 class="fs-6 text-muted mb-2">Complete access to crypto</h2>

		<div class="py-2 mb-4">
			<button
				v-if="!newWallet"
				@click="newWallet = true"
				type="button"
				class="btn btn-primary ps-4"
			>
				<i class="bx bx-plus fs-xl me-2"></i>
				Create new wallet
			</button>
			<button
				v-else
				@click="newWallet = false"
				type="button"
				class="btn btn btn-outline-secondary ps-4"
			>
				<i class="bx bx-arrow fs-xl me-2"></i>
				back
			</button>
		</div>

		<!-- Item -->
		<div v-if="!newWallet" class="d-flex flex-column g-3">
			<!-- Item -->
			<Wallet
				class="w-100"
				v-for="wallet in userWallets"
				:crypto="wallet"
			/>
		</div>

		<div v-else class="row row-cols-md-1">
			<div v-if="wallets.length == 0" class="text-center text-muted">
				More wallets will be available shortly
			</div>
			<div v-for="wallet in wallets" :key="wallet.id" class="col">
				<div
					class="card d-sm-flex flex-sm-row align-items-sm-center justify-content-between border-0 shadow-sm p-3 p-md-4 mb-4"
				>
					<div class="d-flex align-items-center pe-sm-3">
						<img :src="wallet.imgUrl" width="84" alt="Bitcoin" />
						<div class="ps-3 ps-sm-4">
							<h6 class="mb-2">
								{{ wallet.currency }} ({{ wallet.symbol }})
							</h6>
							<div class="fs-sm">
								<button
									:disabled="sending"
									@click="createWallet(wallet)"
									type="button"
									class="btn btn-outline-secondary px-3 px-xl-4 me-3"
								>
									<span
										class="d-flex align-items-center"
										v-if="!sending"
									>
										<i
											class="bx bx-check-circle fs-xl me-1 me-xl-2"
										></i>
										<span class="d-lg-inline">
											Create
										</span>
									</span>
									<span
										v-else
										class="spinner-border spinner-border-sm"
									></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
