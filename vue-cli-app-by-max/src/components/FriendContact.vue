<template>
	<li>
		<h2>
			{{ friend.name }}
		</h2>
		<button @click="toggleDetails">
			Show Details
		</button>
		<ul v-if="detailsAreAvailable">
			<li><strong>Phone: </strong>{{ friend.phone }}</li>
			<li><strong>Email: </strong>{{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	data() {
		detailsAreAvailable: false,
		friend: { 
			id: 'shohan', 
			name: 'Shohanul Alam', 
			phone: '0188923974', 
			email: 'shohan5917@gmail.com'
		}
	},
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
}
</script>	


