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
		<a href="https://twitter.com/quantumzeronet" target="_blank">
			<fa-icon
				:icon="['fab', 'twitter-square']"
				size="4x"
				class="icon twitter"
			></fa-icon>
		</a>
		<a href="https://api.whatsapp.com/send?phone=+971509906770" target="_blank">
			<fa-icon
				:icon="['fab', 'whatsapp-square']"
				size="4x"
				class="icon whatsapp"
			></fa-icon>
		</a>
		<a href="https://www.paypal.com/paypalme/quantumzeronet" target="_blank">
			<fa-icon
				:icon="['fab', 'paypal']"
				size="4x"
				class="icon paypal"
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
	.icon:hover {
		transform: scale(0.98);
		opacity: 0.9;
		transition: transform, opacity 200ms ease-in-out forwards;
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
	.paypal {
		background: rgb(0, 90, 149);
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
