<template>
	<section class="headline-container">
		<svg
			width="85"
			height="74"
			viewBox="0 0 85 74"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="headline-container__svg1"
		>
			<line y1="68" x2="85" y2="68" stroke="#FE519E" stroke-width="12" />
			<line x1="79" y1="74" x2="79" stroke="#FE519E" stroke-width="12" />
		</svg>
		<h1 class="logo">{{ text }}</h1>
		<svg
			width="85"
			height="74"
			viewBox="0 0 85 74"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="headline-container__svg2"
		>
			<line y1="68" x2="85" y2="68" stroke="#FE519E" stroke-width="12" />
			<line x1="79" y1="74" x2="79" stroke="#FE519E" stroke-width="12" />
		</svg>
	</section>
</template>

<script>
	export default {
		inheritAttrs: false,
		props: {
			text: [String],
		},
	};
</script>

<style lang="scss" scoped>
	.headline-container {
		position: relative;

		h1 {
			font-size: 3rem;
			color: white;
		}
		&__svg1 {
			position: absolute;
			top: 50%;
			left: 90%;
		}
		&__svg2 {
			position: absolute;
			left: -10%;
			top: -50%;
			transform: rotate(180deg);
		}
	}
	@media only screen and (min-width: 3440px) {
		.headline-container {
			h1 {
				font-size: 5rem;
			}
			&__svg1 {
				position: absolute;
				top: 55%;
				left: 92%;
			}
			&__svg2 {
				position: absolute;
				left: -10%;
				top: -50%;
				transform: rotate(180deg);
			}
		}
	}
	@media only screen and (max-width: 414px) {
		.headline-container {
			position: relative;
			h1 {
				font-size: 1.8rem;
				color: white;
			}

			&__svg1 {
				position: absolute;
				width: 50px;
				top: 0%;
				left: 90%;
			}
			&__svg2 {
				position: absolute;
				width: 50px;
				left: -10%;
				top: -100%;
				transform: rotate(180deg);
			}
		}
	}
	@media only screen and (max-width: 360px) {
		.headline-container {
			position: relative;
			h1 {
				font-size: 1.8rem;
				color: white;
			}
			&__svg1 {
				position: absolute;
				width: 50px;
				top: 0%;
				left: 90%;
			}
			&__svg2 {
				position: absolute;
				width: 50px;
				left: -10%;
				top: -100%;
				transform: rotate(180deg);
			}
		}
	}
</style>
