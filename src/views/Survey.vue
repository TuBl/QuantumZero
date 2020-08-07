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
				questions: [
					{
						question: "What is the main purpose of your build?",
						options: ["Gaming", "Work", "Mixed"],
						number: 1,
					},
					{
						question: "What kind of games do you plan on playing?",
						options: [
							"AAA (4K@60fps)",
							"AAA (1080P@60fps)",
							"MMORPGS",
							"MOBAs",
						],
						number: 2,
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
				answers: [],
			};
		},
		methods: {
			updateAnswers(e) {
				this.answers.push(e);
				this.currentQuestion++;
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
