<script setup>
	import { onMounted } from "vue";
	import { RouterView } from "vue-router";

	async function mountChat() {
		window.$crisp = [];
		window.CRISP_WEBSITE_ID = "8ec38427-7bdf-4dec-bb90-ef3e9b628802";

		const plugin = document.createElement("script");

		plugin.setAttribute("src", "https://client.crisp.chat/l.js");
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
