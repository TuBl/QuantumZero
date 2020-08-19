<template>
	<div id="app">
		<Nav class="nav"></Nav>
		<router-view />
		<footer>2020|Quantum Zero - All Rights Reserved</footer>
	</div>
</template>
<script>
	import Nav from "./components/Nav";
	export default {
		components: {
			Nav,
		},
	};
</script>
<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: "Montserrat", sans-serif;
	}
	body {
		background: #191821;
		text-align: center;
		place-items: center;
		overflow-x: hidden;
	}

	a {
		color: #977e8b;
		text-decoration: none;
	}
	a:active,
	a:hover {
		color: #fe519e;
	}
	.router-link-exact-active {
		color: #fe519e;
	}
	img {
		width: 100%;
		height: auto;
	}
	#app {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
		grid-template-areas:
			"nav"
			"view"
			"footer";
		grid-template-columns: 1fr;
		grid-template-rows: 150px 1fr 50px;
		.nav {
			z-index: 10000;
		}
		footer {
			grid-area: footer;
			height: 100%;
			width: 100%;
			background: #fe519e;
			color: black;
			display: flex;
			text-align: center;
			justify-content: center;
			align-items: center;
			// padding-right: 8em;
		}
		.error {
			border: 2px solid #fe519e;
		}
	}
	@media only screen and (min-width: 3440px) {
		footer {
			font-size: 2em;
		}
	}
</style>
