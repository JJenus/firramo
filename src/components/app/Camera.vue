<script setup>
	import { ref } from "vue";
	import { util } from "../../stores/utility";

	const width = 150; // We will scale the photo width to this
	let height = 0; // This will be computed based on the input stream

	// |streaming| indicates whether or not we're currently streaming
	// video from the camera. Obviously, we start at false.

	let streaming = ref(false);
	const captured = ref(false);

	// The various HTML elements we need to configure or control. These
	// will be set by the startup() function.

	let video = null;
	let canvas = null;
	let photo = ref(null);

	function startup() {
		video = document.getElementById("video");
		canvas = document.getElementById("canvas");

		var ctracker = new clm.tracker();
		ctracker.init();
		ctracker.start(video);

		navigator.mediaDevices
			.getUserMedia({ video: true, audio: false })
			.then((stream) => {
				video.srcObject = stream;
				video.play();
			})
			.catch((err) => {
				console.error(`An error occurred: ${err}`);
			});

		video.addEventListener(
			"canplay",
			(ev) => {
				if (!streaming.value) {
					height = width;
					streaming.value = true;
				}
			},
			false
		);

		clearphoto();
	}

	// Capture a photo by fetching the current contents of the video
	// and drawing it into a canvas, then converting that to a PNG
	// format data URL. By drawing it on an offscreen canvas and then
	// drawing that to the screen, we can change its size and/or apply
	// other changes before drawing it.

	function takepicture() {
		captured.value = true;

		const context = canvas.getContext("2d");
		if (width && height) {
			canvas.width = width;
			canvas.height = height;
			context.drawImage(
				document.getElementById("vidme-id").children[0],
				0,
				0,
				width,
				height
			);

			const data = canvas.toDataURL("image/png");
			photo.value = data;

			setTimeout(() => {
				stop();
				util.capturedVerification.value = true;
			}, 1000);
		} else {
			clearphoto();
			console.log("Cleared");
		}
	}

	// Set up our event listener to run the startup process
	// once loading is complete.
	// window.addEventListener("load", startup, false);

	function startCamera() {
		if (streaming.value) {
			stop();
		} else {
			streaming.value = false;
			captured.value = false;

			startup();
		}
	}

	function stop() {
		video.pause();
		video.srcObject.getTracks()[0].stop();
		streaming.value = false;
	}

	// Fill the photo with an indication that none has been
	// captured.

	function clearphoto() {
		const context = canvas.getContext("2d");
		context.fillStyle = "#FFFFFF";
		context.fillRect(0, 0, canvas.width, canvas.height);

		const data = canvas.toDataURL("image/png");
		photo.value = data;
	}
</script>

<template>
	<div class="d-flex align-items-center h-100 justify-content-center">
		<div class="row align-items-center justify-content-center">
			<canvas id="canvas" class="d-none"></canvas>
			<div class="col-6 d-flex justify-content-center mb-5">
				<div
					id="vidme-id"
					:style="'width:' + width + 'px; height:' + width + 'px;'"
					class="camera d-block border border-dark position-relative rounded-circle p-0 overflow-hidden"
				>
					<video
						style="
							left: 0px;
							top: -50px;
							height: 250px;
							width: 200px;
							margin-left: -2.8rem !important;
						"
						id="video"
						autoplay
						class="m-0 p-0 position-absolute d-flex justify-content-center align-items-center"
					>
						Video stream not available.
					</video>
				</div>
			</div>

			<div class="col-6 d-none">
				<div class="output">
					<img
						class="img-fluid rounded-circle"
						id="photo"
						alt="face"
						:src="photo"
					/>
				</div>
			</div>

			<div class="col-12 mt-3">
				<div class="d-flex justify-content-center align-items-center">
					<button
						:class="
							streaming
								? 'btn-outline-danger'
								: 'btn-outline-primary'
						"
						@click.prevent="startCamera()"
						class="btn mb-2 me-2"
						type="button"
					>
						<span v-if="!streaming">Start</span>
						<span v-else>Stop</span>
					</button>

					<button
						@click.prevent="takepicture()"
						class="btn mb-2 btn-outline-secondary"
						type="button"
					>
						Capture
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
