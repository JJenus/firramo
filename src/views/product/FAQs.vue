<script setup>
	import Header from "@/components/product/Header.vue";
	import Footer from "@/components/Footer.vue";
	import { ref } from "vue";

	const email = ref("support@{{ AppName }}.com");
	const AppName = import.meta.env.VITE_APP_NAME;
</script>

<template>
	<main class="page-wrapper">
		<!-- Navbar -->
		<!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->
		<Header />

		<!-- Hero -->
		<section
			class="bg-size-cover bg-position-bottom-center bg-repeat-0 py-5 pb-3"
			style="background-image: url(assets/img/contacts/bg.svg)"
		>
			<!-- Content -->
			<div class="container position-relative zindex-2 pt-5 pb-2 pb-md-0">
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
							FAQs
						</li>
					</ol>
				</nav>
			</div>
		</section>

		<!-- FAQ (Accordion) -->
		<section class="container">
			<div class="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-md-0">
				<h2
					class="text-center pt-md-1 pt-lg-3 pt-xl-4 pb-4 mt-xl-1 mb-2"
				>
					Frequently Asked Questions
				</h2>
				<div class="row justify-content-center pb-lg-4 pb-xl-5 mb-4">
					<div class="col-xl-8 col-lg-9 col-md-10 pb-md-2">
						<div class="accordion" id="faq">
							<!-- Item -->
							<div
								class="accordion-item border-0 rounded-3 shadow-sm mb-3"
							>
								<h3 class="accordion-header">
									<button
										class="accordion-button shadow-none rounded-3"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#q-1"
										aria-expanded="true"
										aria-controls="q-1"
									>
										How does {{ AppName }} make managing my
										finances easier?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse show"
									id="q-1"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Our platform offers a wide range of
											tools and resources to help you
											budget, save, and invest your money
											with ease. We also have a dedicated
											customer support team to assist you.
										</p>
									</div>
								</div>
							</div>

							<!-- Item -->
							<div
								class="accordion-item border-0 rounded-3 shadow-sm mb-3"
							>
								<h3 class="accordion-header">
									<button
										class="accordion-button shadow-none rounded-3 collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#q-2"
										aria-expanded="false"
										aria-controls="q-2"
									>
										Is {{ AppName }} secure?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-2"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Yes, we use the latest technology to
											keep your information safe and
											secure.
										</p>
									</div>
								</div>
							</div>

							<!-- Item -->
							<div
								class="accordion-item border-0 rounded-3 shadow-sm mb-3"
							>
								<h3 class="accordion-header">
									<button
										class="accordion-button shadow-none rounded-3 collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#q-3"
										aria-expanded="false"
										aria-controls="q-3"
									>
										Can I access my account from anywhere?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-3"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Yes, our platform is accessible from
											any device with internet access.
										</p>
									</div>
								</div>
							</div>

							<!-- Item -->
							<div
								class="accordion-item border-0 rounded-3 shadow-sm mb-3"
							>
								<h3 class="accordion-header">
									<button
										class="accordion-button shadow-none rounded-3 collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#q-4"
										aria-expanded="false"
										aria-controls="q-4"
									>
										Can I speak to someone if I have
										questions about my account?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-4"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Yes, our customer support team is
											available to assist you.
										</p>
									</div>
								</div>
							</div>

							<!-- Item -->
							<div
								class="accordion-item border-0 rounded-3 shadow-sm mb-3"
							>
								<h3 class="accordion-header">
									<button
										class="accordion-button shadow-none rounded-3 collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#q-5"
										aria-expanded="false"
										aria-controls="q-5"
									>
										Does {{ AppName }} offer investment advice?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-5"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											While we do offer resources to help
											you make informed investment
											decisions, we do not offer specific
											investment advice.
										</p>
									</div>
								</div>
							</div>

							<!-- Item -->
							<div
								class="accordion-item border-0 rounded-3 shadow-sm"
							>
								<h3 class="accordion-header">
									<button
										class="accordion-button shadow-none rounded-3 collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#q-6"
										aria-expanded="false"
										aria-controls="q-6"
									>
										Is there a minimum balance required to
										open an account with {{ AppName }}?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-6"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											No, there is no minimum balance
											required to open an account with us.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<p class="text-center">
					Join us today and take control of your finances with
					{{ AppName }}.
				</p>
			</div>
		</section>
	</main>

	<Footer></Footer>
</template>
