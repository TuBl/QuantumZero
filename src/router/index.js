import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Landing",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Landing.vue"),
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/contact",
		name: "Contact",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
	},
	{
		path: "/survey",
		name: "Survey",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Survey.vue"),
	},
	{
		path: "/survey-submit",
		name: "SurveySubmit",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/SurveySubmit.vue"),
	},
	{
		path: "/404",
		name: "404",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
		props: true,
	},
	{
		path: "/error",
		name: "error",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/NetworkError.vue"),
		props: true,
	},
	{
		path: "*",
		redirect: { name: "404" },
	},
];

const router = new VueRouter({
	routes,
	mode: "history",
	scrollBehavior(to, from, savePosition) {
		if (savePosition) {
			return savePosition;
		} else if (to.hash) {
			return {
				selector: to.hash,
			};
		} else {
			return { x: 0, y: 0 };
		}
	},
});

export default router;
