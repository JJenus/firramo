<script setup>
	// The width and height of the captured photo. We will set the
	// width to the value defined here, but the height will be
	// calculated based on the aspect ratio of the input stream.

	import { ref } from "vue";

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
	let startbutton = null;

	function startup() {
		video = document.getElementById("video");
		canvas = document.getElementById("canvas");
		startbutton = document.getElementById("startbutton");

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
					height = video.videoHeight / (video.videoWidth / width);

					// Firefox currently has a bug where the height can't be read from
					// the video, so we will make assumptions if this happens.

					if (isNaN(height)) {
						height = width / (4 / 3);
					}

					height = width;

					// video.setAttribute("width", width);
					// video.setAttribute("height", height);
					// canvas.setAttribute("width", width);
					// canvas.setAttribute("height", height);
					streaming.value = true;
				}
			},
			false
		);

		startbutton.addEventListener(
			"click",
			(ev) => {
				takepicture();
				ev.preventDefault();
			},
			false
		);

		clearphoto();
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
			context.drawImage(video, 0, 0, width, height);

			const data = canvas.toDataURL("image/png");
			photo.value = data;

			setTimeout(() => {
				stop();
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
		video.srcObject.getTracks()[0].stop();
		streaming.value = false;
	}
</script>

<template>
	<div class="d-flex align-items-center h-100 justify-content-center">
		<canvas id="canvas" class="d-none"></canvas>

		<div class="row align-items-center justify-content-center">
			<div v-if="!captured" class="col-6 d-flex justify-content-center">
				<div :style="'width:'+width+'px; height:'+width+'px;'" class="camera d-block border position-relative rounded-circle p-0 overflow-hidden">
					<video
						style="left: 0px; top: -50px; height: 250px; width: 200px; margin-left: -2.8rem !important;"
						id="video"
						autoplay
						class=" m-0 p-0 position-absolute d-flex justify-content-center align-items-center"
					>
						<source
							src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
							class="rounded-circle"
							type="video/mp4"
						/>
						Video stream not available.
					</video>
				</div>
			</div>

			<div v-else="captured" class="col-6">
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
								: 'btn-outline-success'
						"
						@click="startCamera()"
						class="btn me-2 mb-2"
					>
						<span v-if="!streaming">Start</span>
						<span v-else>Stop</span>
					</button>
					<button
						id="startbutton"
						class="btn btn-outline-primary mb-2"
					>
						Capture
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
