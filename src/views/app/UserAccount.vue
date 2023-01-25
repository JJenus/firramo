<script setup>
	import { ref, inject } from "vue";
	import * as filestack from "filestack-js";
	import axios from "axios";
	import { alert } from "../../stores/utility";

	const env = import.meta.env;

	const user = inject("user");

	const tempImg = ref("/assets/img/avatar/default-avatar.png");
	const changed = ref(false);

	const apikey = env.VITE_FSHARE_KEY;
	const client = filestack.init(apikey);
	const permitDelete = ref(false);

	const loading = ref(false);
	const imgFile = ref(null);
	const savedImg = ref(false);

	function saveImage() {
		changed.value = false;
		client
			.upload(imgFile.value)
			.then((res) => {
				console.log("success: ", res);

				user.value.imgUrl = res.url;
				save();
				savedImg.value = true;
			})
			.catch((err) => {
				console.log(err);
				alert.error("Failed", "Please check your connection.");
			});
	}

	function revert() {
		changed.value = false;
		savedImg.value = false;
		user.value.imgUrl = user.getUser().imgUrl;
	}

	function selectImage() {
		const input = document.querySelector("#select-profile-image");
		input.click();
	}

	function newImage(evt) {
		const input = evt.target;

		if (input.files && input.files[0]) {
			imgFile.value = input.files[0];
			user.value.imgUrl = URL.createObjectURL(input.files[0]);
			changed.value = true;
		}
	}

	function submit($evt) {
		if (!$evt.target.checkValidity()) return;
		loading.value = true;
		save();
	}

	function save() {
		let config = {
			method: "PUT",
			url: `${env.VITE_BE_API}/users`,
			data: user.value,
		};
		axios
			.request(config)
			.then((res) => {
				const data = res.data;
				console.log(data);
				const old = user.getToken();
				old.user = data;
				user.login(old);
				user.value = data;

				alert.success("Success");
			})
			.catch((err) => {
				alert.error("Failed");
				console.log(err);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	function closeAccount() {
		if (permitDelete.value) {
			loading.value = true;
			user.value.status = "deleted";
			let config = {
				method: "PUT",
				url: `${env.VITE_BE_API}/users`,
				data: user.value,
			};
			axios
				.request(config)
				.then((res) => {
					const data = res.data;
					console.log(data);
					const old = user.getToken();
					old.user = data;
					user.login(old);
					user.value = data;

					alert.success("Account closed");

					setTimeout(() => {
						user.logout();
					}, 2000);
				})
				.catch((err) => {
					alert.error("Failed");
					console.log(err);
				})
				.finally(() => {
					loading.value = false;
				});
		} else {
			alert.info("Check yes to permit action");
		}
	}
</script>

<template>
	<div class="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
		<!-- Team Style 2: Vertical -->
		<div
			class="card card-body mb-4 card-hover bg-light border-0 text-center"
		>
			<img
				@click="selectImage()"
				:src="user.imgUrl !== null ? user.imgUrl : tempImg"
				class="d-block rounded-circle mx-auto mb-2"
				width="162"
				:alt="user.name"
			/>
			<h5 class="fw-medium fs-lg mb-1">{{ user.name }}</h5>
			<p class="fs-sm mb-4">{{ user.email }}</p>

			<div class="d-flex justify-content-center">
				<input
					type="file"
					accept="image/png, image/gif, image/jpeg"
					@change="newImage($event)"
					id="select-profile-image"
					class="d-none"
				/>
				<button
					v-if="changed"
					@click="revert()"
					class="btn btn-outline-danger d-none btn-sm rounded-pill"
				>
					cancel
				</button>

				<button
					@click="selectImage()"
					class="btn btn-outline-secondary mx-2 btn-sm rounded-pill"
				>
					change
				</button>

				<button
					v-if="changed && !savedImg"
					@click="saveImage()"
					:class="loading ? 'disabled' : ''"
					class="btn btn-outline-primary btn-sm rounded-pill"
				>
					<span v-if="!loading"> Save </span>
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

		<h1 class="h2 pt-xl-1 pb-3">Account Details</h1>

		<!-- Basic info -->
		<h2 class="h5 text-primary mb-4">Basic info</h2>
		<form
			@submit.prevent="submit($event)"
			class="needs-validation border-bottom pb-3 pb-lg-4"
			novalidate
		>
			<div class="row pb-2">
				<div class="col-sm-12 mb-4">
					<label for="fn" class="form-label fs-base">Name</label>
					<input
						type="text"
						id="fn"
						class="form-control form-control-lg"
						v-model="user.name"
						name="name"
						required
					/>
					<div class="invalid-feedback">
						Please enter your first name!
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<label for="email" class="form-label fs-base"
						>Email address</label
					>
					<input
						type="email"
						id="email"
						class="form-control form-control-lg"
						v-model="user.email"
						required
					/>
					<div class="invalid-feedback">
						Please provide a valid email address!
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<label for="phone" class="form-label fs-base"
						>Phone
						<small class="text-muted">(optional)</small></label
					>
					<input
						type="text"
						id="phone"
						class="form-control form-control-lg"
						v-model="user.phone"
						data-format='{"phone": true, "phoneRegionCode": "us"}'
						placeholder="+1 ___ ___ __"
					/>
				</div>
			</div>
			<div class="d-flex mb-3 d-none">
				<button type="reset" class="btn btn-secondary me-3">
					Cancel
				</button>
				<button
					:class="loading ? 'disabled' : ''"
					type="submit"
					class="btn btn-primary"
				>
					<span v-if="!loading"> Save changes </span>
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
			<!-- </form> -->

			<!-- Address -->
			<h2 class="h5 text-primary pt-1 pt-lg-3 my-4">Address</h2>
			<!-- <form class="needs-validation border-bottom pb-2 pb-lg-4" novalidate> -->
			<div class="row pb-2">
				<div class="col-sm-6 mb-4">
					<label for="country" class="form-label fs-base"
						>Country</label
					>
					<input
						type="text"
						id="country"
						class="form-control form-control-lg"
						v-model="user.country"
						name="country"
						required
					/>
					<div class="invalid-feedback">
						Please enter your country!
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<label for="city" class="form-label fs-base">City</label>
					<input
						type="text"
						id="country"
						class="form-control form-control-lg"
						v-model="user.city"
						name="country"
						required
					/>
					<div class="invalid-feedback">Please enter your city!</div>
				</div>
				<div class="col-sm-6 mb-4">
					<label for="zip" class="form-label fs-base">ZIP code</label>
					<input
						type="text"
						id="zip"
						class="form-control form-control-lg"
						v-model="user.zipcode"
						name="zip"
						required
					/>
					<div class="invalid-feedback">
						Please enter your ZIP code!
					</div>
				</div>
				<div class="col-6 mb-4">
					<label for="address1" class="form-label fs-base"
						>Address line</label
					>
					<input
						id="address1"
						class="form-control form-control-lg"
						v-model="user.address"
						required
					/>
				</div>
			</div>
			<div class="d-flex mb-3">
				<button type="reset" class="btn d-nonie btn-secondary me-3">
					Cancel
				</button>
				<button type="submit" class="btn btn-secondary">
					Save changes
				</button>
			</div>
		</form>

		<!-- Delete account -->
		<h2 class="h5 text-primary pt-1 pt-lg-3 mt-4">Close account</h2>
		<p>
			When you delete your account, your public profile will be
			deactivated immediately. If you change your mind before the 14 days
			are up, sign in with your email and password, and we’ll send you a
			link to reactivate your account.
		</p>
		<div class="form-check mb-4">
			<input
				type="checkbox"
				id="delete-account"
				class="form-check-input"
				v-model="permitDelete"
			/>
			<label for="delete-account" class="form-check-label fs-base"
				>Yes, I want to delete my account</label
			>
		</div>
		<button
			:class="!permitDelete || loading ? 'disabled' : ''"
			@click="closeAccount()"
			type="button"
			class="btn btn-danger"
		>
			<span v-if="!loading"> Close </span>
			<span v-else>
				<span
					class="spinner-grow spinner-grow-sm"
					role="status"
					aria-hidden="true"
				></span>
				Processing...
			</span>
		</button>
	</div>
</template>
