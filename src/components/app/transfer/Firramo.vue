<script setup>
	import { inject, onMounted, ref } from "vue";
	import axios from "axios";
	import { alert } from "@/stores/utility";

	const env = import.meta.env;

	const props = defineProps({
		data: {
			required: true,
		},
		method: {
			required: true,
		},
	});

	function validateMethod() {
		let allowed = props.method;

		const r =
			allowed === "skrill" || allowed == "paypal" || allowed == "venmo";
		window.debug.log("Allowed:", allowed, r);

		return r;
	}

	const paid = inject("makepay");

	const settings = inject("settings");
	const form = inject("formpay", {
		email: null,
		name: "",
		amount: null,
		bank: "",
		account: "",
	});
	const user = inject("user");
	const users = ref([]);
	const isValid = ref(false);
	const next = ref(false);
	const receiver = ref({});
	const loading = ref(false);

	function submit() {
		loading.value = true;
		const transfer = {
			userId: user.value.id,
			name: form.value.name,
			toUserId: receiver.value.id,
			amount: form.value.amount,
			currency: settings.value.currency,
			status: "processing",
			switch: form.value.email,
			bank: form.value.bank,
		};

		// window.debug.log(transfer);

		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/users/transfer`,
			data: transfer,
		};
		axios
			.request(config)
			.then((res) => {
				const data = res.data;
				// window.debug.log("yes: ", res);

				user.value.balance.amount =
					Number(user.value.balance.amount) -
					Number(form.value.amount);
				next.value = false;
				form.value.amount = null;
				form.value.email = null;

				alert.success("Processing!");
				next.value = false;
				paid();
			})
			.catch((err) => {
				alert.error("Failed");
				window.debug.log(err);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	function loadUsers() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users`,
		};
		axios
			.request(config)
			.then((res) => {
				const data = res.data;
				users.value = data;
				// window.debug.log(data);
			})
			.catch((err) => {
				window.debug.log(err);
			});
	}

	function checkMail() {
		let found = users.value.find((user) => {
			return user.email == form.value.email;
		});

		if (found) {
			isValid.value = true;
			receiver.value = found;
			form.value.name = receiver.value.name;
			// window.debug.log(found);
		} else {
			isValid.value = false;
		}
	}

	onMounted(() => {
		loadUsers();
		window.debug.log("DATA", props.data);
		// form.value.amount = props.data.amount;
		// form.value.email = props.data.email;
	});
</script>

<template>
	<div>
		<div v-show="!next">
			<div v-if="method == 'IBAN'">
				<div>
					<label class="form-label" for="reciever-email">Name</label>
					<input
						type="text"
						class="form-control mb-3"
						v-model="form.name"
					/>
				</div>
				<div>
					<label class="form-label" for="reciever-email">IBAN</label>
					<input
						type="text"
						class="form-control mb-3"
						v-model="form.account"
					/>
				</div>
				<div>
					<label class="form-label" for="swift">Swift/BIC</label>
					<input
						type="text"
						class="form-control mb-3"
						v-model="form.email"
					/>
				</div>
				<!-- <div>
					<label class="form-label" for="bank">Bank</label>
					<input
						type="text"
						class="form-control mb-3"
						v-model="form.bank"
					/>
				</div> -->
			</div>
			<div v-else-if="method !== 'card'">
				<label class="form-label" for="reciever-email"
					>Reciever's email</label
				>
				<input
					type="text"
					class="form-control mb-3"
					v-model="form.email"
					@keyup="checkMail()"
				/>
				<p
					v-if="method == 'Firramo' && !isValid && form.email != null"
					class="text-danger fs-xs"
				>
					User doesn't exist
				</p>
			</div>
			<button
				class="btn btn-secondary d-block w-100"
				type="submit"
				@click="next = true"
			>
				Confirm
			</button>
		</div>

		<form v-show="next" @submit.prevent="submit()">
			<div class="d-flex flex-column mb-4 borider rounded pb-1 p-0">
				<div class="table-responsive">
					<table class="table table-borderless">
						<tr>
							<td class="pb-1 p-0">Amount:</td>
							<td class="fw-bold ps-2 pb-1 p-0">
								{{ form.amount }}
							</td>
						</tr>
						<tbody v-if="method == 'IBAN'">
							<tr>
								<td class="pb-1 p-0">Name:</td>
								<td class="fw-bold ps-2 pb-1 p-0">
									{{ form.name }}
								</td>
							</tr>
							<tr>
								<td class="pb-1 p-0">IBAN:</td>
								<td class="fw-bold ps-2 pb-1 p-0">
									{{ form.account }}
								</td>
							</tr>
							<tr>
								<td class="pb-1 p-0">Swift/BIC:</td>
								<td class="fw-bold ps-2 pb-1 p-0">
									{{ form.email }}
								</td>
							</tr>
						</tbody>
						<tbody v-if="method == 'Firramo'">
							<tr>
								<td class="pb-1 p-0">Name:</td>
								<td class="fw-bold ps-2 pb-1 p-0">
									{{ form.name }}
								</td>
							</tr>
							<tr>
								<td class="pb-1 p-0">Email:</td>
								<td class="fw-bold ps-2 pb-1 p-0">
									{{ form.email }}
								</td>
							</tr>
						</tbody>
						<tbody v-if="validateMethod()">
							<tr>
								<td class="pb-1 p-0">Email:</td>
								<td class="fw-bold ps-2 pb-1 p-0">
									{{ form.email }}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- <span class="mb-2">Amount: {{ form.amount }} </span>
				<span class="mb-2">Name: {{ receiver.name }}</span>
				<span>Email: {{ receiver.email }}</span> -->
			</div>
			<div class="d-flex">
				<button
					class="btn btn-outline-primary d-block me-2"
					type="button"
					@click="next = false"
				>
					Back
				</button>
				<button
					class="btn btn-secondary d-block"
					type="submit"
					:class="loading ? 'disabled' : ''"
				>
					<span
						v-if="loading"
						class="spinner-border-sm spinner-border"
					></span>

					<span v-else>Send</span>
				</button>
			</div>
		</form>
	</div>
</template>
