<template>
	<div
		id="quick-trans"
		class="collapse w-100 overflow-hidden d-lg-block vh-fitted position-sticky p-5 th-rounded bg-white"
	>
		<button
			class="btn-close m-3 top-0 d-lg-none position-absolute"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#quick-trans"
		></button>
		<h3 class="fs-6 mb-3">Quick transactions</h3>
		<div class="d-flex mb-4">
			<button class="btn th-rounded p-2 btn-outline-secondary">
				<div
					class="d-flex text-xxs flex-column fs-xs align-item-center justify-content-center"
				>
					<i class="bx bx-transfer fs-2 mb-1"></i>
					Manual
				</div>
			</button>
			<div class="ms-4">
				<button class="btn th-rounded fs-6 p-2 btn-outline-secondary">
					<div class="d-flex text-xxs flex-column align-items-center">
						<span
							class="btn btn-outline-info mb-2 btn-icon rounded-circle"
						>
							AJ
						</span>
						Alexander
					</div>
				</button>
			</div>
		</div>

		<h3
			class="h6 mb-0 mt-3 d-flex align-items-center justify-content-between"
		>
			<span> Recent activity </span>
			<button class="btn btn-sm btn-outline-secondary p-2 py-1">
				show all
			</button>
		</h3>
		<small class="fw-bold fs-xs mb-3">Today</small>
		<!-- Pricing list view (List group) -->
		<ul class="list-group list-group-flush">
			<!-- Pricing plan -->
			<li
				class="list-group-item mb-n2 border-0 d-flex flex-sm-row align-items-center justify-content-between p-3"
			>
				<div class="d-flex align-items-center">
					<button class="btn p-1 py-0 btn-outline-secondary me-2">
						<i class="bx bx-upload fs-5"></i>
					</button>
					<h4 class="fs-base fs-sm fw-semibold text-nowrap ps-1 mb-0">
						<span class="text-muted">To</span> Alexander
					</h4>
				</div>
				<div class="fw-bold fs-sm">- 120 EUR</div>
			</li>

			<!-- Pricing plan -->
			<li
				class="list-group-item d-flex flex-sm-row align-items-center justify-content-between p-3"
			>
				<div class="d-flex align-items-center">
					<button class="btn p-1 py-0 btn-outline-secondary me-2">
						<i class="bx bx-transfer fs-5"></i>
					</button>
					<h4 class="fs-base fs-sm fw-semibold text-nowrap ps-1 mb-0">
						<span class="text-muted">From</span> King
					</h4>
				</div>
				<div class="fw-bold fs-sm">+ 120 EUR</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.text-xxs {
		font-size: xx-small;
	}

	.th-rounded {
		border-radius: 15px !important;
	}

	.vh-fitted {
		height: 100vh !important;
		/* top: 30px; */
	}

	.btn-close{
		right: 0;
	}

	@media (min-width: 768px) {
		.vh-fitted {
			height: calc(100vh - 80px) !important;
			top: 30px;
		}
	}
</style>
