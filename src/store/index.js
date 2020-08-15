import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		answers: [],
		success: false,
		error: false,
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
		setEmailStatus({ commit }, success) {
			commit("SET_SUCCESS", success);
		},
		setErrorStatus({ commit }, error) {
			commit("SET_ERROR", error);
		},
	},
	mutations: {
		SET_ANSWERS: (state, answers) => (state.answers = answers),
		SET_SUCCESS: (state, success) => (state.success = success),
		SET_ERROR: (state, error) => (state.error = error),
	},
	modules: {},
});
