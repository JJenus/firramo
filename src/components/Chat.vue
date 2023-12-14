<script setup>
	import { ref } from "vue";
	import "animate.css";

	const disappear = ref("");

	setTimeout(() => {
		disappear.value = "";
		setTimeout(() => {
			// disappear.value = "d-none";
		}, 1000);
	}, 5000);

	const openChat = () => {
		const telegramLink = "https://t.me/Firramosupport";
		window.open(telegramLink, "_blank");
	};
</script>
<template>
	<div
		style="z-index: 8"
		class="position-fixed bottom-0 end-0 d-flex justify-content-end align-items-center"
	>
		<button
			@click="openChat()"
			:class="disappear"
			class="btn btn btn-secondary shadow-info rounded animate__lightSpeedOutRight animate__animated animate__delay-5s"
		>
			<span
				>Chat with us
				<img
					width="20"
					height="20"
					src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png"
					alt="👋"
					class="emoji animate__tada animate__infinite animate__animated"
			/></span>
		</button>
		<button
			style="min-height: 60px; min-width: 60px; z-index: 4"
			class="m-3 custom-button btn btn-secondary shadow-info btn-icon rounded-circle animate__heartBeat animate__animated animate__delay-3s"
			@click="openChat()"
		></button>
	</div>
</template>

<style scoped>
	.custom-button {
		background-image: url("/assets/img/telegram_Logo.svg.png"); /* Replace 'path_to_your_image.jpg' with your image path */
		background-size: contain; /* Adjusts the size of the background image */
		background-repeat: no-repeat; /* Ensures the image doesn't repeat */
		/* You can add more styling like padding, width, height, etc. */
		/* padding: 15px 20px; */
		/* color: #fff; Text color */
		cursor: pointer; /* Shows pointer cursor on hover */
	}
</style>
