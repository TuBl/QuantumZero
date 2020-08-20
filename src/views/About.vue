<template>
	<div class="grid-container">
		<div class="grid-container__top">
			<div class="grid-container__text">
				<h1>Who we are...</h1>
				<p>
					Quantum Zero is a website where we help individuals with passion to
					have the best possible PC for their needs to find the correct and
					compatible computer hardware, with the cheapest possible price in the
					globe, build the computer for them professionally and deliver it to
					their doorstep!
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
				font-size: 2rem;
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
				font-size: 1.5rem;
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

	@media only screen and (min-width: 3440px) {
		.grid-container {
			position: relative;
			margin-top: 10em;
			&__text {
				grid-area: text;
				width: 90%;
				height: auto;
				text-align: justify;
				h1 {
					font-size: 3.5rem;
				}
				h1::before {
					height: 0.3em;
					width: 2.5em;
				}

				p {
					font-size: 2.2rem;
				}
				.icon {
					margin-left: 73%;
					height: auto;
					width: 325px;
				}
			}
			&__top {
				grid-area: top;
				height: auto;
				width: 65%;
				display: grid;
				grid-template-rows: 1fr;
				grid-template-columns: 1fr 1fr;
				grid-template-areas: "text image";

				img {
					grid-area: image;
					height: auto;
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
	}
	@media only screen and (max-width: 768px) {
		.grid-container {
			margin-top: 3em;
			width: 100%;
			&__text {
				width: 100%;
				h1 {
					font-size: 2.5rem;
				}
				h1::before {
					top: -1em;
				}
				p {
					font-size: 1.8rem;
					padding-top: 0.5em;
				}
				.icon {
					margin-left: 75%;
					margin-top: 1em;
					height: 150px;
					width: 150px;
				}
			}
			&__top {
				grid-area: top;
				height: 100%;
				width: 80%;
				display: grid;
				grid-template-rows: 1fr;
				grid-template-columns: 1fr;
				grid-template-areas: "text ";

				img {
					display: none;
				}
			}
			&__bottom {
				width: 80%;
			}
		}
	}
	@media only screen and (max-width: 414px) {
		.grid-container {
			margin-top: 3em;
			width: 100%;
			&__text {
				width: 100%;
				h1 {
					font-size: 1.5rem;
				}
				h1::before {
					top: -1em;
				}
				p {
					font-size: 1rem;
					padding-top: 0.5em;
				}
				.icon {
					margin-left: 65%;
					margin-top: 2em;
					height: 120px;
					width: 120px;
				}
			}
			&__top {
				grid-area: top;
				height: 100%;
				width: 80%;
				display: grid;
				grid-template-rows: 1fr;
				grid-template-columns: 1fr;
				grid-template-areas: "text ";

				img {
					display: none;
				}
			}
			&__bottom {
				width: 80%;
			}
		}
	}
	@media only screen and (max-width: 375px) {
		.grid-container {
			&__text {
				p {
					font-size: 0.9rem;
				}
				.icon {
					height: 100px;
					width: 100px;
				}
			}
			&__top {
				grid-area: top;
				height: 100%;
				width: 80%;
				display: grid;
				grid-template-rows: 1fr;
				grid-template-columns: 1fr;
				grid-template-areas: "text ";

				img {
					display: none;
				}
			}
			&__bottom {
				width: 80%;
			}
		}
	}
	@media only screen and (max-width: 360px) {
		.grid-container {
			&__text {
				h1 {
					font-size: 1.2rem;
				}

				p {
					font-size: 1rem;
				}
				.icon {
					margin-left: 73%;
					height: 75px;
					width: 75px;
				}
			}
		}
	}
</style>
