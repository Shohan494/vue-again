const app = Vue.createApp({
	data(){
		return {
			counter: 0,
			name: '',
			confirmedName: '',
			fullName: ''
		};
	},
	watch: {
		name(value){
			if(value === ''){
				this.fullName = '';
			} else {
				this.fullName = value + ' ' + 'Alam';
			}
			
		}
	},
	computed: {
		// fullName(){
		// 	console.log('Running outputFullName');
		// 	if(this.name === ''){
		// 		return '';
		// 	}
		// 	return this.name + ' ' + 'Alam';			
		// }
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