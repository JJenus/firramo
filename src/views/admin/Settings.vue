<script setup>
	import { onMounted, ref } from "vue";
	import axios from "axios";

	import { alert, util } from "@/stores/utility";

	const env = import.meta.env;
	const settings = ref({
		currency: "USD",
		language: "en",
		currencySymbol: "$",
	});

	const currencies = {
		USD: {
			code: "USD",
			symbol: "$",
		},
		GBR: {
			code: "GBR",
			symbol: "£",
		},
		EUR: {
			code: "EUR",
			symbol: "€",
		},
	};
	const selectedCurrency = ref(null);
	const selectedLang = ref(null);

	const lang = ref();
	const currency = ref();

	const searchKey = ref(null);

	const loading = ref(false);

	function save($event) {
		if (!$event.target.checkValidity()) {
			return;
		}

		settings.value.currency = currencies[selectedCurrency.value].code;
		settings.value.currencySymbol =
			currencies[selectedCurrency.value].symbol;
		settings.value.language = selectedLang.value;

		console.log(settings.value);

		loading.value = true;
		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/settings`,
			data: settings.value,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				settings.value = response.data;
				alert.success();
			})
			.catch(function (error) {
				alert.error("Failed");
			})
			.finally(() => {
				loading.value = false;
			});
	}

	async function loadSettings() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/settings`,
		};

		axios
			.request(config)
			.then((response) => {
				settings.value = response.data;
				selectedCurrency.value = settings.value.currency;
				selectedLang.value = settings.value.language;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function search() {
		console.log(searchKey.value);
		util.search(".testimony", searchKey.value);
	}

	onMounted(() => {
		loadSettings();
	});
</script>

<template>
	<div
		class="pis-md-3 d-flex justify-content-between align-items-end ps-lg-0 mt-md-2 pt-md-4 pb-md-2"
	>
		<div class="me-5">
			<h1 class="h2 pt-xl-1 mb-3 pb-2 pb-lg-3">Settings</h1>
		</div>
	</div>
	<div>
		<form
			@submit.prevent="save($event)"
			class="needs-validation border-bottom pb-3 pb-lg-4"
			novalidate
		>
			<div class="row pb-2 my-3">
				<div class="col-sm-6 mb-4">
					<label for="np" class="form-label fs-base">Currency</label>
					<select
						ref="currency"
						v-model="selectedCurrency"
						class="form-select"
					>
						<option value="USD">USD ($)</option>
						<option value="GBR">GBR (£)</option>
						<option value="EUR">EUR (€)</option>
					</select>

					<div
						class="invalid-tooltip position-absolute top-100 start-0"
					>
						Please select currency!
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<label for="np" class="form-label fs-base">Language</label>
					<select
						ref="lang"
						v-model="selectedLang"
						class="form-select"
					>
						<option value="en">English (en)</option>
						<option value="fr">French (fr)</option>
						<option value="es">Spanish (es)</option>
					</select>
					<div
						class="invalid-tooltip position-absolute top-100 start-0"
					>
						Select a language
					</div>
				</div>
			</div>
			<div class="d-flex mb-3">
				<button type="reset" class="btn btn-secondary me-3">
					Cancel
				</button>
				<button
					:class="loading ? 'disabled' : ''"
					type="submit"
					class="btn btn-primary"
				>
					<span v-if="!loading"> Save changes </span>
					<span v-else>
						<span
							class="spinner-grow spinner-grow-sm"
							role="status"
							aria-hidden="true"
						></span>
						Please wait...
					</span>
				</button>
			</div>
		</form>
	</div>
</template>
