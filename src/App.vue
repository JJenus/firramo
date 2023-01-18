<script setup>
	import { RouterView } from "vue-router";
	import PerfectScrollbar from "perfect-scrollbar";
	import { onMounted } from "vue";

	const body = document.querySelector("#body");
	const ps = new PerfectScrollbar(body);

	ps.update();

	onMounted(() => {
		const tooltipTriggerList = document.querySelectorAll(
			'[data-bs-toggle="tooltip"]'
		);

		const tooltipList = [...tooltipTriggerList].map(
			(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
		);
	});
</script>

<template>
	<RouterView />
</template>

<style src="perfect-scrollbar/css/perfect-scrollbar.css">
	/* @import "perfect-scrollbar/css/perfect-scrollbar.css"; */
</style>
