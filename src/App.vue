<template>
	<div id="app">
		<Nav class="nav"></Nav>
		<router-view />
		<footer>2020|Quantum Zero - All rights reserved</footer>
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
	}

	a {
		color: #977e8b;
		text-decoration: none;
	}
	a:active,
	a:hover {
		color: #fe519e;
	}
	#app {
		height: 100vh;
		width: 100vw;
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
		}
	}
</style>
