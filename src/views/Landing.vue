<template>
	<div class="grid-container">
		<div class="grid-container__hero">
			<h1 class="grid-container__hero-text">
				Your dream build starts <br />here
			</h1>
			<router-link to="/learn-more" class="btn">Learn More</router-link>
		</div>

		<div class="grid-container__pre-built">
			<BaseHeadline
				class="grid-container__pre-built__heading"
				text="PRE-BUILT"
			/>
			<router-link to="/product/1">
				<Product
					class="image_1"
					imgName="out-world-min.jpg"
					text="Out of this world tier"
				></Product>
			</router-link>
			<router-link to="/product/2">
				<Product
					class="image_2"
					imgName="diamong-tier.jpg"
					text="Diamond tier"
				></Product>
			</router-link>
		</div>

		<div class="grid-container__custom-built">
			<BaseHeadline
				class="grid-container__custom-built__heading"
				text="CUSTOM-BUILT"
			/>
			<div class="grid-container__custom-built__text">
				Do you wish to have something that is made just for you? Take our brief
				survey and you will be contacted within 1-3 Work days
			</div>
			<router-link to="/survey" class="btn">Lets Get building</router-link>
		</div>
	</div>
</template>

<script>
	import Product from "../components/Product";
	export default {
		name: "Landing",
		components: {
			Product,
		},
	};
</script>

