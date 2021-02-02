const app = Vue.createApp({
	data(){
		return {
			counter: 0,
			name: '',
			lastName: '',
			confirmedName: '',
			fullName: ''
		};
	},
	watch: {
		counter(value){
			if(value > 50){
				this.counter = 0;
			}
		}
		// name(value){
		// 	if(value === ''){
		// 		this.fullName = '';
		// 	} else {
		// 		this.fullName = value + ' ' + this.lastName;
		// 	}
		// },
		// lastName(value){
		// 	if(value === ''){
		// 		this.fullName = '';
		// 	} else {
		// 		this.fullName = this.name + ' ' + value;
		// 	}
		// }
	},
	computed: {
		fullName(){
			console.log('Running outputFullName');
			if(this.name === '' || this.lastName === ''){
				return '';
			}
			return this.name + ' ' + this.lastName;		
		}
	},
	methods: {
		add(num){
			this.counter = this.counter + num;
		},
		reduce(num){
			this.counter = this.counter - num;
		},
		setName(event, lastName){
			this.name = event.target.value;
		},
		submitForm(event){
			alert('Submitted');
		},
		confirmInput(){
			this.confirmedName = this.name;
		},
		resetInput(){
			this.name = '';
		},
		outputFullName(){
			console.log('Running outputFullName');
			if(this.name === ''){
				return '';
			}
			return this.name + ' ' + 'Alam';
		}
	}

});

app.mount('#events');