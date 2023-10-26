<script setup>
	import { ref } from "vue";
	import { util } from "../../stores/utility";
	import CryptoHistory from "./CryptoHistory.vue";
	import ReceiveCrypto from "./ReceiveCrypto.vue";
	import SendCrypto from "./SendCrypto.vue";

	const props = defineProps({
		crypto: {
			required: true,
		},
	});

	const wallet = ref(props.crypto.wallet);

	const showDetails = ref(false);
	const active = ref("receive");

	const formatAmount = () => {
		return util.money(Number(props.crypto.localBalance));
	};

	const cryptoBalance = () => {
		return util.crypto(Number(props.crypto.cryptoBalance));
	};
</script>

<template>
	<div class="w-100 me-3 card border-0 mb-4">
		<div
			@click="showDetails = !showDetails"
			class="card-body d-flex justify-content-between my-0 mb-2 position-relative"
		>
			<div class="d-flex align-items-center">
				<img :src="wallet.imgUrl" width="84" alt="Visa" />
				<div class="ps-3 ps-sm-4">
					<h6 class="mb-1">
						{{ wallet.symbol }} {{ cryptoBalance() }}
					</h6>
					<div class="fs-sm">{{ formatAmount() }}</div>
				</div>
			</div>
			<div class="position-absolute bottom-0 end-0 me-2">
				<i v-if="!showDetails" class="bx bx-down-arrow-circle fs-3"></i>
				<i v-else class="bx bxs-up-arrow-circle fs-3"></i>
			</div>
		</div>
		<div v-if="showDetails" class="card-footer border-0">
			<div class="d-flex align-items-center justify-content-center mb-4">
				<div
					class="btn-group shadow border"
					role="group"
					aria-label="Large button group"
				>
					<button
						:class="active == 'send' ? 'active' : ''"
						@click="active = 'send'"
						type="button"
						class="btn btn-outline-secondary border-0 d-flex flex-column"
					>
						<i class="bx bx-transfer-alt fs-3"></i>
						Send
					</button>
					<button
						:class="active == 'receive' ? 'active' : ''"
						@click="active = 'receive'"
						type="button"
						class="btn btn-outline-secondary border-0 d-flex flex-column"
					>
						<i class="bx bx-trending-down fs-3"></i>
						Receive
					</button>
					<button
						:class="active == 'history' ? 'active' : ''"
						@click="active = 'history'"
						type="button"
						class="btn btn-outline-secondary border-0 d-flex flex-column"
					>
						<i class="bx bx-history fs-3"></i>
						History
					</button>
				</div>
			</div>

			<SendCrypto v-if="active == 'send'" :user-wallet="crypto" />

			<ReceiveCrypto :wallet="wallet" v-if="active == 'receive'" />

			<div v-if="active == 'history'" class="d-flex flex-column fs-sm">
				<CryptoHistory
					class="w-100"
					v-for="history in crypto.history"
					:symbol="wallet.symbol"
					:history="history"
				/>
				<div
					v-if="crypto.history.length == 0"
					class="text-center text-muted"
				>
					No transaction to show.
				</div>
			</div>
		</div>
	</div>
</template>
