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
			<li>Motherboard: {{ motherBoard }}</li>
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
				} else if (this.$route.params.id == 2) {
					return "diamong-tier.jpg";
				} else if (this.$route.params.id == 3) {
					return "pre-built.jpg";
				} else {
					return "pre-built-2.jpg";
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
					return "i7-10700K 8-Core 3.8 GHz";
				}
			},
			gpu() {
				if (this.$route.params.id == 1) {
					return "RTX 2080 Ti ";
				} else {
					return "RTX 2070 Super";
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
					return "Samsung 970 EVO Plus Series - 1TB PCIe NVMe - M.2 Internal SSD  ";
				} else {
					return "Samsung 970 EVO Plus Series - 2TB PCIe NVMe - M.2 Internal SSD";
				}
			},
			hdd() {
				return 'Seagate BarraCuda ST2000DM006 2TB 7200 RPM 64MB Cache SATA 6.0Gb/s 3.5" Hard Drive';
			},
			motherBoard() {
				if (this.$route.params.id == 1) {
					return "ASUS Republic of Gamers Maximus XII Extreme LGA 1200 E-ATX";
				} else {
					return "ASUS ROG Maximus XII Hero (Wi-Fi AC) LGA 1200";
				}
			},
			psu() {
				if (this.$route.params.id == 1) {
					return "CORSAIR HXi Series HX1200i 1200W 80 PLUS PLATINUM Haswell Ready Full Modular";
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
			// margin-top: 10rem;
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
</style>
