<script setup>
	import { inject, onMounted, provide, ref } from "vue";
	import { alert, util } from "../../stores/utility";
	import currency from "currency.js";
	import Firramo from "./transfer/Firramo.vue";
	import Tax from "./transfer/Tax.vue";

	const env = import.meta.env;
	const AppName = env.VITE_APP_NAME;
	const method = ref(null);
	const user = inject("user");
	const makePayment = ref(null);

	const form = ref({
		amount: "0.00",
		account: null,
		email: "",
		bank: method.value,
		name: "",
	});

	function paid() {
		makePayment.value = false;
		form.value.account = null;
		form.value.email = null;
		form.value.bank = null;
		form.value.amount = "0.00";
		form.value.name = null;
	}

	function clearBack() {
		makePayment.value = false;
		form.value.email = null;
		form.value.bank = null;
		form.value.account = null;
		form.value.name = null;
		confirm.value = false;
	}

	function setMethod(tMethod) {
		method.value = tMethod;
		clearBack();
		form.value.bank = tMethod;
	}
	const confirm = ref(false);
	provide("makepay", { paid, confirm });
	provide("formpay", form);

	function money(money) {
		return currency(money, {
			symbol: "",
		}).format();
	}

	const formatMoney = () => {
		console.log("Formatting", form.value.amount);
		form.value.amount = money(form.value.amount);
	};

	function next() {
		form.value.bank = method.value;
		if (method.value === null) {
			alert.error("Payment method", "Select preferred method");
			return;
		} else if (
			currency(form.value.amount).value <= 0 ||
			currency(form.value.amount).value >
				currency(user.value.balance.amount).value
		) {
			// console.log(form.value.amount);
			alert.error(
				"Invalid amount",
				`Amount must be greater than 0 and not be more than current balance (${user.value.balance.amount})`
			);
			return;
		}

		console.log("Amount: " + form.value.account);

		if (method.value === AppName) {
			makePayment.value = true;
		} else if (user.value.status === "pending") {
			alert.info(
				"Pending verification",
				"Your verification is being processed. Please contact support if it's more than 48 hours."
			);
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
							<h5 class="text-capitalize ms-n3">
								<a
									class="btn-link"
									href="#"
									@click="makePayment = false"
								>
									<i class="bx bx-left-arrow-alt me-2"></i>
								</a>
								{{ method }}
							</h5>
							<Firramo
								v-if="user.allowTransfer"
								:data="form"
								:method="method"
							></Firramo>
							<Tax v-else></Tax>
						</div>

						<div v-show="!makePayment">
							<div class="mb-3">
								<label class="form-label" for="email1"
									>Amount</label
								>
								<!-- data-format='{"numeral": true}' -->
								<input
									@change="formatMoney()"
									class="form-control text-dark text-center fw-bold form-control-lg"
									type="text"
									data-format='{"numeral": true}'
									v-model="form.amount"
								/>
							</div>
							<div class="mb-3">
								<h5 class="mb-2 fs-6">Send to</h5>
								<div
									class="d-flex flex-wrap justify-content-center"
								>
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
										@click="setMethod('paypal')"
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
										@click="setMethod('venmo')"
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
										@click="setMethod('card')"
										:class="
											method === 'card'
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="d-none btn me-3 mb-2 btn-icon"
										type="button"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="card"
									>
										<i class="bx bx-credit-card-alt"></i>
									</button>

									<button
										@click="setMethod('skrill')"
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
										@click="setMethod('IBAN')"
										:class="
											method === 'IBAN'
												? 'btn-outline-primary'
												: 'btn-outline-secondary'
										"
										class="btn me-3 mb-2 btn-icon"
										type="button"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										data-bs-custom-class="custom-tooltip"
										data-bs-title="IBAN"
									>
										<i class="">
											<img
												width="36"
												src="/assets/img/logos/iban.png"
												alt=""
												srcset=""
											/>
										</i>
									</button>

									<button
										@click="setMethod('mbway')"
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
