<template>
	<form class="flex-container" @submit.prevent="sendEmail" novalidate>
		<div class="flex-container__text">
			<h1>
				Kindly leave us your UAE phone number and Email so we can get in touch!
			</h1>
			<p>
				Any notes you want us to know? write it in the box below!
			</p>
		</div>
		<template v-if="$v.contact.phone.$error">
			<p v-if="!$v.contact.phone.required" class="error-message">
				Phone number is required.
			</p>
			<p v-if="!$v.contact.phone.numeric" class="error-message">
				Phone number must be numeric.
			</p>
		</template>
		<BaseInput
			label="Phone"
			name="phone"
			v-model="contact.phone"
			type="tel"
			pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
			placeholder="Phone"
			className="input-container"
			:error="$v.contact.phone.$error"
			@blur="$v.contact.phone.$touch()"
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
			name="email"
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
	import { required, email, numeric } from "vuelidate/lib/validators";
	import { mapGetters, mapActions } from "vuex";
	// import axios from "axios";

	export default {
		data() {
			return {
				contact: this.createFreshContactObject(),
			};
		},
		created() {
			if (this.$store.state.answers.length === 0) {
				this.$router.push("/");
			}
		},
		computed: {
			...mapGetters["ANSWERS_GETTER"],
		},
		mounted() {
			let script = document.createElement("script");
			script.setAttribute("src", "https://smtpjs.com/v3/smtp.js");
			document.head.appendChild(script);
		},
		validations: {
			contact: {
				phone: { required, numeric },
				email: { required, email },
				message: { required },
			},
		},
		methods: {
			...mapActions(["setEmailStatus", "setErrorStatus"]),

			createFreshContactObject() {
				return {
					phone: "",
					email: "",
					message: "",
				};
			},
			submitHandler() {
				this.$v.$touch();

				// if (this.$v.$invalid) {
				// 	console.log(this.contact);
				// 	this.contact = this.createFreshContactObject();
				// }
			},
			formatedAnswer() {
				let answer = this.$store.state.answers.map((a) => {
					return JSON.parse(JSON.stringify(a));
				});
				let string = answer.map((ans) => {
					return `<li>Question: ${ans.question} | Answer: ${ans.option}</li>`;
				});
				return `<html><ul>${string}</ul>
				</br>
				<h3>${this.contact.message}</h3>
				<h4>${this.contact.phone}</h4> | <h4>${this.contact.email}</h4>
				</html>`;
			},

			async sendEmail() {
				try {
					await window.Email.send({
						SecureToken: "b35328d8-3add-4c6a-85b2-41d6092d28c3",
						Host: "mail.quantumzero.net",
						Username: "qz@quantumzero.net",
						Password: "*Mestream22591*",
						To: "qz@quantumzero.net",
						From: "qz@quantumzero.net",
						Subject: "Custom build inquiry",
						Body: this.formatedAnswer(),
					}).then((message) => {
						if (message && message == "OK") {
							console.log(message);
							this.setEmailStatus(true);
							this.$router.push({ name: "thankyou" });
						} else {
							console.log(message);
							this.setErrorStatus(true);
							this.$router.push({ name: "error" });
						}
					});
				} catch (error) {
					console.log(error);
					if (error.response && error.response.status == 404) {
						this.$router.push({ name: "404" });
					} else {
						this.setErrorStatus(true);
						this.$router.push({ name: "error" });
					}
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.flex-container {
		// margin-top: 5em;
		&__text {
			text-align: justify;
			width: 50%;
			height: auto;
			padding-bottom: 3em;
			h1 {
				color: #fffffe;
				position: relative;
				font-size: 1.8rem;
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
				font-size: 1.5rem;
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
			// margin-top: 10em;

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
	@media only screen and (max-width: 768px) {
		.flex-container {
			width: 100%;
			// margin-top: 3em;
			align-items: center;
			&__text {
				width: 80%;
				h1 {
					font-size: 2rem;
				}

				p {
					font-size: 1.5rem;
					padding-top: 0.5em;
				}
			}

			.btn {
				width: 10em;
				font-size: 2rem;
			}
			.btn:hover {
				cursor: pointer;
			}
			.input-container {
				width: 80%;
			}
			&__text-area {
				width: 80%;
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
		}
	}
	@media only screen and (max-width: 414px) {
		.flex-container {
			width: 100%;
			&__text {
				width: 80%;
				h1 {
					font-size: 1.5rem;
				}

				p {
					font-size: 1.2rem;
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
				margin-left: 20%;
				width: 100%;
			}
			&__text-area {
				width: 100%;
				position: relative;
				padding: 5em;
				padding-left: 0em;
				margin-left: 20%;
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
		}
	}
	@media only screen and (max-width: 375px) {
		.flex-container {
			&__text {
				width: 80%;
				h1 {
					font-size: 1rem;
				}

				p {
					font-size: 1rem;
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
					font-size: 1rem;
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
