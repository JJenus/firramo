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
				<div class="row justify-content-center pb-lg-4 pb-xl-5">
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
										What if I don't have any professional
										background?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse show"
									id="q-1"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Nunc duis id aenean gravida
											tincidunt eu, tempor ullamcorper.
											Viverra aliquam arcu, viverra et,
											cursus. Aliquet pretium cursus
											adipiscing gravida et consequat
											lobortis arcu velit. Nibh pharetra
											fermentum duis accumsan lectus non.
											Massa cursus molestie lorem
											scelerisque pellentesque. Nisi,
											enim, arcu purus gravida adipiscing
											euismod montes, duis egestas.
											Vehicula eu etiam quam tristique
											tincidunt suspendisse ut consequat.
										</p>
										<p>
											Ornare senectus fusce dignissim ut.
											Integer consequat in eu tortor,
											faucibus et lacinia posuere. Turpis
											sit viverra lorem suspendisse lacus
											aliquam auctor vulputate. Quis
											egestas aliquam nunc purus lacus,
											elit leo elit facilisi. Dignissim
											amet adipiscing massa integer.
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
										How is this different from other courses
										on the market?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-2"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit. Fusce
											in facilisis nibh. Vestibulum ac
											porttitor sapien. Curabitur laoreet
											malesuada gravida. Phasellus
											vehicula vestibulum consequat.
											Curabitur feugiat eget sem vitae
											laoreet. Fusce porttitor finibus
											tellus, quis condimentum nibh.
											Vestibulum ante ipsum primis in
											faucibus orci luctus et ultrices
											posuere cubilia curae; Vivamus
											vehicula malesuada magna at viverra.
											Fusce non est eget libero convallis
											fringilla suspendisse.
										</p>
										<p>
											Nunc dolor velit, interdum finibus
											bibendum vel, mattis a magna. Mauris
											mollis sapien ac mi aliquet varius.
											Proin nec est nibh. Dignissim amet
											adipiscing massa integer.
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
										How much time does it take to do my
										homework per week? What if I don't like
										it?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-3"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Suspendisse viverra volutpat eros.
											Curabitur in scelerisque lacus, quis
											fringilla sem. Nunc rutrum vel magna
											et ullamcorper. Sed consectetur
											augue vitae ligula consectetur, eu
											dapibus justo molestie. Phasellus
											sit amet metus magna. Sed tincidunt
											tempus felis vitae commodo. Etiam
											lobortis justo in elit pretium, sit
											amet aliquet tellus euismod.
											Curabitur in purus sed turpis
											aliquet pretium. Nunc ut magna
											tempus, iaculis sem id, vulputate
											ipsum. Etiam fermentum malesuada
											quam, in tempus purus pulvinar at.
											Vestibulum auctor congue pharetra.
											Class aptent taciti sociosqu ad
											litora torquent per conubia nostra,
											per inceptos himenaeos. Nulla
											facilisi. Nunc dolor velit, interdum
											finibus bibendum vel, mattis a
											magna. Mauris mollis sapien ac mi
											aliquet varius. Proin nec est nibh.
											In hac habitasse platea dictumst.
											Nullam porta risus vitae lectus
											pellentesque interdum. Proin ac leo
											fermentum, volutpat odio ut, lacinia
											erat. Suspendisse potenti. Praesent
											vitae faucibus lectus. Sed tincidunt
											at ex id maximus. Morbi tristique
											ullamcorper velit, non cursus libero
											eleifend quis. Aliquam aliquam odio
											dui.
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
										Is there any kind of certificate of
										completion?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-4"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Nunc duis id aenean gravida
											tincidunt eu, tempor ullamcorper.
											Viverra aliquam arcu, viverra et,
											cursus. Aliquet pretium cursus
											adipiscing gravida et consequat
											lobortis arcu velit. Nibh pharetra
											fermentum duis accumsan lectus non.
											Massa cursus molestie lorem
											scelerisque pellentesque. Nisi,
											enim, arcu purus gravida adipiscing
											euismod montes, duis egestas.
											Vehicula eu etiam quam tristique
											tincidunt suspendisse ut consequat.
										</p>
										<p>
											Ornare senectus fusce dignissim ut.
											Integer consequat in eu tortor,
											faucibus et lacinia posuere. Turpis
											sit viverra lorem suspendisse lacus
											aliquam auctor vulputate. Quis
											egestas aliquam nunc purus lacus,
											elit leo elit facilisi. Dignissim
											amet adipiscing massa integer.
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
										YouTube is full of free tutorials,
										videos and courses. Why should I take
										any courses here?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-5"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit. Fusce
											in facilisis nibh. Vestibulum ac
											porttitor sapien. Curabitur laoreet
											malesuada gravida. Phasellus
											vehicula vestibulum consequat.
											Curabitur feugiat eget sem vitae
											laoreet. Fusce porttitor finibus
											tellus, quis condimentum nibh.
											Vestibulum ante ipsum primis in
											faucibus orci luctus et ultrices
											posuere cubilia curae; Vivamus
											vehicula malesuada magna at viverra.
											Fusce non est eget libero convallis
											fringilla suspendisse.
										</p>
										<p>
											Nunc dolor velit, interdum finibus
											bibendum vel, mattis a magna. Mauris
											mollis sapien ac mi aliquet varius.
											Proin nec est nibh. Dignissim amet
											adipiscing massa integer.
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
										What happens if I forget or lose my
										password?
									</button>
								</h3>
								<div
									class="accordion-collapse collapse"
									id="q-6"
									data-bs-parent="#faq"
								>
									<div class="accordion-body fs-sm pt-0">
										<p>
											Suspendisse viverra volutpat eros.
											Curabitur in scelerisque lacus, quis
											fringilla sem. Nunc rutrum vel magna
											et ullamcorper. Sed consectetur
											augue vitae ligula consectetur, eu
											dapibus justo molestie. Phasellus
											sit amet metus magna. Sed tincidunt
											tempus felis vitae commodo. Etiam
											lobortis justo in elit pretium, sit
											amet aliquet tellus euismod.
											Curabitur in purus sed turpis
											aliquet pretium. Nunc ut magna
											tempus, iaculis sem id, vulputate
											ipsum. Etiam fermentum malesuada
											quam, in tempus purus pulvinar at.
											Vestibulum auctor congue pharetra.
											Class aptent taciti sociosqu ad
											litora torquent per conubia nostra,
											per inceptos himenaeos. Nulla
											facilisi. Nunc dolor velit, interdum
											finibus bibendum vel, mattis a
											magna. Mauris mollis sapien ac mi
											aliquet varius. Proin nec est nibh.
											In hac habitasse platea dictumst.
											Nullam porta risus vitae lectus
											pellentesque interdum. Proin ac leo
											fermentum, volutpat odio ut, lacinia
											erat. Suspendisse potenti. Praesent
											vitae faucibus lectus. Sed tincidunt
											at ex id maximus. Morbi tristique
											ullamcorper velit, non cursus libero
											eleifend quis. Aliquam aliquam odio
											dui.
										</p>
									</div>
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
