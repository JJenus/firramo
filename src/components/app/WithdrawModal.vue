<script setup>
	import { inject, onMounted, ref } from "vue";
	import { alert } from "../../stores/utility";
	import Firramo from "./transfer/Firramo.vue";

	const env = import.meta.env;
	const AppName = env.VITE_APP_NAME;
	const method = ref(null);
	const user = inject("user");
	const makePayment = ref(null);

	const form = ref({
		amount: "0.00",
		email: null,
	});

	function next() {
		if (method.value === null) {
			alert.error("Payment method", "Select preferred method");
			return;
		} else if (
			Number(form.value.amount) <= 0 ||
			Number(form.value.amount) > user.value.balance.amount
		) {
			console.log(form.value.amount);
			alert.error(
				"Invalid amount",
				`Amount must be greater than 0 and not be more than current balance (${user.value.balance.amount})`
			);
			return;
		}

		if (method.value === AppName) {
			console.log("do nothing");
			makePayment.value = true;
		} else if (user.value.status === "pending") {
			alert.info(
				"Pending verification",
				"Your verification is being processed. Please contact support if it's more than 48 hours."
			);
		} else if (user.value.status !== "verified") {
			alert.verify();
		} else {
			makePayment.value = true;
		}
	}

	onMounted(() => {});
</script>

<template>
	<div
		class="modal fade"
		id="withraw-modal"
		data-backdrop="static"
		tabindex="-1"
		role="dialog"
	>
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
						<div v-show="makePayment">
							<h5 class="text-capitalize">
								<a
									class="btn-link"
									href="#"
									@click="makePayment = false"
								>
									<i class="bx bx-left-arrow-alt me-2"></i>
								</a>
								{{ method }}
							</h5>
							<Firramo :data="form"></Firramo>
						</div>

						<div v-show="!makePayment">
							<div class="mb-3">
								<label class="form-label" for="email1"
									>Amount</label
								>
								<input
									class="form-control text-dark text-center fw-bold form-control-lg"
									data-format='{"numeral": true}'
									type="text"
									v-model="form.amount"
								/>
							</div>
							<div class="mb-3">
								<h5 class="mb-2 fs-6">Send to</h5>
								<div class="d-flex flex-wrap">
									<button
										@click="method = AppName"
										:class="
											method === AppName
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-3 mb-2 btn-icon rounded-circle"
										type="button"
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
										class="btn me-3 mb-2 btn-icon"
										type="button"
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
										class="btn me-3 mb-2 btn-icon"
										type="button"
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
										class="btn me-3 mb-2 btn-icon"
										type="button"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="card"
									>
										<i class="bx bx-credit-card-alt"></i>
									</button>

									<button
										@click="method = 'skrill'"
										:class="
											method === 'skrill'
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-3 mb-2 btn-icon"
										type="button"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="Skrill"
									>
										<i class="bx bxl-stripe"></i>
									</button>

									<button
										@click="method = 'revolut'"
										:class="
											method === 'revolut'
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-3 mb-2 btn-icon"
										type="button"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="Revolut"
									>
										<i class="">
											<img
												width="16"
												src="/assets/img/logos/revolut.png"
												alt=""
												srcset=""
											/>
										</i>
									</button>

									<button
										@click="method = 'wise'"
										:class="
											method === 'wise'
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-3 mb-2 btn-icon"
										type="button"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="Wise"
									>
										<i class="">
											<img
												width="16"
												src="/assets/img/logos/wise.png"
												alt=""
												srcset=""
											/>
										</i>
									</button>

									<button
										@click="method = 'mbway'"
										:class="
											method === 'mbway'
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-3 mb-2 btn-icon"
										type="button"
										data-bs-toggle="tooltip"
										data-bs-placement="right"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="MbWay"
									>
										<i class="">
											<img
												width="22"
												src="/assets/img/logos/mbway.png"
												alt=""
												srcset=""
											/>
										</i>
									</button>
								</div>
							</div>
							<button
								class="btn btn-secondary d-block w-100"
								type="submit"
								@click="next()"
							>
								<span>
									Send
									<span v-if="method"
										>to
										<span class="text-capitalize">
											{{ method }}
										</span>
									</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
