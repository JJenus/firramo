<script setup>
	const openChat = () => {
		const telegramLink = "https://t.me/Firramosupport";
		window.open(telegramLink, "_blank");
	};
</script>
<template>
	<div
		class="position-fixed bottom-0 end-0 d-flex justify-content-center align-items-center"
	>
		<button @click="openChat()" class="btn btn btn-secondary shadow-info rounded">
			<span
				>Chat with us
				<img
					width="20"
					height="20"
					src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png"
					alt="👋"
					class="emoji shake"
			/></span>
		</button>
		<button
			style="min-height: 60px; min-width: 60px"
			class="m-3 custom-button btn btn-secondary shadow-info btn-icon rounded-circle"
			@click="openChat()"
		>
			<!-- <img
				class="w-75"
				src="/assets/img/telegram_Logo.svg.png"
				alt="chat"
			/> -->
		</button>
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
	@keyframes shake {
		0% {
			transform: translateX(0);
		}
		20% {
			transform: translateX(-5px) rotate(-5deg);
		}
		40% {
			transform: translateX(5px) rotate(5deg);
		}
		60% {
			transform: translateX(-5px) rotate(-5deg);
		}
		80% {
			transform: translateX(5px) rotate(5deg);
		}
		100% {
			transform: translateX(0) rotate(0);
		}
	}

	/* Apply animation to the second span on button hover */
	button:hover img.shake {
		animation: shake 0.9s ease-in-out infinite;
	}
</style>
