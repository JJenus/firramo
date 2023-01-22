<script setup>
	import { onMounted, ref } from "vue";
	import axios from "axios";
	import Testimonial from "../../components/admin/testimonials/Testimonial.vue";

	import { util } from "../../stores/utility";
	import { alert } from "../../stores/utility";

	const env = import.meta.env;
	const settings = ref({});
	const searchKey = ref(null);

	const loading = ref(false);

	function save($event) {
		if (!$event.target.checkValidity()) {
			return;
		}
		loading.value = true;
		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/settings`,
			data: form.value,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				loadSettings();
				alert.success();
				$event.target[0].reset();
			})
			.catch(function (error) {
				console.log(error);
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
				console.log(response.data);
				settings.value = response.data;
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
</template>
