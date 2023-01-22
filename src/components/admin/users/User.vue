<script setup>
	import { onMounted, ref } from "vue";
	import moment from "moment";
	import axios from "axios";
	import { alert, util } from "@/stores/utility";

	const env = import.meta.env;
	const props = defineProps({
		user: {
			required: true,
		},
	});
	const addBalance = ref(false);

	async function deposit() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users`,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				// users.value = response.data;
				alert.success();
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function getTime() {
		const fromNow = moment(props.user.createdAt).fromNow();
		const timer = fromNow.split(" ")[1];

		let check = ["minutes", "seconds", "hours"].find((e) => timer == e);

		if (!check) {
			return moment(props.user.createdAt).format("LLL");
		}

		return fromNow;
	}

	function balance() {
		return util.format(props.user.balance.amount, 2, ".", ",");
	}

	function status() {
		return props.user.status || "New";
	}

	onMounted(() => {
		// loadUsers();
	});
</script>

<template>
	<div class="col-lg-4 col-md-6 col-12 user">
		<!-- Card -->
		<div class="card mb-4">
			<!-- Card Body -->
			<div class="card-body">
				<div class="text-center">
					<img
						:src="user.imgUrl || util.avatar"
						class="rounded-circle avatar-xl mb-3"
						width="80"
						alt="img"
					/>
					<h4 class="mb-1">{{ user.name }}</h4>
					<p class="mb-0 fs-6">
						<i class="fe fe-map-pin me-1"></i>
						{{ user.country }}
					</p>
				</div>

				<div class="border-bottom py-2 mt-4 fs-6">
					<div class="d-flex justify-content-between">
						<span>Balance</span>
						<span class="text-success">
							<button
								@click="addBalance = !addBalance"
								class="btn btn-sm p-1 me-1 btn-outline-secondary rounded-circle"
							>
								<i
									:class="addBalance ? 'bx-minus' : 'bx-plus'"
									class="bx"
								></i>
							</button>
							${{ balance() }}
						</span>
					</div>

					<div v-if="addBalance">
						<form
							@submit.prevent="deposit()"
							class="d-flex align-items-end mt-3"
						>
							<div class="form-group me-3">
								<label for="amount" class="form-label"
									>Amount
								</label>
								<input
									type="text"
									class="form-control form-control-sm"
								/>
							</div>
							<div>
								<button
									class="btn btn-sm btn-outline-secondary"
								>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>

				<div
					class="d-flex justify-content-between border-bottom py-2 mt-2 fs-6"
				>
					<span>Status</span>
					<span class="text-success"> {{ status() }} </span>
				</div>

				<div class="d-flex justify-content-between pt-2 mt-2 fs-6">
					<span class="me-3">Registered</span>
					<span class="text-dark"> {{ getTime() }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
