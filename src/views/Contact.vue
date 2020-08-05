<template>
	<div class="flex-container">
		<div class="flex-container__text">
			<h1>Questions? We are here to help</h1>
			<p>
				Got something on your mind? feel free to reach out to us with any
				inquiries and we will be glad to get back to you ASAP!
			</p>
		</div>
		<BaseInput label="Name"></BaseInput> <BaseInput label="Email"></BaseInput>
		<div class="flex-container__text-area">
			<label for="message">Message</label>
			<textarea name="message" id="message"></textarea>
		</div>
		<button class="btn">Submit</button>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	.flex-container {
		&__text {
			text-align: justify;
			width: 50%;
			height: auto;
			padding-bottom: 3em;
			h1 {
				color: #fffffe;
				position: relative;
			}
			h1::before {
				content: "";
				position: absolute;
				top: -40%;
				left: 0.4%;
				background: #fe519e;
				border: 1px solid #fe519e;
				height: 0.3em;
				width: 80px;
			}
			p {
				color: #fe519e;
				font-size: 2em;
			}
		}
		display: flex;
		flex-direction: column;
		height: auto;
		width: 65%;
		justify-content: center;
		align-items: flex-start;
		text-align: center;

		&__text-area {
			width: 100%;
			position: relative;
			padding: 5em;
			padding-left: 0em;
			label {
				position: absolute;
				color: #fe519e;
				font-size: 2em;
				top: -0.2em;
			}
			textarea {
				width: 100%;
				height: 250px;
			}
		}
		.btn {
			width: 400px;
			height: 2.5em;
			font-size: 2.5rem;
			align-self: center;
			display: inline-block;
			background: #fe519e;
			border: 0px;
			border-radius: 29px;
			margin-bottom: 5em;
		}
		.btn:hover {
			cursor: pointer;
		}
	}
</style>
