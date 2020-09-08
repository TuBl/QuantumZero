<template>
	<div class="people__container">
		<Person
			:direction="false"
			text="Take our survey"
			imgName="person-1.svg"
			class="person1"
			:id="1"
		></Person>
		<Person
			:direction="true"
			text="Relax while our experts assemble a list for you"
			imgName="person-2.svg"
			class="person2"
			:id="2"
		></Person>
		<Person
			:direction="false"
			text="Reach out to us at any time"
			imgName="person-3.svg"
			class="person3"
			:id="3"
		></Person>
		<Person
			:direction="true"
			text="Review Your Build"
			imgName="person-4.svg"
			class="person4"
			:id="4"
		></Person>
		<Person
			:direction="true"
			text="Pay via PayPal or transfer"
			imgName="person-5.svg"
			class="person5"
			:id="5"
		></Person>
		<Person
			:direction="true"
			text="Doorstep delivery within 2 weeks"
			imgName="person-6.svg"
			class="person6"
			:id="6"
		></Person>
		<router-link to="/" class="btn">Home</router-link>
	</div>

	<!-- <Person :direction="false" text="lorem ipsum" imgName="person-1.svg"></Person> -->
</template>

<script>
	import Person from "../components/Person";
	export default {
		name: "LearnMore",
		components: {
			Person,
		},
	};
</script>

<style lang="scss" scoped>
	.people__container {
		width: 80%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2em;
		place-items: center;
		grid-template-rows: repeat(6, 1fr);
		grid-template-areas:
			"person1    person1"
			"person2    person2"
			"person3    person3"
			"person4    person4"
			"person5    person5"
			"person6    person6"
			"btn    	btn";
		.person1 {
			grid-area: person1;
			width: 100%;
		}
		.person2 {
			grid-area: person2;
			width: 100%;
		}
		.person3 {
			grid-area: person3;
			width: 100%;
		}
		.person4 {
			grid-area: person4;
			width: 100%;
		}
		.person5 {
			grid-area: person5;
			width: 100%;
		}
		.person6 {
			grid-area: person6;
			width: 100%;
		}
		.btn {
			grid-area: btn;
			background: var(--text-primary);
			width: 50%;
			height: 2.5em;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			color: black;
			border-radius: 1em;
		}
	}
	@media only screen and (min-width: 3440px) {
		.people__container {
			.btn {
				height: 3.5rem;
				font-size: 2rem;
				width: 25%;
			}
		}
	}
</style>
