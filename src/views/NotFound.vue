<template>
	<section class="main-container">
		<div class="main-container__first">
			<p>Oh Oh....</p>
			<p>Something went wrong</p>
		</div>
		<div class="main-container__second">
			<p>404</p>
			<p>Page not found</p>
		</div>
		<button class="main-container__btn" @click="onClick">Back</button>
	</section>
</template>

<script>
	export default {
		methods: {
			onClick() {
				this.$router.push("/");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.main-container {
		display: flex;
		flex-direction: column;
		position: relative;
		height: 100vh;
		width: 80%;
		justify-content: center;
		align-items: center;
		text-align: justify;
		color: #fe519e;
		p {
			margin-left: 2em;
		}
		&__first {
			position: absolute;
			left: 5%;
			top: 0%;
			width: 40%;
			height: 50%;
			border: 21px solid #fe519e;
			background: #2b2a38;
			box-sizing: border-box;
			border-radius: 23px;
			transform: rotate(-9.2deg);
			font-size: 2.5rem;
			line-height: 4rem;
			p {
				transform: rotate(9.2deg);
				margin-left: 1em;
			}
			p:nth-child(1) {
				margin-top: 3em;
				margin-bottom: 1em;
			}
		}
		&__second {
			position: absolute;
			width: 40%;
			height: 50%;
			left: 49%;
			top: 35%;
			border: 21px solid #fe519e;
			background: #2b2a38;
			box-sizing: border-box;
			border-radius: 23px;
			transform: rotate(-14.25deg);
			font-size: 2.5rem;
			line-height: 4rem;
			p {
				transform: rotate(14.25deg);
			}
			p:nth-child(1) {
				margin-top: 3em;
				margin-bottom: 1em;
				position: relative;
				&::after {
					content: "";
					height: 10px;
					width: 2em;
					background: #fe519e;
					position: absolute;
					left: -0.8em;
					bottom: -0.25em;
				}
			}
		}
		&__btn {
			cursor: pointer;
			position: absolute;
			bottom: 20%;
			left: 10%;
			height: 2.5em;
			width: 10em;
			font-size: 2.5rem;
			display: inline-block;
			background: #fe519e;
			border: 0px;
			border-radius: 29px;
		}
		&__btn:hover {
			cursor: pointer;
		}
	}

	@media only screen and (max-width: 768px) {
		.main-container {
			width: 100%;
			margin-bottom: 2em;
			margin-top: 3em;

			&__first {
				left: 25%;
				width: 60%;
				height: 40%;
				border: 18px solid #fe519e;
				transform: rotate(15deg);
				font-size: 1.6rem;

				p {
					transform: rotate(-15deg);
					margin-left: 1em;
				}
			}
			&__second {
				width: 60%;
				height: 40%;
				left: 25%;
				border: 18px solid #fe519e;
				transform: rotate(-25deg);
				font-size: 1.6rem;
				p {
					transform: rotate(25deg);
				}
				p:nth-child(1) {
					&::after {
						height: 8px;
					}
				}
			}
			&__btn {
				bottom: 6%;
				left: 25%;
				width: 10em;
				font-size: 2rem;
			}
		}
	}
	@media only screen and (max-width: 360px) {
		.main-container {
			&__first {
				left: 15%;
				width: 70%;
				font-size: 1rem;
				p {
					transform: rotate(-15deg);
					margin-left: 1em;
				}
			}
			&__second {
				width: 70%;
				left: 20%;
				font-size: 1rem;
			}
			&__btn {
				bottom: 6%;
				left: 17%;
				width: 10em;
				font-size: 1.5rem;
			}
		}
	}
	@media only screen and (min-width: 3440px) {
		.main-container {
			margin-top: 10em;
			width: 70%;
		}
	}
</style>
