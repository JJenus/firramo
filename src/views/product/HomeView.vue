<script setup>
	import Header from "@/components/product/Header.vue";
	import Intro from "@/components/product/Intro.vue";
	import Footer from "@/components/Footer.vue";
	import { ref, onMounted } from "vue";
	import axios from "axios";

	import Testimonial from "../../components/admin/testimonials/Testimonial.vue";

	const env = import.meta.env;

	const email = ref("support@firramo.com");
	const AppName = import.meta.env.VITE_APP_NAME;
	const testimonials = ref([]);

	async function loadTestimonies() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/testimonials`,
		};

		axios
			.request(config)
			.then((response) => {
				testimonials.value = response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function signUp() {
		document.getElementById("sign-up").click();
	}

	onMounted(() => {
		loadTestimonies();
	});
</script>

<template>
	<!-- Page wrapper for sticky footer -->
	<!-- Wraps everything except footer to push footer to the bottom of the page if there is little content -->
	<main class="page-wrapper">
		<!-- Navbar -->
		<!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->

		<Header></Header>
		<!-- Hero -->
		<Intro></Intro>

		<!-- Brands (carousel on screens < 1100px) -->
		<section class="container border-bottom-lg pt-sm-2">
			<div class="d-flex align-items-center fs-2 justify-content-center">
				<img
					src="/logo/feramo-logo-mini.png"
					class="d-block my-2 me-2"
					width="70"
					alt="Brand"
				/>

				{{ AppName }}
			</div>
		</section>

		<!-- Do more with feramo -->
		<section class="container pb-5 mb-md-2 mb-lg-4 mb-xl-5">
			<div class="row align-items-center pt-2 pb-3">
				<!-- Text -->
				<div
					class="col-md-6 col-xl-5 text-center text-md-start mb-5 mb-md-0"
				>
					<h2 class="h1 pb-2 pb-lg-3">Do more with {{ AppName }}</h2>
					<p class="pb-2 mb-4 mb-lg-5">
						Experience financial freedom with {{ AppName }}, your
						accessible and easy-to-use solution.
					</p>
					<hr />
					<div
						class="d-flex justify-content-center justify-content-md-between pt-4 pt-lg-5"
					>
						<div class="mx-3 mx-md-0">
							<div class="display-3 text-dark mb-1">0%</div>
							<span>Up to 0% commissions</span>
						</div>
						<div class="mx-3 mx-md-0">
							<div class="display-3 text-dark mb-1">100</div>
							<span>On your first 100 transactions</span>
						</div>
					</div>
				</div>

				<!-- Parallax gfx -->
				<div class="col-md-6 offset-xl-1">
					<div
						class="parallax ratio ratio-1x1 mx-auto"
						style="max-width: 550px"
					>
						<div
							class="parallax-layer position-absolute zindex-2"
							data-depth="-0.15"
						>
							<img
								src="/assets/img/illustrations/undraw_connected.svg"
								alt="Avatar"
							/>
						</div>
						<div
							class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
							data-depth="0.1"
						>
							<div
								class="rounded-circle bg-primary"
								style="width: 70%; height: 70%; opacity: 0.06"
							></div>
						</div>
						<div
							class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
							data-depth="0.2"
						>
							<div
								class="rounded-circle bg-primary"
								style="width: 55%; height: 55%; opacity: 0.06"
							></div>
						</div>
						<div
							class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-3"
							data-depth="0.4"
						>
							<div
								class="d-flex justify-content-center align-items-center rounded-circle bg-primary"
								style="
									width: 93px;
									height: 93px;
									box-shadow: 0 0.1875rem 1.875rem -0.125rem rgba(99, 102, 241, 0.95);
								"
							>
								<span class="h5 text-light mb-0">400K+</span>
							</div>
						</div>
						<div
							class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
							data-depth="0.3"
						>
							<div
								class="rounded-circle bg-primary"
								style="width: 40%; height: 40%; opacity: 0.06"
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Feature section (Crypto bank) -->
		<section class="container pt-2 pt-sm-4 pb-5 mb-md-2 mb-lg-4 mb-xl-5">
			<div class="row align-items-center mb-2 pb-sm-3 pb-md-4 mb-md-5">
				<!-- Text -->
				<div
					class="col-md-5 col-lg-6 col-xl-5 offset-xl-1 order-md-2 text-center text-md-start mb-5 mb-md-0"
				>
					<h2 class="h1 pb-1 pb-lg-3 fs-5 mb-0">
						Make Your Life a Lot Easier with {{ AppName }}
					</h2>
					<p class="pb-2 mb-4 mb-xl-5">All in one.</p>
					<hr />
					<div
						class="d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-md-between pt-3 mb-md-5"
					>
						<img
							src="/assets/img/landing/saas-3/feature-3/binance.svg"
							width="48"
							class="d-block m-2 mx-md-0"
							alt="Bitcoin"
						/>
						<img
							src="/assets/img/landing/saas-3/feature-3/ens.svg"
							width="48"
							class="d-block m-2 mx-md-0"
							alt="Ens"
						/>
						<img
							src="/assets/img/landing/saas-3/feature-3/tether.svg"
							width="48"
							class="d-block m-2 mx-md-0"
							alt="Tether"
						/>
						<img
							src="/assets/img/landing/saas-3/feature-3/alqo.svg"
							width="48"
							class="d-block m-2 mx-md-0"
							alt="Alqo"
						/>
						<img
							src="/assets/img/landing/saas-3/feature-3/blockfi.svg"
							width="48"
							class="d-block m-2 mx-md-0"
							alt="BlockFi"
						/>
						<img
							src="/assets/img/landing/saas-3/feature-3/bitcoin.svg"
							width="48"
							class="d-block m-2 mx-md-0"
							alt="Bitcoin"
						/>
					</div>
				</div>

				<!-- Parallax gfx -->
				<div class="col-md-7 col-lg-6 order-md-1">
					<div
						class="position-relative pt-5"
						style="max-width: 636px"
					>
						<img
							src="/assets/img/illustrations/send_money.jpg"
							class="rellax position-absolute top-0 mt-n5"
							alt="Card"
							data-rellax-percentage="0.5"
							data-rellax-speed="1"
							data-disable-parallax-down="lg"
						/>
						<img
							src="/assets/img/landing/saas-3/feature-3/dashboard.jpg"
							class="d-block rounded-3 mt-sm-4 mt-md-0 mt-lg-4"
							alt="Dashboard"
							style="
								box-shadow: 0 1.875rem 7.5rem -0.625rem rgba(124, 125, 152, 0.2);
							"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- How it works (Steps + Video) -->
		<section class="container mt-5">
			<div
				class="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto"
				style="max-width: 530px"
			>
				<h2 class="h1 mt-md-5">How Does It Work?</h2>
				<p class="mb-0">Simple steps to get started.</p>
			</div>

			<!-- Steps -->
			<div
				class="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3"
			>
				<div class="step">
					<div class="step-number">
						<div class="step-number-inner">1</div>
					</div>
					<div class="step-body">
						<h3 class="h4 mb-3">Registration</h3>
						<p class="mb-0">
							Click signup and fill in the simple form to setup
							your account.
						</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">
						<div class="step-number-inner">2</div>
					</div>
					<div class="step-body">
						<h3 class="h4 mb-3">Identity verification</h3>
						<p class="mb-0">
							Simply follow the identity verification to verify
							your identity. This is essential for safety of the
							account.
						</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">
						<div class="step-number-inner">3</div>
					</div>
					<div class="step-body">
						<h3 class="h4 mb-3">Be limitless</h3>
						<p class="mb-0">
							Start transacting as you wish. Send, receive, invest
							and spend.
						</p>
					</div>
				</div>
				<div class="step d-none">
					<div class="step-number">
						<div class="step-number-inner">4</div>
					</div>
					<div class="step-body">
						<h3 class="h4 mb-3">Earn with Silicon</h3>
						<p class="mb-0">
							Massa enim libero dictumst consectetur in convallis
							lobortis
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Testimonials -->
		<section class="container py-5 mb-2 mt-sm-2 my-md-4 my-lg-5">
			<div class="row pt-2 py-xl-3">
				<div class="col-lg-3 col-md-4">
					<h2
						class="h1 text-center text-md-start mx-auto mx-md-0 pt-md-2"
						style="max-width: 300px"
					>
						What Our <br class="d-none d-md-inline" />Clients Say
						<br class="d-none d-md-inline" />About Us:
					</h2>

					<!-- Slider controls (Prev / next buttons) -->
					<div
						v-if="testimonials.length > 0"
						class="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5"
					>
						<button
							type="button"
							id="prev-testimonial"
							class="btn btn-prev btn-icon btn-sm me-2"
						>
							<i class="bx bx-chevron-left"></i>
						</button>
						<button
							type="button"
							id="next-testimonial"
							class="btn btn-next btn-icon btn-sm ms-2"
						>
							<i class="bx bx-chevron-right"></i>
						</button>
					</div>
				</div>
				<div class="col-lg-9 col-md-8">
					<div
						class="swiper mx-n2"
						data-swiper-options='{
							"slidesPerView": 1,
							"spaceBetween": 8,
							"navigation": {
								"prevEl": "#prev-testimonial",
								"nextEl": "#next-testimonial"
							},
							"breakpoints": {
								"500": {
								"slidesPerView": 2
								},
								"1200": {
								"slidesPerView": 3
								}
							}
							}'
					>
						<div class="swiper-wrapper">
							<!-- Item -->
							<div
								v-for="testimonial in testimonials"
								class="swiper-slide h-auto pt-4"
							>
								<Testimonial
									:testimonial="testimonial"
								></Testimonial>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA -->
		<section class="container d-none">
			<div
				class="dark-mode bg-dairk bg-size-cover bg-position-center bg-repeat-0 position-relative overflow-hidden rounded-3 py-lg-3 py-xl-5 px-4 px-lg-5 px-xl-0"
				style="
					background-image: url(assets/img/landing/saas-3/cta-bg.jpg);
				"
			>
				<div class="row position-relative zindex-2 py-5 my-1 my-md-3">
					<div class="col-md-6">
						<div class="mx-auto" style="max-width: 440px">
							<h2 class="h1 pb-1 pb-md-3 pb-lg-4">
								Let's start your investing easier now!
							</h2>
							<ul class="list-unstyled fs-lg d-md-none pb-3">
								<li class="d-flex mb-2">
									<i
										class="bx bx-check lead text-primary me-2"
										style="margin-top: 0.125rem"
									></i>
									Click invest.
								</li>
								<li class="d-flex mb-2">
									<i
										class="bx bx-check lead text-primary me-2"
										style="margin-top: 0.125rem"
									></i>
									Select what to invest on.
								</li>
								<li class="d-flex">
									<i
										class="bx bx-check lead text-primary me-2"
										style="margin-top: 0.125rem"
									></i>
									Set amount. Done.
								</li>
							</ul>
							<a
								@click="signUp()"
								data-bs-toggle="modal"
								data-bs-target="#auth-modal"
								class="btn btn-lg btn-primary shadow-primary w-100 w-sm-auto"
								>Start now</a
							>
						</div>
					</div>
					<div class="col-md-6 pt-lg-3 pt-xl-4">
						<ul class="list-unstyled fs-lg d-none d-md-block">
							<li class="d-flex mb-2">
								<i
									class="bx bx-check lead text-primary me-2"
									style="margin-top: 0.125rem"
								></i>
								Click invest
							</li>
							<li class="d-flex mb-2">
								<i
									class="bx bx-check lead text-primary me-2"
									style="margin-top: 0.125rem"
								></i>
								Select what to invest on.
							</li>
							<li class="d-flex">
								<i
									class="bx bx-check lead text-primary me-2"
									style="margin-top: 0.125rem"
								></i>
								Set amount. Done.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer></Footer>
</template>
