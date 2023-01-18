<script setup>
	import { onMounted, ref } from "vue";
	import swal from "sweetalert";

	const env = import.meta.env;
	const AppName = env.VITE_APP_NAME;
	const method = ref(null);

	function next() {
		if (method.value === null) {
			swal({
				title: "Payment method",
				text: "Select preferred method",
				icon: "error",
				buttons: {
					close: {
						text: "Close",
						value: false,
						visible: true,
						className: "btn btn-outline-primary",
						closeModal: true,
					},
				},
			});
		} else {
			swal({
				title: "Verify",
				html: "<p class='text-center'>Click on start verification or come back at your convinience</p>",
				icon: "warning",
				buttons: {
					verification: {
						text: "Start verification",
						value: true,
						visible: true,
						className: "btn btn-outline-secondary",
						closeModal: true,
					},
					close: {
						text: "Close",
						value: false,
						visible: true,
						className: "btn btn-outline-primary",
						closeModal: true,
					},
				},
				dangerMode: false,
			}).then((next) => {
				if (next) {
					// open verification dialogue
					const button = document.querySelector("#withraw-modal .btn-close");
					button.click();
				} else {
					// do nothing
				}
			});
		}
	}

	onMounted(() => {});
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
						<i class="bx bx-transfer-alt me-2 fs-3"></i> Send
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
									data-format='{"numeral": true}'
									type="text"
									value="0.0"
								/>
							</div>
							<div class="mb-3">
								<h5 class="mb-2 fs-6">Send to</h5>
								<div class="d-flex">
									<button
										@click="method = AppName"
										:class="
											method === AppName
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-2 btn-icon rounded-circle"
										data-bs-toggle="tooltip"
										data-bs-placement="left"
										data-bs-custom-class="custom-tooltip"
										:data-bs-title="AppName"
									>
										<i class="bx bxl-facebook"></i>
									</button>

									<button
										@click="method = 'paypal'"
										:class="
											method === 'paypal'
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-2 btn-icon"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="Paypal"
									>
										<i class="bx bxl-paypal"></i>
									</button>
									<button
										@click="method = 'venmo'"
										:class="
											method === 'venmo'
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-2 btn-icon"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="Venmo"
									>
										<i class="bx bxl-venmo"></i>
									</button>

									<button
										@click="method = 'card'"
										:class="
											method === 'card'
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-2 btn-icon"
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
								@click="next"
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
