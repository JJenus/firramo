<script setup>
	import Header from "@/components/product/Header.vue";
	import Footer from "@/components/Footer.vue";
	import { ref } from "vue";

	const email = ref("support@firramo.com");
	const AppName = import.meta.env.VITE_APP_NAME;
</script>

<template>
	<main class="page-wrapper">
		<!-- Navbar -->
		<!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->
		<Header></Header>

		<!-- Hero -->
		<section class="position-relative pt-5">
			<!-- Background -->
			<div
				class="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
				style="background-image: url(assets/img/about/hero-bg.svg)"
			>
				<div class="d-lg-none" style="height: 960px"></div>
				<div class="d-none d-lg-block" style="height: 768px"></div>
			</div>

			<!-- Content -->
			<div class="container position-relative zindex-5 pt-5">
				<div class="row">
					<div class="col-lg-6">
						<!-- Breadcrumb -->
						<nav
							class="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4"
							aria-label="breadcrumb"
						>
							<ol class="breadcrumb mb-0">
								<li class="breadcrumb-item">
									<a href="/"
										><i
											class="bx bx-home-alt fs-lg me-1"
										></i
										>Home</a
									>
								</li>
								<li
									class="breadcrumb-item active"
									aria-current="page"
								>
									About
								</li>
							</ol>
						</nav>

						<!-- Text -->
						<h1 class="pb-2 pb-md-3">About {{ AppName }}</h1>
						<p
							class="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3"
							style="max-width: 526px"
						>
							We are a dedicated team of passionate product
							managers, full stack developers, UX/UI designers, QA
							engineers and marketing experts helping businesses
							of every size — from new startups to public
							companies — launch their projects using our
							software.
						</p>
						<img
							src="assets/img/about/clutch-dark.png"
							class="d-dark-mode-none d-none"
							width="175"
							alt="Clutch"
						/>
						<img
							src="assets/img/about/clutch-light.png"
							class="d-none d-dark-mode-block d-none"
							width="175"
							alt="Clutch"
						/>
						<div class="row row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
							<div class="col">
								<h3 class="h2 mb-2">4,000+</h3>
								<p class="mb-0">
									<strong>Users</strong> World Wide
								</p>
							</div>
							<div class="col">
								<h3 class="h2 mb-2">100+</h3>
								<p class="mb-0">
									<strong>New Accounts</strong> per Month
								</p>
							</div>
							<div class="col">
								<h3 class="h2 mb-2">70+</h3>
								<p class="mb-0">
									<strong>Verifications</strong> per Week
								</p>
							</div>
						</div>
					</div>

					<!-- Images -->
					<div class="col-lg-6 mt-xl-3 pt-5 mt-md-5 pt-lg-4">
						<div class="row row-cols-2 gx-3 gx-lg-4">
							<div class="col pt-lg-5 mt-lg-1">
								<img
									src="/logo/feramo-logo-mini.png"
									class="d-block rounded-3 ms-lg-5 mt-lg-n5 mb-3 mb-lg-4"
									alt="Image"
								/>
								<img
									src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
									class="d-block rounded-3"
									alt="Image"
								/>
							</div>
							<div class="col">
								<img
									src="data:image/png;base64,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"
									class="d-block rounded-3 mb-3 mb-lg-4"
									alt="Image"
								/>
								<img
									src="/logo/feramo-logo-mini.png"
									class="d-block rounded-3"
									alt="Image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Testimonials -->
		<section class="container mt-5">
			<div class="row">
				<div class="col-md-5">
					<div class="card h-100 border-0 overflow-hidden px-md-4">
						<span
							class="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100 opacity-10 d-none d-md-block"
						></span>
						<div
							class="card-body pt-4 d-flex flex-column align-items-center justify-content-center position-relative zindex-2 p-0 pb-2 p-lg-4"
						>
							<h2 class="h1 text-center text-md-start p-lg-4">
								What Our Clients Say About Silicon Studio
							</h2>
						</div>
					</div>
				</div>
				<div class="col-md-7">
					<div class="card border-0 shadow-sm p-4 p-xxl-5">
						<div class="d-flex justify-content-between pb-4 mb-2">
							<span
								class="btn btn-icon btn-primary btn-lg shadow-primary pe-none"
							>
								<i class="bx bxs-quote-left"></i>
							</span>
							<div class="d-flex">
								<button
									type="button"
									id="testimonials-prev"
									class="btn btn-prev btn-icon btn-sm me-2"
								>
									<i class="bx bx-chevron-left"></i>
								</button>
								<button
									type="button"
									id="testimonials-next"
									class="btn btn-next btn-icon btn-sm ms-2"
								>
									<i class="bx bx-chevron-right"></i>
								</button>
							</div>
						</div>

						<!-- Slider -->
						<div
							class="swiper mx-0 mb-md-n2 mb-xxl-n3"
							data-swiper-options='{
          "spaceBetween": 24,
          "loop": true,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "navigation": {
            "prevEl": "#testimonials-prev",
            "nextEl": "#testimonials-next"
          }
        }'
						>
							<div class="swiper-wrapper">
								<!-- Item -->
								<div class="swiper-slide h-auto">
									<figure
										class="card h-100 position-relative border-0 bg-transparent"
									>
										<blockquote class="card-body p-0 mb-0">
											<p class="fs-lg mb-0">
												Mi semper risus ultricies orci
												pulvinar in at enim orci. Quis
												facilisis nunc pellentesque in
												ullamcorper sit. Lorem blandit
												arcu sapien, senectus libero,
												amet dapibus cursus quam. Eget
												pellentesque eu purus volutpat
												adipiscing malesuada. Purus
												nisi, tortor vel lacus.
											</p>
										</blockquote>
										<figcaption
											class="card-footer border-0 d-flex align-items-center w-100 pb-2"
										>
											<img
												src="assets/img/avatar/14.jpg"
												width="60"
												class="rounded-circle"
												alt="Annette Black"
											/>
											<div class="ps-3">
												<h6
													class="fw-semibold lh-base mb-0"
												>
													Annette Black
												</h6>
												<span class="fs-sm text-muted"
													>Strategic Advisor at
													Company LLC</span
												>
											</div>
										</figcaption>
									</figure>
								</div>

								<!-- Item -->
								<div class="swiper-slide h-auto">
									<figure
										class="card h-100 position-relative border-0 bg-transparent"
									>
										<blockquote class="card-body p-0 mb-0">
											<p class="fs-lg mb-0">
												Vestibulum nunc lectus auctor
												quis. Natoque lectus tortor
												lacus, eu. Nunc feugiat nisl
												maecenas nulla hac morbi. Vitae,
												donec facilisis sed nunc netus.
												Venenatis posuere faucibus enim
												est. Vel dignissim morbi blandit
												morbi tellus. Arcu ullamcorper
												quis enim.
											</p>
										</blockquote>
										<figcaption
											class="card-footer border-0 d-flex align-items-center w-100 pb-2"
										>
											<img
												src="assets/img/avatar/13.jpg"
												width="60"
												class="rounded-circle"
												alt="Ralph Edwards"
											/>
											<div class="ps-3">
												<h6
													class="fw-semibold lh-base mb-0"
												>
													Ralph Edwards
												</h6>
												<span class="fs-sm text-muted"
													>Head of Marketing at Lorem
													Ltd.
												</span>
											</div>
										</figcaption>
									</figure>
								</div>

								<!-- Item -->
								<div class="swiper-slide h-auto">
									<figure
										class="card h-100 position-relative border-0 bg-transparent"
									>
										<blockquote class="card-body p-0 mb-0">
											<p class="fs-lg mb-0">
												Ac at sed sit senectus massa.
												Massa ante amet ultrices magna
												porta tempor. Aliquet diam in et
												magna ultricies mi at. Lectus
												enim, vel enim egestas nam
												pellentesque et leo. Elit mi
												faucibus laoreet aliquam
												pellentesque sed aliquet integer
												massa. Orci leo tortor ornare.
											</p>
										</blockquote>
										<figcaption
											class="card-footer border-0 d-flex align-items-center w-100 pb-2"
										>
											<img
												src="assets/img/avatar/11.jpg"
												width="60"
												class="rounded-circle"
												alt="Darrell Steward"
											/>
											<div class="ps-3">
												<h6
													class="fw-semibold lh-base mb-0"
												>
													Darrell Steward
												</h6>
												<span class="fs-sm text-muted"
													>Project Manager at Ipsum
													Ltd.</span
												>
											</div>
										</figcaption>
									</figure>
								</div>
							</div>

							<!-- Pagination (bullets) -->
							<div
								class="swiper-pagination position-relative mt-5"
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact CTA -->
		<section class="container mt-n2">
			<div class="card border-0 bg-gradient-primary">
				<div
					class="card-body p-md-5 p-4 bg-size-cover"
					style="
						background-image: url(assets/img/landing/digital-agency/contact-bg.png);
					"
				>
					<div class="py-md-5 py-4 text-center">
						<h3 class="h4 fw-normal text-light opacity-75">
							Want to work with us? Let’s talk
						</h3>
						<a
							href="mailto:email@example.com"
							class="fs-1 text-light"
						>
							{{ email }}
						</a>
						<div class="pt-md-5 pt-4 pb-md-2">
							<a
								href="contacts-v1.html"
								class="btn btn-lg btn-light"
								>Contact us</a
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Social networks (Carousel on narrow screens) -->
		<section class="container text-center py-5 my-2 my-md-4 my-lg-5">
			<h2 class="h1 mb-4">We Have Social Networks</h2>
			<p class="fs-lg text-muted pb-2 mb-5">
				Follow us and keep up to date with the freshest news!
			</p>
			<div
				class="swiper"
				data-swiper-options='{
    "slidesPerView": 2,
    "pagination": {
      "el": ".swiper-pagination",
      "clickable": true
    },
    "breakpoints": {
      "500": {
        "slidesPerView": 3
      },
      "650": {
        "slidesPerView": 4
      },
      "900": {
        "slidesPerView": 5
      },
      "1100": {
        "slidesPerView": 6
      }
    }
  }'
			>
				<div class="swiper-wrapper">
					<!-- Item -->
					<div class="swiper-slide">
						<div
							class="position-relative text-center border-end mx-n1"
						>
							<a
								href="#"
								class="btn btn-icon btn-secondary btn-facebook btn-lg stretched-link"
							>
								<i class="bx bxl-facebook"></i>
							</a>
							<div class="pt-4">
								<h6 class="mb-1">Facebook</h6>
								<p class="fs-sm text-muted mb-0">silicon</p>
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="swiper-slide">
						<div
							class="position-relative text-center border-end mx-n1"
						>
							<a
								href="#"
								class="btn btn-icon btn-secondary btn-instagram btn-lg stretched-link"
							>
								<i class="bx bxl-instagram"></i>
							</a>
							<div class="pt-4">
								<h6 class="mb-1">Instagram</h6>
								<p class="fs-sm text-muted mb-0">@silicon</p>
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="swiper-slide">
						<div
							class="position-relative text-center border-end mx-n1"
						>
							<a
								href="#"
								class="btn btn-icon btn-secondary btn-twitter btn-lg stretched-link"
							>
								<i class="bx bxl-twitter"></i>
							</a>
							<div class="pt-4">
								<h6 class="mb-1">Twitter</h6>
								<p class="fs-sm text-muted mb-0">@silicon</p>
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="swiper-slide">
						<div
							class="position-relative text-center border-end mx-n1"
						>
							<a
								href="#"
								class="btn btn-icon btn-secondary btn-linkedin btn-lg stretched-link"
							>
								<i class="bx bxl-linkedin"></i>
							</a>
							<div class="pt-4">
								<h6 class="mb-1">LinkedIn</h6>
								<p class="fs-sm text-muted mb-0">
									Silicon Inc.
								</p>
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="swiper-slide">
						<div
							class="position-relative text-center border-end mx-n1"
						>
							<a
								href="#"
								class="btn btn-icon btn-secondary btn-youtube btn-lg stretched-link"
							>
								<i class="bx bxl-youtube"></i>
							</a>
							<div class="pt-4">
								<h6 class="mb-1">YouTube</h6>
								<p class="fs-sm text-muted mb-0">Silicon</p>
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="swiper-slide">
						<div
							class="position-relative text-center border-end mx-n1"
						>
							<a
								href="#"
								class="btn btn-icon btn-secondary btn-dribbble btn-lg stretched-link"
							>
								<i class="bx bxl-dribbble"></i>
							</a>
							<div class="pt-4">
								<h6 class="mb-1">Dribbble</h6>
								<p class="fs-sm text-muted mb-0">Silicon</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Pagination (bullets) -->
				<div
					class="swiper-pagination position-relative bottom-0 pt-3 mt-4"
				></div>
			</div>
		</section>
	</main>

	<Footer></Footer>
</template>
