<script setup>
	import { onMounted, ref } from "vue";
	import swal from "sweetalert";
	import Camera from "./Camera.vue";
	import { util } from "../../stores/utility";

	const env = import.meta.env;
	const AppName = env.VITE_APP_NAME;
	const camera = ref();
	const imgIdUrl = ref("/assets/img/about/hero-bg.svg");

	function selectImage() {
		const input = document.querySelector("#select-id-image");
		input.click();
	}

	function newImage(evt) {
		const input = evt.target;

		if (input.files && input.files[0]) {
			imgIdUrl.value = URL.createObjectURL(input.files[0]);
		}
	}

	function save(){
		// get cam file and id file upload to uploadio
	}

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
			class="modal-dialog modal-dialog-centered modal-fulolscreen-sm-down"
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
					<Camera
						v-if="util.capturedVerification.value === false"
						ref="camera"
					></Camera>
					<div
						v-else
						@click="selectImage()"
						class="d-flex flex-column align-items-center justify-content-center"
					>
						<h5 class="h6 mb-3">Upload a valid ID</h5>
						<div class="mb-4">
							<img
								:src="imgIdUrl"
								width="220"
								class="img-fluid"
								alt="id"
							/>
							<input
								type="file"
								accept="image/png, image/gif, image/jpeg"
								@change="newImage($event)"
								id="select-id-image"
								class="d-none"
							/>
						</div>
						<button
							class="btn btn-outline-secondary"
						>
							Select image
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