<style lang="scss" scoped>
	.grid-container {
		display: grid;
		height: auto;
		position: relative;
		margin-top: -15em;
		width: 100%;
		grid-template-columns: 1fr;
		grid-template-areas:
			"hero"
			"pre-built"
			"custom-built";
		grid-template-rows: 100vh 100vh 100vh;
		margin-bottom: 3.5em;

		&__hero {
			grid-area: hero;
			color: #fffffe;
			height: 100%;
			width: 100%;
			font-size: 5em;
			position: absolute;
			top: 0;
			left: 0;
			background: url("../assets/hero.jpg");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: 50% 50%;
			background-color: #131516;
			h1 {
				text-align: justify;
				font-size: 0.8em;
				position: absolute;
				top: 22%;
				left: 18%;
			}
			.btn {
				width: 400px;
				height: 3em;
				font-size: 2.5rem;
				left: 61.1%;
				top: 80%;
				position: absolute;
				background: #fe519e;
				border: 0px;
				border-radius: 29px;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				color: black;
			}
			.btn:hover {
				cursor: pointer;
			}
		}

		&__pre-built {
			grid-area: pre-built;
			color: #fffffe;
			height: 100%;
			width: 100%;
			font-size: 2rem;
			display: grid;
			place-items: center;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-template-areas:
				"heading	heading"
				"image_1	image_2";
			&__heading {
				grid-area: heading;
				height: auto;
				width: 20%;
			}
			img {
				height: 420px;
				width: 480px;
				border-radius: 2%;
				box-shadow: 0px 0px 10px #fffffe;
			}
			h3 {
				padding-top: 1em;
			}
			.image_1 {
				grid-area: image_1;
				height: 100%;
				width: 100%;
			}
			.image_2 {
				grid-area: image_2;
				height: 100%;
				width: 100%;
			}
		}
		&__custom-built {
			grid-area: custom-built;
			height: 100%;
			width: 100%;
			color: #fffffe;
			font-size: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;

			&__heading {
				margin-bottom: 2.5em;
			}
			&__text {
				font-size: 1.5em;
				width: 50%;
			}

			.btn {
				width: 400px;
				height: 2.5em;
				font-size: 2.5rem;
				left: 39.9%;
				top: 95%;
				position: absolute;
				display: inline-block;
				background: #fe519e;
				border: 0px;
				border-radius: 29px;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				color: black;
			}
			.btn:hover {
				cursor: pointer;
			}
		}
	}

	@media only screen and (min-width: 3440px) {
		.grid-container {
			gap: 12em;
			margin-top: -25rem;
			&__pre-built {
				grid-area: pre-built;
				color: #fffffe;
				height: 100%;
				width: 100%;
				font-size: 2rem;
				display: grid;
				place-items: center;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				grid-template-areas:
					"heading	heading"
					"image_1	image_2";
				&__heading {
					grid-area: heading;
					height: auto;
					width: 15%;
				}
				img {
					height: 420px;
					width: 480px;
					border-radius: 2%;
					box-shadow: 0px 0px 10px #fffffe;
				}
				h3 {
					padding-top: 1em;
				}
			}
			&__custom-built {
				&__heading {
					grid-area: heading;
					height: auto;
					width: 20%;
					padding-bottom: 2em;
				}
				&__text {
					font-size: 3.1rem;
				}
				padding-bottom: 5em;
				.btn {
					width: 600px;
					height: 3.5em;
					font-size: 2.5rem;
					left: 40.2%;
					top: 90%;
					position: absolute;
					display: inline-block;
					background: #fe519e;
					border: 0px;
					border-radius: 29px;
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
					color: black;
				}
				.btn:hover {
					cursor: pointer;
				}
			}
		}
	}
	@media only screen and (max-width: 768px) {
		.grid-container {
			display: grid;
			height: auto;
			position: relative;
			margin-top: -15em;
			width: 100%;
			grid-template-columns: 1fr;
			grid-template-areas:
				"hero"
				"pre-built"
				"custom-built";
			grid-template-rows: 100vh 100vh 100vh;
			margin-bottom: 3.5em;
			&__hero {
				h1 {
					font-size: 2.5rem;
					margin-left: -1.5em;
				}
				.btn {
					width: 8em;
					height: 3em;
					font-size: 2.5rem;
					left: 50%;
				}
			}

			&__pre-built {
				grid-area: pre-built;
				color: #fffffe;
				height: 100%;
				width: 100%;
				font-size: 2rem;
				display: grid;
				place-items: center;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				grid-template-areas:
					"heading	heading"
					"image_1	image_2";
				&__heading {
					grid-area: heading;
					height: auto;
					width: 50%;
				}
				img {
					height: 240px;
					width: 240px;
					border-radius: 2%;
					box-shadow: 0px 0px 10px #fffffe;
				}
				.image_1 {
					grid-area: image_1;
					height: 100%;
					width: 100%;
				}
				.image_2 {
					grid-area: image_2;
					height: 100%;
					width: 100%;
				}
			}

			&__custom-built {
				&__text {
					font-size: 2rem;
					margin-bottom: 5em;
				}

				.btn {
					width: 10em;
					font-size: 2.5rem;
					left: 25%;
					top: 90%;
				}
			}
		}
	}

	@media only screen and (max-width: 414px) {
		.grid-container {
			place-items: center;
			&__hero {
				h1 {
					text-align: center;
					font-size: 1.5rem;
					position: absolute;
					top: 25%;
					left: 18%;
				}
				.btn {
					width: 10em;
					font-size: 1rem;
					align-self: center;
				}
				.btn:hover {
					cursor: pointer;
				}
				background: url("../assets/hero-414.jpg");
				background-repeat: no-repeat;
				background-size: cover;
				background-position: 50% 50%;
				background-color: #131516;
			}
			&__pre-built {
				font-size: 1rem;
				display: flex;
				margin-top: 15em;
				flex-direction: column;
				&__heading {
					height: auto;
					margin-bottom: 5em;
					width: 50%;
				}

				.image_1 {
					grid-area: image_1;
					height: 100%;
					width: 100%;
				}
				.image_2 {
					grid-area: image_2;
					height: 100%;
					width: 100%;
				}
			}
			&__custom-built {
				grid-area: custom-built;
				height: 100%;
				width: 100%;
				color: #fffffe;
				font-size: 1rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
				// margin-left: -25%;
				&__heading {
					margin-bottom: 2.5em;
				}
				&__text {
					font-size: 1rem;
					width: 50%;
				}
				.btn {
					width: 10em;
					font-size: 1.5rem;
					left: 20%;
					top: 90%;
					margin: 0;
				}
			}
		}
	}
	@media only screen and (max-width: 360px) {
		.grid-container {
			place-items: center;
			&__hero {
				background: url("../assets/hero-360.jpg");

				h1 {
					text-align: center;
					font-size: 1.2rem;
					position: absolute;
					top: 25%;
					left: 25%;
				}
				.btn {
					width: 10em;
					font-size: 1.3rem;
					left: 25%;
				}
				.btn:hover {
					cursor: pointer;
				}
			}
			&__pre-built {
				font-size: 1rem;
				display: flex;
				margin-top: 15em;
				flex-direction: column;
				height: auto;
				&__heading {
					height: auto;
					margin-bottom: 4em;
					width: 50%;
				}

				.image_1 {
					grid-area: image_1;
					height: 100%;
					width: 100%;
					padding-bottom: 5em;
				}
				.image_2 {
					grid-area: image_2;
					height: 100%;
					width: 100%;
				}
			}

			&__custom-built {
				margin-top: 15em;

				h1 {
					margin-bottom: 1.5em;
					font-size: 1.5rem;
				}

				&__text {
					font-size: 1.2rem;
					width: 80%;
				}

				.btn {
					width: 10em;
					font-size: 1.5rem;
					left: 2.5em;
					top: 95%;
					position: absolute;
					display: inline-block;
					background: #fe519e;
					border: 0px;
					border-radius: 29px;
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
					color: black;
				}
				.btn:hover {
					cursor: pointer;
				}
			}
		}
	}
</style>
