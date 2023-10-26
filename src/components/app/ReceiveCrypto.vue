<script setup>
	import { onMounted, ref } from "vue";
	import QrCreator from "qr-creator";
	import { alert } from "../../stores/utility";

	const props = defineProps({
		wallet: {
			required: true,
		},
	});

	function copyToClipboard() {
		// Create a temporary textarea element
		const text = props.wallet.address;
		if (navigator.clipboard) {
			navigator.clipboard
				.writeText(text)
				.then(() => {
					console.log("Text copied to clipboard: " + text);
					alert.success("Copied");
				})
				.catch((err) => {
					console.error("Error copying to clipboard: " + err);
				});
		}
	}

	onMounted(() => {
		QrCreator.render(
			{
				text: props.wallet.address,
				radius: 0.5, // 0.0 to 0.5
				ecLevel: "H", // L, M, Q, H
				fill: "#536DFE", // foreground color
				background: null, // color or null for transparent
				size: 128, // in pixels
			},
			document.querySelector(`#qr-code-${props.wallet.id}`)
		);
	});
</script>
<template>
	<div
		class="d-flex flex-wrap align-items-center justify-content-center flex-column px-4"
	>
		<div>
			<h3 class="">Scan to receive</h3>
		</div>
		<div :id="`qr-code-${wallet.id}`">
			<!-- <img
				width="150"
				class=""
				src="data:image/png;base64,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"
				alt=""
			/> -->
		</div>
		<div class="bg-secondary position-relative rounded p-3 w-100">
			<div class="flex-wrap me-3">
				{{ wallet.address }}
			</div>
			<div
				@click="copyToClipboard()"
				class="position-absolute btn p-1 btn-outline-secondary border-0 m-2 bottom-0 end-0"
			>
				<i class="bx bx-copy fs-3"></i>
			</div>
		</div>
	</div>
</template>
