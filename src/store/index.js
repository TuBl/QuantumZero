import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		answers: [],
	},
	getters: {
		ANSWERS_GETTER: (state) => {
			return state.answers;
		},
	},
	actions: {
		postAnswers({ commit }, answers) {
			commit("SET_ANSWERS", answers);
		},
	},
	mutations: {
		SET_ANSWERS: (state, answers) => (state.answers = answers),
	},
	modules: {},
});
