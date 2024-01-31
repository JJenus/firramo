<script setup>
	import { onMounted, ref } from "vue";
	import UserVue from "@/components/admin/users/User.vue";
	import { util } from "../../stores/utility";
	import axios from "axios";

	const env = import.meta.env;
	const users = ref([]);
	const searchKey = ref("");
	const page = ref(0);
	const loading = ref(false);
	const loadMoreUsers = ref(true);
	const searching = ref(false);
	const aSearch = ref(false);

	function search() {
		if (searchKey.value.length === 0) {
			page.value = 0;
			users.value = [];
			console.log("Reloading");
			loadUsers();
		}
		if (searching.value || searchKey.value.length < 4) {
			if (searching.value) {
				util.search(".user", searchKey.value);
			}
			return;
		}
		aSearch.value = true;

		searching.value = true;

		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/search?q=${searchKey.value}`,
		};

		axios
			.request(config)
			.then((response) => {
				const result = response.data.filter((user) => {
					return user.roles[0].name !== "ADMIN";
				});
				users.value = [];
				users.value.push(...result);
				console.log("Search", result);
				util.search(".user", searchKey.value);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				searching.value = false;
			});
	}
	async function loadUsers() {
		loading.value = true;
		page.value += 1;
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/page/${page.value}`,
		};

		axios
			.request(config)
			.then((response) => {
				const result = response.data.filter((user) => {
					return user.roles[0].name !== "ADMIN";
				});

				if (result.length == 0) {
					loadMoreUsers.value = false;
				} else {
					loadMoreUsers.value = true;
				}
				users.value.push(...result);
				aSearch.value = false;
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}
	onMounted(() => {
		loadUsers();
	});
</script>

<template>
	<div
		class="ps-md-3 d-flex justify-content-between align-items-end ps-lg-0 mt-md-2 pt-md-4 pb-md-2"
	>
		<div class="me-5">
			<h1 class="h2 pt-xl-1 mb-3 pb-2 pb-lg-3">
				Users ({{ users.length }})
			</h1>
		</div>
		<div>
			<form class="input-group mb-4">
				<input
					type="text"
					placeholder="Search users..."
					class="form-control rounded pe-5"
					@keyup="search()"
					v-model="searchKey"
				/>
				<i
					v-if="!searching"
					class="bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 fs-lg zindex-5"
				></i>
				<span
					v-else
					class="position-absolute top-50 end-0 translate-middle-y me-3 fs-lg zindex-5"
				>
					<span class="spinner-border spinner-border-sm"></span>
				</span>
			</form>
		</div>
	</div>

	<div class="row">
		<UserVue v-for="user in users" :user="user" :key="user.id"></UserVue>
	</div>
	<div
		v-if="users.length < 1"
		class="d-flex align-items-center justify-content-center text-center text-muted"
	>
		<span v-if="loading" class="spinner-border spinner-border-lg"></span>
		<span v-else>No user found</span>
	</div>
	<div
		v-else-if="loadMoreUsers"
		class="d-flex align-items-center justify-content-center mt-3"
	>
		<button
			v-if="!aSearch"
			:class="loading ? 'disabled' : ''"
			@click="loadUsers()"
			class="btn btn-primary"
		>
			<span
				v-if="loading"
				class="spinner-border spinner-border-sm"
			></span>
			<span v-else>Load more</span>
		</button>
	</div>
</template>
