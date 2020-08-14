<template>
	<nav>
		<img src="../assets/logo.png" alt="" class="logo" />
		<ul class="nav__links">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/contact">Contact</router-link>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: "Nav",
	};
</script>

<style lang="scss" scoped>
	nav {
		height: 100%;
		width: 80%;
		color: white;
		display: grid;
		padding: 2em;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: "logo      links";
		img {
			grid-area: logo;
			height: 150px;
			width: 150px;
			margin-top: -2.5em;
			margin-left: 5em;
		}
		ul {
			grid-area: links;
			list-style: none;
			font-size: 2em;
			a {
				padding: 1em;
			}
		}
	}

	@media only screen and (min-width: 3440px) {
		nav {
			height: 100%;
			width: 80%;
			color: white;
			display: grid;
			padding: 9.5em;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			grid-template-areas: "logo      links";
			img {
				grid-area: logo;
				height: 200px;
				width: 200px;
				margin-top: -2.5em;
				margin-left: 4em;
			}
			ul {
				font-size: 3rem;
				margin-left: 7em;
			}
		}
	}
	@media only screen and (max-width: 460px) {
		nav {
			height: 100%;
			width: 100%;
			padding: 2em;
			margin-left: -6em;
			color: white;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			grid-template-areas: "logo      links";
			img {
				grid-area: logo;
				height: 90px;
				width: 90px;
			}
			ul {
				grid-area: links;
				list-style: none;
				font-size: 1rem;
				a {
					padding: 1em;
				}
			}
		}
	}
</style>
