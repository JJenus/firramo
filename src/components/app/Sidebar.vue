<script setup>
	import { onMounted, ref } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import { user } from "@/stores/user";

	const env = import.meta.env;
	const AppName = import.meta.env.VITE_APP_NAME;
	const tempImg = ref("/assets/img/avatar/default-avatar.png");

	const router = useRouter();
	const route = useRoute();

	let path = ref("");

	function signOut() {
		console.log("signout");
		user.logout();
	}

	onMounted(async () => {
		await router.isReady();
		path.value = route.name;
	});
</script>

<template>
	<div class="position-sticky top-0">
		<div class="d-flex justify-content-between">
			<a href="/" class="navbar-brand pe-3">
				<img
					src="/logo/feramo-logo-mini.png"
					width="47"
					alt="Firramo"
				/>
				{{ AppName }}
			</a>

			<div class="d-flex">
				<button
					type="button"
					class="btn btn-outline-secondary border-0 btn-icon d-lg-none mt-3 mb-3 position-relative"
					data-bs-toggle="collapse"
					data-bs-target="#quick-trans"
				>
					<i class="bx bx-square-rounded fs-2"></i>
					<i
						class="bx bx-transfer-alt position-absolute top-0 fs-sm mt-3 me-1"
					></i>
				</button>

				<button
					type="button"
					class="btn btn-outline-secondary p-0 ms-2 rounded-circle btn-icon mt-3 mb-3 position-relative"
				>
					<img
						:src="user.getUser().imgUrl || tempImg"
						class="rounded-circle"
						style="max-height: 42px; max-width: 42px; min-height: 42px; min-width: 42px;"
						alt="profile"
					/>
				</button>
			</div>
		</div>
		<div class="text-center pe-3 border-end">
			<button
				type="button"
				class="btn btn-secondary w-100 d-md-none mt-3 mb-3"
				data-bs-toggle="collapse"
				data-bs-target="#account-menu"
			>
				<i class="bx bxs-user-detail fs-xl me-2"></i>
				menu
				<i class="bx bx-chevron-down fs-lg ms-1"></i>
			</button>
			<div
				id="account-menu"
				class="list-group side-bar mt-md-2 list-group-flush d-md-flex flex-column justify-content-md-between collapse"
			>
				<div>
					<a
						href="overview"
						:class="path === 'overview' ? 'bg-faded-primary' : ''"
						class="list-group-item list-group-item-action d-flex align-items-center text-primaryy"
					>
						<i class="bx bxs-dashboard fs-xl opacity-60 me-2"></i>
						Overview
					</a>
					<a
						href="cards"
						:class="path === 'cards' ? 'bg-faded-primary' : ''"
						class="list-group-item list-group-item-action d-flex align-items-center"
					>
						<i
							class="bx bx-credit-card-alt fs-xl opacity-60 me-2"
						></i>
						Cards
					</a>
					<a
						href="transactions"
						:class="path === 'payments' ? 'bg-faded-primary' : ''"
						class="list-group-item list-group-item-action d-flex align-items-center"
					>
						<i class="bx bx-transfer fs-xl opacity-60 me-2"></i>
						Transactions
					</a>

					<a
						href="account"
						:class="path === 'account' ? 'bg-faded-primary' : ''"
						class="list-group-item list-group-item-action d-flex align-items-center"
					>
						<i class="bx bx-user-circle fs-xl opacity-60 me-2"></i>
						Account
					</a>
				</div>

				<div>
					<a
						href="security"
						:class="path === 'security' ? 'bg-faded-primary' : ''"
						class="list-group-item list-group-item-action d-flex align-items-center"
					>
						<i class="bx bx-lock-alt fs-xl opacity-60 me-2"></i>
						Security
					</a>

					<a
						@click="signOut()"
						href="#"
						class="list-group-item list-group-item-action d-flex align-items-center"
					>
						<i class="bx bx-log-out fs-xl opacity-60 me-2"></i>
						Sign Out
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.side-bar {
		min-height: 80vh;
	}
	@media (min-width: 768px) {
		.side-bar {
			height: calc(100vh - 120px) !important;
		}
	}

	@media (min-width: 576px) {
		.side-bar {
			height: calc(100vh - 60px);
		}
	}
</style>
