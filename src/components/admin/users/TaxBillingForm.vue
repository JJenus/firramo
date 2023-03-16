<script setup>
	import { inject, ref } from "vue";
	import { alert } from "@/stores/utility";
	import axios from "axios";

	const env = import.meta.env;

	const tax = inject("billingTax", {
		title: null,
		amount: null,
		description: null,
	});

	const loading = ref(false);

	function save($event) {
		if (!$event.target.checkValidity()) {
			return;
		}

		loading.value = true;
		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/users/tax`,
			data: tax.value,
		};

		axios
			.request(config)
			.then((response) => {
				// console.log(response.data);
				tax = response.data;
				alert.success();
			})
			.catch(function (error) {
				console.log(error);
				alert.error("Failed");
			})
			.finally(() => {
				loading.value = false;
			});
	}
</script>

<template>
	<div class="mt-3">
		<h6>Withdrawal Billing</h6>
		<form
			@submit.prevent="save($event)"
			class="needs-validation"
			novalidate
		>
			<div class="form-floating mb-4">
				<input
					class="form-control"
					type="text"
					id="fl-text"
					placeholder="Name"
					v-model="tax.title"
					required
				/>
				<label for="fl-text">Title</label>
			</div>
			<div class="form-floating mb-4">
				<input
					class="form-control"
					type="text"
					id="fl-text"
					placeholder="Name"
					v-model="tax.amount"
					required
				/>
				<label for="fl-text">Amount</label>
			</div>
			<!-- Floating label: Textarea -->
			<div class="form-floating mb-3">
				<textarea
					class="form-control"
					id="fl-textarea"
					style="height: 8rem"
					placeholder="Your Testimony"
					v-model="tax.description"
				></textarea>
				<label for="fl-textarea">Description</label>
			</div>

			<div class="col-12 col-md-2 col-lg-1 d-flex">
				<button
					:class="loading ? 'disabled' : ''"
					type="reset"
					class="btn btn-outline-danger me-3 btn-sm"
				>
					Reset
				</button>
				<button
					:class="loading ? 'disabled' : ''"
					type="submit"
					class="btn btn-outline-secondary btn-sm"
				>
					<span v-if="!loading"> Save </span>
					<span v-else>
						<span
							class="spinner-grow spinner-grow-sm"
							role="status"
							aria-hidden="true"
						></span>
					</span>
				</button>
			</div>
		</form>
	</div>
</template>
