<script setup>
	import { onMounted } from "vue";
	import { RouterView } from "vue-router";

	async function mountChat() {
		const plugin = document.createElement("script");
		plugin.setAttribute(
			"src",
			"//code.tidio.co/oje9p3zweqxnqqcawyqj6y0krt7adfbb.js"
		);
		plugin.async = true;
		document.head.appendChild(plugin);
	}

	onMounted(() => {
		mountChat();
	});
</script>

<template>
	<RouterView />
</template>
