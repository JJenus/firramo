<script setup>
	import { inject, ref } from "vue";
	import { alert, util } from "../../stores/utility";
	import axios from "axios";

	const props = defineProps({
		userWallet: {
			required: true,
		},
	});

	const env = import.meta.env;
	const wallet = ref(props.userWallet.wallet);
	const balance = util.crypto(Number(props.userWallet.cryptoBalance));
	const { loadWallets, loadUserWallets } = inject("wallets");

	const user = inject("user");
	const sending = ref(false);

	const form = ref({
		userId: user.value.id,
		type: "sent",
		walletId: wallet.value.id,
		amount: "0",
		fee: "0",
		address: "",
	});

	function send() {
		if (Number(balance) < Number(form.value.amount)) {
			return alert.error("Insufficient balance!");
		}

		if (Number(form.value.amount) <= 0) {
			return alert.error("Invalid amount!");
		}

		if (!form.value.address) {
			return alert.error("Please address!");
		}

		sending.value = true;

		let config = {
			data: form.value,
			method: "POST",
			url: `${env.VITE_BE_API}/wallets/transact`,
		};

		axios
			.request(config)
			.then((response) => {
				loadUserWallets();
				loadWallets();
				alert.success("Sent");
				form.value.address = "";
				form.value.amount = "";
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
	<div class="px-md-5 px-3">
		<form @submit.prevent="send()" novalidate>
			<div class="mb-4" bis_skin_checked="1">
				<label for="fn" class="form-label fs-base">Address</label
				><input
					type="text"
					id="fn"
					class="form-control form-control-lg"
					name="crypto_address"
					required
					v-model="form.address"
				/>
				<div class="invalid-feedback" bis_skin_checked="1">
					Please enter address!
				</div>
			</div>
			<div class="mb-4" bis_skin_checked="1">
				<label for="fn" class="form-label fs-base">Amount</label
				><input
					type="text"
					id="fn"
					class="form-control form-control-lg"
					name="amount"
					v-model="form.amount"
					required
				/>
				<div class="invalid-feedback" bis_skin_checked="1">
					Enter amount
				</div>
			</div>

			<div class="mb-4" bis_skin_checked="1">
				<button :disabled="sending" class="w-100 btn btn-primary">
					<span v-if="!sending">Send</span>
					<span
						v-else
						class="spinner-border spinner-border-sm"
					></span>
				</button>
				<div class="text-sm text-warning mt-1" style="font-size: 14px">
					<i class="bx bx-info-circle me-1"></i> Make sure the address
					is correct
				</div>
			</div>
		</form>
	</div>
</template>
