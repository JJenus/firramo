<script setup>
	function signOut() {
		console.log("signout");
	}
</script>

<template>
	<div class="position-sticky top-0">
		<a href="/" class="navbar-brand pe-3">
			<img src="/logo/feramo-logo-mini.png" width="47" alt="Firramo" />
			Firramo
		</a>
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
						class="list-group-item list-group-item-action d-flex align-items-center bg-faded-primary text-wihite"
					>
						<i class="bx bx-home fs-xl opacity-60 me-2"></i>
						Overview
					</a>
					<a
						href="cards"
						class="list-group-item list-group-item-action d-flex align-items-center"
					>
						<i
							class="bx bx-credit-card-alt fs-xl opacity-60 me-2"
						></i>
						Cards
					</a>
					<a
						href="payments"
						class="list-group-item list-group-item-action d-flex align-items-center"
					>
						<i class="bx bx-transfer fs-xl opacity-60 me-2"></i>
						Payments
					</a>

					<a
						href="account"
						class="list-group-item list-group-item-action d-flex align-items-center"
					>
						<i class="bx bx-user-circle fs-xl opacity-60 me-2"></i>
						Account
					</a>
				</div>

				<div>
					<a
						href="security"
						class="list-group-item list-group-item-action d-flex align-items-center"
					>
						<i class="bx bx-lock-alt fs-xl opacity-60 me-2"></i>
						Security
					</a>

					<a
						@click="signOut()"
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
		height: calc(100vh - 160px) !important;
	}
	@media (min-width: 768) {
		.side-bar {
			height: calc(100vh - 120px) !important;
		}
	}
</style>
