import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
	mutations: {
		SET_ANSWERS: (state, answers) => (state.answers = answers),
	},
	modules: {},
});
