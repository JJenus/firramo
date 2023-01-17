<script setup>
	import { onMounted } from "vue";

	onMounted(() => {
		const tooltipTriggerList = document.querySelectorAll(
			'[data-bs-toggle="tooltip"]'
		);

		console.log(tooltipTriggerList);
		const tooltipList = [...tooltipTriggerList].map(
			(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
		);
	});
</script>

<template>
	<div class="modal fade" id="withraw-modal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content border-dark border th-rounded">
				<div class="modal-header">
					<div
						class="d-flex align-items-center justify-content-center w-100 fs-5"
						id="staticBackdropLabel"
					>
						<i class="bx bx-wallet me-2 fs-3"></i> Withdraw
					</div>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<div class="d-flex justify-content-center">
						<form @submit.prevent="">
							<div class="mb-3">
								<label class="form-label" for="email1"
									>Amount</label
								>
								<input
									class="form-control text-dark text-center fw-bold form-control-lg"
									type="text"
									value="0.0"
								/>
							</div>
							<div class="mb-3">
								<h5 class="mb-2 fs-6">Withdraw to</h5>
								<div class="d-flex">
									<button
										class="btn me-2 btn-icon btn-outline-secondary"
										data-bs-toggle="tooltip"
										data-bs-placement="left"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="Paypal"
									>
										<i class="bx bxl-paypal"></i>
									</button>
									<button
										class="btn me-2 btn-icon btn-outline-secondary"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="Venmo"
									>
										<i class="bx bxl-venmo"></i>
									</button>

									<button
										class="btn me-2 btn-icon btn-outline-secondary"
										data-bs-toggle="tooltip"
										data-bs-placement="right"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="card"
									>
										<i class="bx bx-credit-card-alt"></i>
									</button>
								</div>
							</div>
							<button
								class="btn btn-secondary d-block w-100"
								type="submit"
							>
								Next
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
