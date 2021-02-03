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

app.component('friend-contact', {
  template: 
      `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
      `,
  data(){
    return {
       detailsAreVisible: false,
       friend: { id: 'shohan', name: 'Shohanul Alam', phone: '0188923974', email: 'shohan5917@gmail.com'}
    }
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    } 
  }
});

app.mount('#app');
