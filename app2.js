const app = Vue.createApp({
	data(){
		return {
			courseGoal: "Finish the Course!",
			vueLink: 'https://vuejs.org '
		};
	}
});

app.mount('#user-goal');