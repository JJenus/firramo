<script setup>
	import { RouterView } from "vue-router";

	window.$crisp = [];
	window.CRISP_WEBSITE_ID = "0a669860-f587-4fce-884b-6856e86f1971";
	(function () {
		const d = document;
		const s = d.createElement("script");
		s.src = "https://client.crisp.chat/l.js";
		s.async = 1;
		d.getElementsByTagName("head")[0].appendChild(s);
	})();
</script>

<template>
	<RouterView />
</template>
