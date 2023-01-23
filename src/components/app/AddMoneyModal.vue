<script setup>
	import { onMounted } from "vue";
	const env = import.meta.env;
	const AppName = env.VITE_APP_NAME;

	onMounted(() => {
		
	});
</script>

<template>
	<div class="modal fade" id="add-money-modal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content border-dark border th-rounded">
				<div class="modal-header">
					<div
						class="d-flex align-items-center justify-content-center w-100 fs-5"
						id="staticBackdropLabel"
					>
						<i class="bx bx-wallet me-2 fs-3"></i> Add money
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
									class="form-control text-dark text-center fw-bold form-control-lg bg-transparent"
									type="text"
									data-format='{"numeral": true}'
									placeholder="0.0"
								/>
							</div>
							<div class="mb-3">
								<label for="cardFormat" class="form-label"
									>Card number</label
								>
								<div
									class="d-flex align-items-center border rounded-3"
								>
									<input
										type="text"
										class="form-control border-0 bg-transparent shadow-none"
										id="cardFormat"
										data-format='{"creditCard": true}'
										placeholder="Enter credit card number"
									/>
									<div class="p-3">
										<div class="credit-card-icon"></div>
									</div>
								</div>
							</div>

							<div class="mb-3 row">
								<div class="col-6">
									<label for="cardExpr" class="form-label">
										Expr
									</label>

									<input
										type="text"
										class="form-control"
										id="cardExpr"
										data-format='{"date": true, "datePattern": ["m", "y"]}'
										placeholder="mm/yy"
									/>
								</div>
								<div class="col-6">
									<label for="cardCVV" class="form-label">
										Cvv
									</label>

									<input
										type="text"
										class="form-control"
										id="cardCVV"
										data-format='{"numericOnly": true, "blocks": [3]}'
										placeholder="123"
									/>
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
