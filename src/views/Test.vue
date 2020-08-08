<template>
	<section class="survey-container">
		<BaseQuestion
			:question="questions[currentQuestion].question"
			:options="questions[currentQuestion].options"
			@update-answers="updateAnswers"
		></BaseQuestion>
		<BasePaginate
			:pagesNumber="questions.length"
			:questionsNumber="questions[currentQuestion].number"
		></BasePaginate>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				currentQuestion: 0,
				questions: {
					main: {
						question: "What is the main purpose of your build?",
						options: ["Gaming", "Work", "Mixed"],
						number: 1,
					},
					productivity: [
						{
							question: "What kind of activities do you do?",
							options: [
								"Engineering Design",
								"Graphic Design",
								"Microsoft Office",
								"Internet Browsing",
							],
							number: 1,
						},
					],
					gaming: [
						{
							question: "What kind of games do you plan on playing?",
							options: [
								"AAA (4K@60fps)",
								"AAA (1080P@60fps)",
								"MMORPGS",
								"MOBAs",
							],
							number: 1,
						},
						{
							question: "What Budget do you have in mind?",
							options: ["+ 10000$", "5K - 10K", "3K - 5K", "Less than 2k"],
							number: 2,
						},
					],
				},
				questions: [
					{
						question: "What is the main purpose of your build?",
						options: ["Gaming", "Work", "Mixed"],
						id: 1,
					},
					{
						question: "What Budget do you have in mind?",
						options: ["+ 10000$", "5K - 10K", "3K - 5K", "Less than 2k"],
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
						id: 2,
					},
					{
						question: "What Budget do you have in mind?",
						options: ["+ 10000$", "5K - 10K", "3K - 5K", "Less than 2k"],
						number: 3,
					},
					{
						question: "What kind of games do you plan on playing?",
						options: [
							"AAA (4K@60fps)",
							"AAA (1080P@60fps)",
							"MMORPGS",
							"MOBAs",
						],
						number: 4,
					},
				],
				questions: [
					{
						question: "What Budget do you have in mind?",
						options: ["+ 10000$", "5K - 10K", "3K - 5K", "Less than 2k"],
						id: 1,
					},
					{
						question: "What is the main purpose of your build?",
						options: ["Gaming", "Work", "Mixed"],
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
						question: "What kind of activities do you do?",
						options: [
							"Engineering Design",
							"Graphic Design",
							"Microsoft Office",
							"Internet Browsing",
						],
						id: 4,
					},
					{
						question: "What kind of activities do you do?",
						options: [
							"Engineering Design",
							"Graphic Design",
							"Microsoft Office",
							"Internet Browsing",
						],
						id: 5,
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
						id: 6,
					},
				],
				answers: [],
			};
		},
		methods: {
			updateAnswers(e) {
				if (this.currentQuestion === this.questions.length - 1) {
					console.log(this.answers);
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
