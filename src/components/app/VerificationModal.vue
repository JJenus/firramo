<script setup>
	import { inject, onMounted, ref } from "vue";
	import Camera from "./Camera.vue";
	import { util, alert } from "../../stores/utility";
	import { user } from "@/stores/user";
	import axios from "axios";
	import * as filestack from "filestack-js";

	const env = import.meta.env;
	const camera = ref();
	const imgIdUrl = ref("/assets/img/about/hero-bg.svg");
	const imageFile = ref(null);

	const apikey = env.VITE_FSHARE_KEY;
	const client = filestack.init(apikey);
	const loading = ref(false);
	const appUser = inject("user");

	const form = ref({
		userId: user.getUser().id,
		imgUrl: null,
		IDCardUrl: null,
	});

	function stopCamera() {
		// console.log(camera.value);
		// camera.value.stop();
	}

	function selectImage() {
		const input = document.querySelector("#select-id-image");
		input.click();
	}

	function newImage(evt) {
		const input = evt.target;

		if (input.files && input.files[0]) {
			imgIdUrl.value = URL.createObjectURL(input.files[0]);
			imageFile.value = input.files[0];
		}
	}

	function submit() {
		if (util.camera.imageFile.value === null) {
			alert.error(
				"Facial Verification Error",
				"Please go back and capture face properly"
			);
			return;
		}
		if (imageFile.value === null) {
			alert.error("ID Error", "Please select a valid ID");
			return;
		}

		loading.value = true;
		let count = 0;

		[imageFile.value, util.camera.imageFile.value].forEach((file) => {
			client
				.upload(file)
				.then((res) => {
					console.log("success: ", res);

					if (count == 0) {
						form.value.IDCardUrl = res.url;
					} else {
						form.value.imgUrl = res.url;
						loading.value = true;
						requestVerification();
					}

					count++;
				})
				.catch((err) => {
					console.log(err);
					alert.error("Failed", "Please check your connection.");
				});
		});
	}

	function requestVerification() {
		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/users/verify`,
			data: form.value,
		};
		axios
			.request(config)
			.then((res) => {
				const data = res.data;
				console.log("Verification: ", data);
				try {
					appUser.value.status = "pending";
				} catch (error) {
					console.log("error");
				}

				alert.success(
					"Thank you",
					"You'll be notified of your verification status."
				);

				document
					.querySelector("#verification-modal .btn-close")
					.click();
			})
			.catch((err) => {
				alert.error("Failed");
				console.log(err);
			})
			.finally(() => {
				loading.value = false;
			});
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
						@click="stopCamera()"
					></button>
				</div>
				<div class="modal-body h-100">
					<Camera
						v-if="util.camera.captured.value === false"
						ref="camera"
					></Camera>
					<div
						v-else
						class="d-flex flex-column align-items-center justify-content-center"
					>
						<h5 class="h6 mb-3">Upload a valid ID</h5>
						<div
							@click="selectImage()"
							class="mb-4 position-relative d-flex align-items-center justify-content-center"
						>
							<img
								:src="imgIdUrl"
								width="220"
								class="img-fluid"
								alt="id"
							/>

							<button
								v-if="imageFile"
								class="btn position-absolute opacity-3 btn-outline-dark btn-icon rounded-circle"
							>
								<i class="bx bx-plus fs-3"></i>
							</button>
							<input
								type="file"
								accept="image/png, image/gif, image/jpeg"
								@change="newImage($event)"
								id="select-id-image"
								class="d-none"
							/>
						</div>
						<button
							v-if="!imageFile"
							@click="selectImage()"
							class="btn btn-outline-secondary"
						>
							Select image
						</button>

						<button
							v-else
							@click="submit()"
							:class="loading ? 'disabled' : ''"
							class="btn btn-outline-secondary"
						>
							<span v-if="!loading"> Submit </span>
							<span v-else>
								<span
									class="spinner-grow spinner-grow-sm"
									role="status"
									aria-hidden="true"
								></span>
								Please wait...
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
