<template>
	<div class="grid-container">
		<div class="grid-container__hero">
			<h1 class="grid-container__hero-text">
				Your dream build starts <br />here
			</h1>
			<router-link to="/survey" class="btn">START</router-link>
		</div>
		<!-- <div class="grid-container__pre-built">
			<h1>PRE-BUILT</h1>
			<div class="image_1">
				<img src="../assets/pre-built.jpg" alt="" />
				<h2>Gaming</h2>
			</div>
			<div class="image_2">
				<img src="../assets/pre-built-2.jpg" alt="" />
				<h2>Productivity</h2>
			</div>
		</div> -->
		<div class="grid-container__custom-built">
			<h1>CUSTOM-BUILT</h1>
			<div class="grid-container__custom-built__text">
				Do you wish to have something that is made just for you? Take our brief
				survey and you will be contacted within 1-3 Work days
			</div>
			<router-link to="/survey" class="btn">Lets Get building</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Landing",
	};
</script>

<style lang="scss" scoped>
	.grid-container {
		display: grid;
		height: auto;
		position: relative;
		margin-top: -10em;
		width: 100%;
		grid-template-columns: 1fr;
		grid-template-areas:
			"hero"
			// "pre-built"
			"custom-built";
		grid-template-rows: 100vh 100vh;
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

		// &__pre-built {
		// 	grid-area: pre-built;
		// 	color: #fffffe;
		// 	height: 100%;
		// 	width: 100%;
		// 	font-size: 2rem;
		// 	display: flex;
		// 	flex-wrap: wrap;
		// 	h1 {
		// 		width: 100%;
		// 		margin-top: 3em;
		// 		margin-bottom: 2em;
		// 	}
		// 	h1::after,
		// 	h1::before {
		// 		content: "";
		// 		position: absolute;
		// 		background: #fe519e;
		// 		border: 1px solid #fe519e;
		// 		border-radius: 2%;
		// 	}
		// 	h1::after {
		// 		height: 10px;
		// 		width: 70px;
		// 		top: 42.45%;
		// 		left: 56.5%;
		// 	}
		// 	h1::before {
		// 		height: 10px;
		// 		width: 70px;
		// 		left: 58.6%;
		// 		top: 41.421%;
		// 		transform: rotate(90deg);
		// 	}

		// 	.image_1 {
		// 		height: 100%;
		// 		width: 50%;
		// 		&::before,
		// 		&::after {
		// 			content: "";
		// 			position: absolute;
		// 			background: #fe519e;
		// 			border: 1px solid #fe519e;
		// 			border-radius: 2%;
		// 		}
		// 		&::before {
		// 			height: 10px;
		// 			width: 70px;
		// 			left: 37.8%;
		// 			top: 40.4%;
		// 			transform: rotate(90deg);
		// 		}
		// 		&::after {
		// 			height: 10px;
		// 			width: 70px;
		// 			left: 39.7%;
		// 			top: 39.4%;
		// 		}
		// 	}
		// 	.image_2 {
		// 		height: 100%;
		// 		width: 50%;
		// 	}

		// 	img {
		// 		height: 420px;
		// 		width: 480px;
		// 		border-radius: 2%;
		// 		box-shadow: 0px 0px 10px #fffffe;
		// 	}
		// }
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

			h1 {
				margin-bottom: 1.5em;
			}
			h1::after,
			h1::before {
				content: "";
				height: 10px;
				width: 70px;
				position: absolute;
				background: #fe519e;
				border: 1px solid #fe519e;
				border-radius: 2%;
			}
			h1::after {
				top: 65%;
				left: 60.5%;
			}
			h1::before {
				left: 62.6%;
				top: 63.5%;
				transform: rotate(90deg);
			}

			&__text {
				font-size: 2em;
				width: 50%;
			}
			&__text::before,
			&__text::after {
				content: "";
				height: 10px;
				width: 70px;
				position: absolute;
				background: #fe519e;
				border: 1px solid #fe519e;
				border-radius: 2%;
			}
			&__text::before {
				top: 61.6%;
				left: 33.5%;
				transform: rotate(90deg);
			}
			&__text::after {
				top: 60%;
				left: 35.05%;
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
			&__custom-built {
				h1::after,
				h1::before {
					content: "";
					height: 10px;
					width: 80px;
					position: absolute;
					background: #fe519e;
					border: 1px solid #fe519e;
					border-radius: 2%;
				}
				h1::after {
					top: 71%;
					left: 57%;
				}
				h1::before {
					left: 58.03%;
					top: 69.5%;
					transform: rotate(90deg);
				}

				&__text::before,
				&__text::after {
					content: "";
					height: 10px;
					width: 80px;
					position: absolute;
					background: #fe519e;
					border: 1px solid #fe519e;
					border-radius: 2%;
				}
				&__text::before {
					top: 68.5%;
					left: 40%;
					transform: rotate(90deg);
				}
				&__text::after {
					top: 67%;
					left: 41.03%;
				}
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

	@media only screen and (max-width: 460px) {
		.grid-container {
			margin-top: -10em;
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
					font-size: 1.5rem;
					left: 25%;
				}
				.btn:hover {
					cursor: pointer;
				}
			}

			&__custom-built {
				h1 {
					margin-bottom: 1.5em;
					font-size: 1.5rem;
				}
				h1::after,
				h1::before {
					content: "";
					height: 10px;
					width: 40px;
				}
				h1::before {
					top: 69.5%;
					left: 71%;
				}
				h1::after {
					top: 70.5%;
					left: 66.5%;
				}

				&__text {
					font-size: 1.5rem;
					width: 80%;
				}
				&__text::before,
				&__text::after {
					content: "";
					height: 10px;
					width: 40px;
				}
				&__text::before {
					top: 67.8%;
					left: 20.5%;
				}
				&__text::after {
					top: 66%;
					left: 23.6%;
				}
				.btn {
					width: 10em;
					font-size: 1.5rem;
					left: 25%;
					top: 88%;
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
	@media only screen and (max-width: 360px) {
		.grid-container {
			margin-top: -10em;
			place-items: center;
			&__hero {
				h1 {
					text-align: center;
					font-size: 1.3rem;
					position: absolute;
					top: 25%;
					left: 18%;
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

			&__custom-built {
				h1 {
					margin-bottom: 1.5em;
					font-size: 1.5rem;
				}
				h1::after,
				h1::before {
					content: "";
					height: 10px;
					width: 30px;
				}
				h1::before {
					top: 66.5%;
					left: 77%;
				}
				h1::after {
					top: 67.5%;
					left: 74.2%;
				}

				&__text {
					font-size: 1.5rem;
					width: 80%;
				}
				&__text::before,
				&__text::after {
					content: "";
					height: 10px;
					width: 30px;
				}
				&__text::before {
					top: 64.5%;
					left: 14.5%;
				}
				&__text::after {
					top: 63%;
					left: 17.2%;
				}
				.btn {
					width: 10em;
					font-size: 1.5rem;
					left: 2.5em;
					top: 88%;
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
