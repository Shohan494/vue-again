const app = Vue.createApp({
  data() {
    return {
        friends: [
          { id: 'shohan', name: 'Shohanul Alam', phone: '0188923974', email: 'shohan5917@gmail.com'},
          { id: 'abul', name: 'Shohanul Abul', phone: '0188923974', email: 'abul@gmail.com'}
        ]
	  };
  },
  methods: {

  }
});

app.mount('#app');
