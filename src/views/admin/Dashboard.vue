<script setup>
	import { user } from "@/stores/user";
	import { alert } from "../../stores/utility";
</script>

<template>
	<div class="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
		<h1 class="h2 pt-xl-1 mb-3 pb-2 pb-lg-3">Dashboard</h1>
		<h2 class="h5 text-primary mb-4">Overview</h2>
	</div>

	<div class="row">
		<div class="col-lg-4 col-md-12 col-12">
			<!-- Card -->
			<div class="card mb-4">
				<!-- Card Body -->
				<div class="p-4">
					<span class="btn-icon btn btn-outline-primary rounded-3">
						<i class="bx bx-dollar-circle fs-3"></i>
					</span>
					<h2 class="h1 fw-bold mb-0 mt-4 lh-1">$3,210</h2>
					<p>Total Balance</p>
					<div class="progress bg-light-primary" style="height: 2px">
						<div
							class="progress-bar"
							role="progressbar"
							style="width: 65%"
							aria-valuenow="65"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-12 col-12">
			<!-- Card Body -->
			<div class="card mb-4">
				<!-- Card Body -->
				<div class="p-4">
					<span class="btn-icon btn btn-outline-info rounded-3">
						<i class="bx bx-user fs-3"></i>
					</span>
					<h2 class="h1 fw-bold mb-0 mt-4 lh-1">3,800.00</h2>
					<p>Total Users</p>
					<div class="progress bg-light-danger" style="height: 2px">
						<div
							class="progress-bar bg-info"
							role="progressbar"
							style="width: 45%"
							aria-valuenow="45"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-12 col-12">
			<!-- Card Body -->
			<div class="card mb-4">
				<!-- Card Body -->
				<div class="p-4">
					<span class="btn-icon btn btn-outline-warning rounded-3">
						<i class="bx bx-credit-card-alt fs-3"></i>
					</span>
					<h2 class="h1 fw-bold mb-0 mt-4 lh-1">$10,800.00</h2>

					<p>Total Deposit</p>
					<div class="progress bg-light-warning" style="height: 2px">
						<div
							class="progress-bar bg-warning"
							role="progressbar"
							style="width: 35%"
							aria-valuenow="35"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
