<script setup>
	import Header from "@/components/product/Header.vue";
	import Footer from "@/components/Footer.vue";
	import { onMounted, ref } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import axios from "axios";
	import { alert } from "@/stores/utility";

	const env = import.meta.env;
	const AppName = import.meta.env.VITE_APP_NAME;
	const loadingReset = ref(false);

	const router = useRouter();
	const route = useRoute();

	const form = ref({
		password: null,
		cPassword: null,
		token: null,
	});

	async function sendReset() {
		if (!form.value.token) {
			alert.error("Please follow the email sent to you!");
			return;
		}
		if (
			!form.value.password ||
			form.value.cPassword !== form.value.password
		) {
			alert.error("Password mismatch!");
			return;
		}

		loadingReset.value = true;

		const { password, token } = form.value;
		console.log(password);

		let config = {
			method: "Post",
			url: `${env.VITE_BE_API}/auth/change-password`,
			data: {
				password,
				token,
			},
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				console.log("success");
				if (response.data === "success") {
					alert.success("Success", "Login with your new password.");
				} else {
					alert.error("Please reset your password again!");
				}
			})
			.catch(function (error) {
				alert.error("", "Error ocurred try again or contact support.");
				console.log(error);
			})
			.finally(() => {
				loadingReset.value = false;
			});
	}

	onMounted(async () => {
		await router.isReady();
		const token = route.query["id"];

		form.value.token = token;
	});
</script>

<template>
	<main class="page-wrapper">
		<!-- Navbar -->
		<!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->
		<Header />

		<!-- Hero -->
		<section
			class="bg-size-cover bg-position-bottom-center bg-repeat-0 py-5 pb-3"
			style="background-image: url(assets/img/contacts/bg.svg)"
		>
			<!-- Content -->
			<div class="container position-relative zindex-2 pt-5 pb-2 pb-md-0">
				<!-- Breadcrumb -->
				<nav class="pt-lg-4" aria-label="breadcrumb">
					<ol class="breadcrumb mb-0">
						<li class="breadcrumb-item">
							<a href="/"
								><i class="bx bx-home-alt fs-lg me-1"></i
								>Home</a
							>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							Password Reset
						</li>
					</ol>
				</nav>
			</div>
		</section>

		<!-- FAQ (Accordion) -->
		<section class="container">
			<div class="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-md-0">
				<h2
					class="text-center pt-md-1 pt-lg-3 pt-xl-4 pb-4 mt-xl-1 mb-2"
				>
					Password Reset
				</h2>
				<div class="row justify-content-center pb-lg-4 pb-xl-5 mb-4">
					<div class="col-lg-5 col-md-10 pb-md-2">
						<form @submit.prevent="sendReset()">
							<div class="mb-3">
								<label class="form-label" for="email1"
									>New Password</label
								>
								<input
									class="form-control"
									type="password"
									v-model="form.password"
								/>
							</div>

							<div class="mb-3">
								<label class="form-label" for="email1"
									>Confirm Password</label
								>
								<input
									class="form-control"
									type="password"
									v-model="form.cPassword"
								/>
							</div>
							<div class="d-flex">
								<button
									class="btn btn-primary d-block w-100"
									:class="loadingReset ? 'disabled' : ''"
									type="submit"
								>
									<span v-if="!loadingReset">
										Reset password
									</span>
									<span v-else>
										<span
											class="spinner-border spinner-border-sm"
											role="status"
											aria-hidden="true"
										></span>
										Loading...
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>

				<p class="text-center">
					We always have your best interest at
					{{ AppName }}.
				</p>
			</div>
		</section>
	</main>

	<Footer></Footer>
</template>
