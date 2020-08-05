<template>
	<div class="grid-container">
		<div class="grid-container__top">
			<div class="grid-container__text">
				<h1>Who we are...</h1>
				<p>
					We are a group of individuals who are driven by passion for helping
					others to be able to get the best out of their PC, wheter the use it
					for gaming, work or a mix of both...
				</p>
				<svg
					width="220"
					height="220"
					viewBox="0 0 286 267"
					fill="none"
					class="icon"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask id="path-1-inside-1" fill="white">
						<rect width="190.836" height="173.227" rx="20" />
					</mask>
					<rect
						width="190.836"
						height="173.227"
						rx="20"
						stroke="#FE519E"
						stroke-width="50"
						mask="url(#path-1-inside-1)"
					/>
					<mask id="path-2-inside-2" fill="white">
						<rect
							x="95.1637"
							y="93.7734"
							width="190.836"
							height="173.227"
							rx="20"
						/>
					</mask>
					<rect
						x="95.1637"
						y="93.7734"
						width="190.836"
						height="173.227"
						rx="20"
						stroke="#FE519E"
						stroke-width="50"
						mask="url(#path-2-inside-2)"
					/>
				</svg>
			</div>
			<img src="../assets/about-top.jpg" alt="" />
		</div>
		<div class="grid-container__bottom">
			<img src="../assets/about-bottom.jpg" alt="" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "About",
	};
</script>

<style lang="scss" scoped>
	.grid-container {
		display: grid;
		height: auto;
		width: 100%;
		place-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: 50vh 50vh;
		margin-bottom: 7em;
		grid-template-areas:
			"top"
			"bottom";

		&__text {
			grid-area: text;
			width: 90%;
			height: auto;
			text-align: justify;
			h1 {
				color: #fffffe;
				position: relative;
			}
			h1::before {
				content: "";
				position: absolute;
				top: -40%;
				background: #fe519e;
				border: 1px solid #fe519e;
				height: 0.3em;
				width: 80px;
			}

			p {
				color: #fe519e;
				font-size: 2em;
			}
			.icon {
				margin-left: 68%;
			}
		}
		&__top {
			grid-area: top;
			height: 100%;
			width: 65%;
			display: grid;
			grid-template-rows: 1fr;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: "text image";

			img {
				grid-area: image;
				height: 100%;
				width: 100%;
				border-radius: 1.5%;
			}
		}
		&__bottom {
			grid-area: bottom;
			height: 100%;
			width: 64.9%;
			img {
				height: 100%;
				width: 100%;
				border-radius: 2%;
			}
		}
	}
</style>
