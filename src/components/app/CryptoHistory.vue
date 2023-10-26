<script setup>
	import moment from "moment";
	import { util } from "../../stores/utility";
	const props = defineProps({
		history: {
			required: true,
		},
		symbol: {
			required: true,
		},
	});

	const cryptoBalance = () => {
		return util.crypto(Number(props.history.amount));
	};

	const createdAt = () => {
		return moment(props.history.createdAt).format("DD/MM/YY hh:mm A");
	};
</script>

<template>
	<div class="d-flex align-items-center mb-2 p-2">
		<i
			v-if="history.type == 'sent'"
			class="bx bx-trending-up fs-3 text-danger me-3"
		></i>
		<i v-else class="bx bx-trending-down fs-3 text-info me-3"></i>

		<div>
			<span class="fw-bold">
				<span class="text-capitalized">{{ symbol }}</span> {{ cryptoBalance() }}
			</span>
			<div class="d-flex align-items-center justify-content-between">
				<span class="me-2">{{ history.type }}</span>
				<span>
					{{ createdAt() }}
				</span>
			</div>
		</div>
	</div>
</template>
