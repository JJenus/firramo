<script setup>
	import { onMounted, ref } from "vue";
	import swal from "sweetalert";
	import Camera from "./Camera.vue";

	const env = import.meta.env;
	const AppName = env.VITE_APP_NAME;

	onMounted(() => {});
</script>

<template>
	<button
		id="btn-verify-modal"
		data-bs-toggle="modal"
		data-bs-target="#verification-modal"
		class="text-muted d-none"
	>
		verification
	</button>
	<div class="modal fade" id="verification-modal" tabindex="-1" role="dialog">
		<div
			class="modal-dialog modal-dialog-tcentered modal-fullscreen-sm-down"
			role="document"
		>
			<div class="modal-content border-dark border th-rounded">
				<div class="modal-header">
					<div
						class="d-flex align-items-center justify-content-center w-100 fs-5"
						id="staticBackdropLabel"
					>
						<i class="bx bx-check-shield me-2 fs-3"></i>
						Verification
					</div>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body h-100">
					<Camera></Camera>
				</div>
			</div>
		</div>
	</div>
</template>
