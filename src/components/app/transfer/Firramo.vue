<script setup>
	const props = defineProps({
		data: {
			required: true,
		},
	});
	function next() {
        
    }
</script>

<template>
	<div>
		<form @submit.prevent="next()">
			<label class="form-label" for="reciever-email"
				>Reciever's email</label
			>
			<input type="text" class="form-control mb-3" id="reciever-email" />
			<p class="text-danger fs-xs">User doesn't exist</p>
			<button class="btn btn-secondary d-block w-100" type="submit">
				Confirm
			</button>
		</form>
	</div>
</template>
