<template>
	<div class="icons-container">
		<a href="https://www.instagram.com/quantumzer0/" target="_blank">
			<fa-icon
				:icon="['fab', 'instagram']"
				size="4x"
				class="icon instagram"
			></fa-icon>
		</a>

		<a href="https://www.facebook.com/QuantumZero.net" target="_blank">
			<fa-icon
				:icon="['fab', 'facebook-square']"
				size="4x"
				class="icon facebook"
			></fa-icon>
		</a>
		<a href="" target="_blank">
			<fa-icon
				:icon="['fab', 'twitter-square']"
				size="4x"
				class="icon twitter"
			></fa-icon>
		</a>
		<a href="" target="_blank">
			<fa-icon
				:icon="['fab', 'whatsapp-square']"
				size="4x"
				class="icon whatsapp"
			></fa-icon>
		</a>
	</div>
</template>

<script>
	export default {
		name: "Social",
	};
</script>

<style lang="scss" scoped>
	.icon {
		color: #fffffe;
		border-radius: 50%;
		padding: 0.15em;
		width: 0.75em;
		height: 0.75em;
		margin: 0.2em;
	}
	.facebook {
		background-color: #1877f2;
	}
	.instagram {
		background: linear-gradient(
			43.94deg,
			#eea054 16.16%,
			#d64763 50.11%,
			#b62a99 83.68%
		);
	}
	.whatsapp {
		background: #48c95f;
	}
	.twitter {
		background: #55ace3;
	}

	@media only screen and (max-width: 414px) {
		.icon {
			color: #fffffe;
			border-radius: 50%;
			padding: 0.07em;
			width: 0.4em;
			height: 0.4em;
			margin: 0.2em;
		}
	}
</style>
