<template>
	<section class="product-container">
		<Product
			:imgName="imgName"
			:text="text"
			class="product-container__product"
		></Product>
		<ul class="product-container__descreption">
			<li>CPU: {{ cpu }}</li>
			<li>GPU: {{ gpu }}</li>
			<li>RAM:{{ ram }}</li>
			<li>SSD: {{ ssd }}</li>
			<li v-if="$route.params.id == `1`">SSD2: {{ ssd }}</li>
			<li v-if="$route.params.id == `2`">HDD: {{ hdd }}</li>
			<li>Mother Board: {{ motherBoard }}</li>
			<li>PSU: {{ psu }}</li>
		</ul>
	</section>
</template>

<script>
	import Product from "../components/Product";

	export default {
		components: {
			Product,
		},

		computed: {
			imgName() {
				if (this.$route.params.id == 1) {
					return "out-world-min.jpg";
				} else {
					return "diamong-tier.jpg";
				}
			},
			text() {
				if (this.$route.params.id == 1) {
					return "Out of this world tier";
				} else {
					return "Diamond tier";
				}
			},
			cpu() {
				if (this.$route.params.id == 1) {
					return "i9-10900K 10-Core 3.7 GHz";
				} else {
					return "i7-8700K 6-Core 3.7 GHz";
				}
			},
			gpu() {
				if (this.$route.params.id == 1) {
					return "GTX 2080 Ti ";
				} else {
					return "GTX 1080 Ti";
				}
			},
			ram() {
				if (this.$route.params.id == 1) {
					return "CORSAIR Dominator Platinum RGB 64GB (4 x 16GB) 288-Pin DDR4 SDRAM DDR4 3200";
				} else {
					return "G.SKILL TridentZ RGB Series 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3000";
				}
			},
			ssd() {
				if (this.$route.params.id == 1) {
					return "Samsung 970 EVO Plus Series - 2TP PCIe NVMe - M.2 Internal SSD  ";
				} else {
					return '860 EVO Series 2.5" 500GB SATA III';
				}
			},
			hdd() {
				return 'Seagate BarraCuda ST2000DM006 2TB 7200 RPM 64MB Cache SATA 6.0Gb/s 3.5" Hard Drive';
			},
			motherBoard() {
				if (this.$route.params.id == 1) {
					return "ASUS Republic of Gamers Maximus XII Extreme LGA 1200 E-ATX Motherboard";
				} else {
					return "ASUS ROG Maximus X Hero (Wi-Fi AC) LGA 1151 (300 Series) Intel Z370 SATA 6Gb/s ATX Intel Motherboard";
				}
			},
			psu() {
				if (this.$route.params.id == 1) {
					return "CORSAIR HXi Series HX1200i 850W 80 PLUS PLATINUM Haswell Ready Full Modular";
				} else {
					return "CORSAIR HXi Series HX850i 850W 80 PLUS PLATINUM Haswell Ready Full Modular";
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.product-container {
		background: #2b2a38;
		border-radius: 1em;
		margin-bottom: 5em;
		width: 65%;
		padding: 5em;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		align-items: center;
		&__descreption {
			list-style: none;
			text-align: justify;
			color: #fffffc;
			box-sizing: border-box;
			padding-top: 3em;
			margin-bottom: 10em;
			li {
				padding: 1em;
			}
		}
	}

	@media only screen and (max-width: 3440px) {
		.product-container {
			width: 65%;
			margin-top: 10rem;
			margin-bottom: 10rem;
			&__product {
				margin-bottom: 5rem;
			}
			&__descreption {
				font-size: 2.5rem;
			}
		}
	}
	@media only screen and (max-width: 768px) {
		.product-container {
			width: 85%;
			&__descreption {
				font-size: 0.8rem;
			}
		}
	}
	@media only screen and (max-width: 414px) {
		.product-container {
			&__descreption {
				text-align: center;
				font-size: 0.7rem;
				li {
					padding-bottom: 0.5em;
				}
			}
		}
	}
	@media only screen and (max-width: 375px) {
		.product-container {
			border-radius: 0%;
			width: 100%;
		}
	}
	// @media only screen and (max-width: 768px) {
	// 	.product-container {
	// 		&__descreption {
	// 			font-size: 0.8rem;
	// 		}
	// 	}
	// }
</style>
