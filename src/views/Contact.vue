<template>
	<form class="flex-container" @submit.prevent="submitHandler" novalidate>
		<div class="flex-container__text">
			<h1>Questions? We are here to help</h1>
			<p>
				Got something on your mind? feel free to reach out to us with any
				inquiries and we will be glad to get back to you ASAP!
			</p>
		</div>
		<template v-if="$v.contact.name.$error">
			<p v-if="!$v.contact.name.required" class="error-message">
				Name is required.
			</p>
		</template>
		<BaseInput
			label="Name"
			v-model="contact.name"
			type="text"
			placeholder="Name"
			className="input-container"
			:error="$v.contact.name.$error"
			@blur="$v.contact.name.$touch()"
		></BaseInput>

		<template v-if="$v.contact.email.$error">
			<p v-if="!$v.contact.email.required" class="error-message">
				Email is required.
			</p>
			<p v-else-if="!$v.contact.email.email" class="error-message">
				Invalid Email format
			</p>
		</template>
		<BaseInput
			label="Email"
			v-model="contact.email"
			type="email"
			placeholder="Email"
			className="input-container"
			:error="$v.contact.email.$error"
			@blur="$v.contact.email.$touch()"
		></BaseInput>
		<template v-if="$v.contact.message.$error">
			<p v-if="!$v.contact.message.required" class="error-message">
				Message is required.
			</p>
		</template>
		<div class="flex-container__text-area">
			<label for="message">Message</label>
			<textarea
				name="message"
				id="message"
				placeholder="Message"
				v-model="contact.message"
				:class="{ error: $v.contact.message.$error }"
				@blur="$v.contact.message.$touch()"
			></textarea>
		</div>
		<button class="btn" type="submit" :disabled="$v.$anyError">Submit</button>
		<p v-if="$v.$anyError" class="errorMessage">
			Please fill out the required field(s).
		</p>
	</form>
</template>

<script>
	import { required, email } from "vuelidate/lib/validators";

	export default {
		data() {
			return {
				contact: this.createFreshContactObject(),
			};
		},
		validations: {
			contact: {
				name: { required },
				email: { required, email },
				message: { required },
			},
		},
		methods: {
			createFreshContactObject() {
				return {
					name: "",
					email: "",
					message: "",
				};
			},
			submitHandler() {
				this.$v.$touch();
				console.log(this.$v);
				// if (this.$v.$invalid) {
				// 	console.log(this.contact);
				// 	this.contact = this.createFreshContactObject();
				// }
			},
		},
	};
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
				padding-left: 2em;
				padding-top: 2em;
				font-size: 1.2rem;
				width: 100%;
				height: 250px;
			}
		}

		.error-message {
			color: white;
		}
	}
	@media only screen and (min-width: 3440px) {
		.flex-container {
			margin-top: 10em;

			&__text {
				padding-bottom: 3em;
				h1 {
					font-size: 4rem;
				}
				h1::before {
					width: 2.5em;
				}
				p {
					font-size: 3rem;
				}
			}

			.btn {
				width: 600px;
				height: 3.5em;
				font-size: 2.5rem;
				margin-top: 1em;
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
			&__text-area {
				width: 100%;
				position: relative;
				padding: 5em;
				padding-left: 0em;
				label {
					position: absolute;
					color: #fe519e;
					font-size: 3em;
					top: -0.2em;
				}
				textarea {
					padding-left: 2em;
					padding-top: 2em;
					font-size: 2.2rem;
					width: 100%;
					height: 450px;
				}
			}
			.error-message {
				font-size: 2.5rem;
			}
			.error-message:nth-of-type(3) {
				padding-bottom: 1em;
			}
		}
	}
	@media only screen and (max-width: 460px) {
		.flex-container {
			width: 80%;
			margin-top: 2em;
			&__text {
				width: 100%;
				h1 {
					font-size: 1.5rem;
				}

				p {
					font-size: 1.5rem;
				}
			}

			.btn {
				width: 10em;
				font-size: 1.5rem;
			}
			.btn:hover {
				cursor: pointer;
			}
			.input-container {
				width: 100%;
			}
			&__text-area {
				width: 100%;
				position: relative;
				padding: 5em;
				padding-left: 0em;

				label {
					position: absolute;
					color: #fe519e;
					font-size: 1.5rem;
					top: 1em;
				}
				textarea {
					padding-left: 2em;
					padding-top: 2em;
					font-size: 1.2rem;
					width: 100%;
					height: 250px;
				}
			}

			.error-message {
				color: white;
			}
		}
	}

	@media only screen and (max-width: 360px) {
		.flex-container {
			width: 100%;
			align-items: center;
			&__text {
				width: 80%;
				h1 {
					font-size: 1.2rem;
				}

				p {
					font-size: 1.2rem;
				}
			}
			.input-container {
				margin-left: 4em;
			}
			&__text-area {
				margin-left: 4em;
				label {
					position: absolute;
					color: #fe519e;
					font-size: 1.2rem;
					top: 1em;
				}
				textarea {
					padding-left: 2em;
					padding-top: 2em;
					font-size: 1.2rem;
					width: 100%;
					height: 250px;
				}
			}

			.error-message {
				color: white;
			}
		}
	}
</style>
