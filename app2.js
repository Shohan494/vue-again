const app = Vue.createApp({
	data(){
		return {
			courseGoalA: "Complete the Course!",
			courseGoalB: "<h2>Finish the Course!</h2>",
			vueLink: 'https://vuejs.org '
		};
	},
	methods: {
		outputGoal()
		{
			const randomNumber = Math.random();
			if(randomNumber < 0.5) {
				return this.courseGoalA;
			}else{
				return this.outputGoalB;
			}

		}
	}
});

app.mount('#user-goal');