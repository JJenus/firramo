<script setup>
	import { user } from "@/stores/user";
	import { alert } from "../../stores/utility";
</script>

<template>
	<div
		class="ps-md-3 d-flex justify-content-between align-items-top ps-lg-0 mt-md-2 pt-md-4 pb-md-2"
	>
		<div>
			<h1 class="h2 pt-xl-1 mb-3 pb-2 pb-lg-3">Users</h1>
			<h2 class="h6 text-primary mb-4">All users</h2>
		</div>
		<div>
			<form class="input-group mb-4">
				<input
					type="text"
					placeholder="Search the blog..."
					class="form-control rounded pe-5"
				/>
				<i
					class="bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 fs-lg zindex-5"
				></i>
			</form>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-4 col-md-6 col-12">
			<!-- Card -->
			<div class="card mb-4">
				<!-- Card Body -->
				<div class="card-body">
					<div class="text-center">
						<img
							src="/assets/img/team/01.jpg"
							class="rounded-circle avatar-xl mb-3"
							width="80"
							alt="img"
						/>
						<h4 class="mb-1">Wade Warren</h4>
						<p class="mb-0 fs-6">
							<i class="fe fe-map-pin me-1"></i>United States
						</p>
					</div>

					<div
						class="d-flex justify-content-between border-bottom py-2 mt-4 fs-6"
					>
						<span>Balance</span>
						<span class="text-success">
							<button
								class="btn btn-sm p-1 me-1 btn-outline-secondary rounded-circle"
							>
								<i class="bx bx-plus"></i>
							</button>
							$10,000
						</span>
					</div>

					<div
						class="d-flex justify-content-between border-bottom py-2 mt-2 fs-6"
					>
						<span>Status</span>
						<span class="text-success"> New </span>
					</div>

					<div
						class="d-flex justify-content-between border-bottom py-2 mt-2 fs-6"
					>
						<span>Registered</span>
						<span class="text-dark"> 3/12/2020</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
