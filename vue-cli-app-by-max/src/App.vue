<template>
	<section>
		<h2>My Friends</h2>
		<ul>
			<friend-contact
			v-for="friend in friends"
			:key="friend.id"
			:name="friend.name"
			:phone-number="friend.phone"
			:email-address="friend.email"
			>
			</friend-contact>
		</ul>
	</section>
</template>

<script>
export default 
{
  data() {
	return {
		friends: [
			{ id: 'shohan', name: 'Shohanul Alam', phone: '0188923974', email: 'shohan5917@gmail.com'},
			{ id: 'abul', name: 'Shohanul Abul', phone: '0188923974', email: 'abul@gmail.com'}
		]
	}
  },
}
</script>