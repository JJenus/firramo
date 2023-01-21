<script setup>
	import { onMounted, ref } from "vue";
	import axios from "axios";

	import LoginSession from "../../components/app/security/LoginSession.vue";

	import { user } from "@/stores/user";
	import { util, alert } from "@/stores/utility";

	const env = import.meta.env;
	env.VITE_BE_API = util.backendApi;

	console.log(util.backendApi);

	const sessions = ref([]);
	const userForm = ref(user.getUser());
	const loading = ref(false);

	function loadSessions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/userForms/${userForm.id}/sessions`,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				sessions.value = response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onMounted(() => {
		loadSessions();
	});
</script>

<template>
	<div class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
		<h1 class="h2 pt-xl-1 pb-3">Security</h1>

		<!-- Password -->
		<h2 class="h5 text-primary mb-4">Password</h2>
		<form class="needs-validation border-bottom pb-3 pb-lg-4" novalidate>
			<div class="row">
				<div class="col-sm-6 mb-4">
					<label for="cp" class="form-label fs-base"
						>Current password</label
					>
					<div class="password-toggle">
						<input
							type="password"
							id="cp"
							class="form-control form-control-lg"
							value="jonnyPass"
							required
						/>
						<label
							class="password-toggle-btn"
							aria-label="Show/hide password"
						>
							<input
								class="password-toggle-check"
								type="checkbox"
							/>
							<span class="password-toggle-indicator"></span>
						</label>
						<div
							class="invalid-tooltip position-absolute top-100 start-0"
						>
							Incorrect password!
						</div>
					</div>
				</div>
			</div>
			<div class="row pb-2">
				<div class="col-sm-6 mb-4">
					<label for="np" class="form-label fs-base"
						>New password</label
					>
					<div class="password-toggle">
						<input
							type="password"
							id="np"
							class="form-control form-control-lg"
							required
						/>
						<label
							class="password-toggle-btn"
							aria-label="Show/hide password"
						>
							<input
								class="password-toggle-check"
								type="checkbox"
							/>
							<span class="password-toggle-indicator"></span>
						</label>
						<div
							class="invalid-tooltip position-absolute top-100 start-0"
						>
							Incorrect password!
						</div>
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<label for="cnp" class="form-label fs-base"
						>Confirm new password</label
					>
					<div class="password-toggle">
						<input
							type="password"
							id="cnp"
							class="form-control form-control-lg"
							required
						/>
						<label
							class="password-toggle-btn"
							aria-label="Show/hide password"
						>
							<input
								class="password-toggle-check"
								type="checkbox"
							/>
							<span class="password-toggle-indicator"></span>
						</label>
						<div
							class="invalid-tooltip position-absolute top-100 start-0"
						>
							Incorrect password!
						</div>
					</div>
				</div>
			</div>
			<div class="d-flex mb-3">
				<button type="reset" class="btn btn-secondary me-3">
					Cancel
				</button>
				<button type="submit" class="btn btn-primary">
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
		</form>

		<!-- Sessions -->
		<h2 class="h5 text-primary pt-1 pt-lg-3 mt-4">Your sessions</h2>
		<p class="pb-3 mb-3">
			This is a list of devices that have logged into your account. Remove
			any sessions that you do not recognize.
		</p>
		<ul class="list-unstyled mb-0">
			<LoginSession
				v-for="session in sessions"
				:session="session"
				:active="user.getSession()"
			/>
		</ul>
	</div>
</template>
