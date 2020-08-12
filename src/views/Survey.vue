<template>
	<section class="survey-container">
		<BaseQuestion
			:question="questions[currentQuestion].question"
			:options="questions[currentQuestion].options"
			@update-answers="updateAnswers"
			@update-questions="updateQuestions"
		></BaseQuestion>
		<BasePaginate
			:pagesNumber="questions.length"
			:questionsNumber="questions[currentQuestion].id"
		></BasePaginate>
	</section>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		data() {
			return {
				currentQuestion: 0,
				questions: [
					{
						question: "What is the main purpose of your build?",
						options: ["Gaming", "Work", "Mixed"],
						id: 1,
					},
				],
				answers: [],
			};
		},
		methods: {
			...mapActions(["postAnswers"]),
			updateQuestions(e) {
				if (e.option == "Gaming") {
					this.questions = [
						{
							question: "What Budget do you have in mind?",
							options: ["+ 10000$", "5K - 10K", "3K - 5K", "Less than 2k"],
							id: 1,
						},
						{
							question: "What kind of games do you plan on playing?",
							options: [
								"AAA (4K@60fps)",
								"AAA (1080P@60fps)",
								"MMORPGS",
								"MOBAs",
							],
							id: 2,
						},
						{
							question: "Where do you want the PC to be delivered in the UAE?",
							options: [
								"Abu Dhabi",
								"Dubai",
								"Sharjah",
								"Ajman",
								"Ras al-Khaimah",
								"Umm Al Quwain",
								"Fujirah",
							],
							id: 3,
						},
						{
							question: "Do you prefer Online or Bank transfer payment?",
							options: ["Online", "Bank transfer"],
							id: 4,
						},
					];
				} else if (e.option == "Work") {
					this.questions = [
						{
							question: "What Budget do you have in mind?",
							options: ["+ 10000$", "5K - 10K", "3K - 5K", "Less than 2k"],
							id: 1,
						},
						{
							question: "What kind of activities do you do?",
							options: [
								"Engineering Design",
								"Graphic Design",
								"Microsoft Office",
								"Internet Browsing",
							],
							id: 2,
						},
						{
							question: "Where do you want the PC to be delivered in the UAE?",
							options: [
								"Abu Dhabi",
								"Dubai",
								"Sharjah",
								"Ajman",
								"Ras al-Khaimah",
								"Umm Al Quwain",
								"Fujirah",
							],
							id: 3,
						},
						{
							question: "Do you prefer Online or Bank transfer payment?",
							options: ["Online", "Bank transfer"],
							id: 4,
						},
					];
				} else {
					this.questions = [
						{
							question: "What Budget do you have in mind?",
							options: ["+ 10000$", "5K - 10K", "3K - 5K", "Less than 2k"],
							id: 1,
						},
						{
							question: "What kind of activities do you do?",
							options: [
								"Engineering Design",
								"Graphic Design",
								"Microsoft Office",
								"Internet Browsing",
							],
							id: 2,
						},
						{
							question: "What kind of games do you plan on playing?",
							options: [
								"AAA (4K@60fps)",
								"AAA (1080P@60fps)",
								"MMORPGS",
								"MOBAs",
							],
							id: 3,
						},
						{
							question: "Where do you want the PC to be delivered in the UAE?",
							options: [
								"Abu Dhabi",
								"Dubai",
								"Sharjah",
								"Ajman",
								"Ras al-Khaimah",
								"Umm Al Quwain",
								"Fujirah",
							],
							id: 4,
						},
						{
							question: "Do you prefer Online or Bank transfer payment?",
							options: ["Online", "Bank transfer"],
							id: 5,
						},
					];
				}
				this.answers.push(e);
			},
			updateAnswers(e) {
				if (this.currentQuestion === this.questions.length - 1) {
					this.answers.push(e);
					this.postAnswers(this.answers);
					this.$router.push("survey-submit");
				} else {
					this.answers.push(e);
					this.currentQuestion++;
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.survey-container {
		display: flex;
		height: auto;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-bottom: 4em;
	}
</style>
