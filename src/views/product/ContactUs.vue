<script setup>
	import Header from "@/components/product/Header.vue";
	import Footer from "@/components/Footer.vue";
	import { onMounted, ref } from "vue";

	const email = ref("support@firramo.com");
	const AppName = import.meta.env.VITE_APP_NAME;
	let chat = null;

	function openChat() {
		if (chat !== null) {
			chat.click();
		} else{
			console.log("Chat is empty", chat);
			chat = document.querySelector(".cc-dc5e");
		}

		console.log("Chat clicked");
	}

	onMounted(() => {
		chat = document.querySelector(".cc-dc5e");
	});
</script>

<template>
	<main class="page-wrapper">
		<!-- Navbar -->
		<!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->

		<Header></Header>

		<!-- Page content -->
		<section
			class="bg-size-cover bg-position-bottom-center bg-repeat-0 py-5"
			style="background-image: url(assets/img/contacts/bg.svg)"
		>
			<div class="container pt-5 pb-lg-4 pb-xl-5">
				<!-- Breadcrumb -->
				<nav class="pt-lg-4" aria-label="breadcrumb">
					<ol class="breadcrumb mb-0">
						<li class="breadcrumb-item">
							<a href="/"
								><i class="bx bx-home-alt fs-lg me-1"></i
								>Home</a
							>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							Contacts
						</li>
					</ol>
				</nav>

				<div class="row pt-md-2 pt-lg-5 pb-2 pb-md-4">
					<div class="col-xxl-4 col-xl-5 col-lg-6 pt-3 mt-3">
						<h1 class="h3 mb-2">Want to work with us?</h1>
						<h2
							class="display-1 text-gradient-primary pb-sm-2 pb-md-3 mb-3"
						>
							Let's talk!
						</h2>
						<div class="nav d-block lead pt-lg-5">
							<a
								href="#"
								class="nav-link fw-normal text-decoration-underline p-0 mb-4"
								>{{ email }}</a
							>
						</div>
					</div>
					<div
						class="col-lg-6 offset-xl-1 offset-xxl-2 pt-3 pt-md-4 pt-lg-3 mt-3"
					>
						<div class="d-sm-flex">
							<div
								class="d-flex flex-column w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5 pb-3 pb-sm-0 mb-4 mb-sm-0"
							>
								<div class="card-body p-0">
									<div
										class="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3"
									>
										<i class="bx bx-envelope"></i>
									</div>
									<p class="pb-2 pb-sm-3 mb-3">
										Please feel free to drop us a line. We
										will respond as soon as possible.
									</p>
								</div>
								<div class="card-footer border-0 p-0">
									<a
										href="mailto:support@firramo.com"
										class="btn btn-lg btn-primary"
										>Send email</a
									>
								</div>
							</div>
							<div
								class="vr text-border d-none d-sm-inline-block m-4"
							></div>
							<div
								class="card w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5"
							>
								<div class="card-body p-0">
									<div
										class="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3"
									>
										<i
											class="bx bx-message-square-minus"
										></i>
									</div>
									<p class="pb-2 pb-sm-3 mb-3">
										If you need immediate assistance feel
										free to chat us any time.
									</p>
								</div>
								<div class="card-footer border-0 p-0">
									<a
										href="#"
										@click="openChat()"
										class="btn btn-lg btn-primary"
										>Live chat</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer></Footer>
</template>
