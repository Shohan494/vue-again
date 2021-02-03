<template>
	<section>
		<h2>My Friends</h2>
		<ul>
			<friend-contact 
			name="Shohan" 
			email-address="shohan5917@gmail.com">
			</friend-contact>
			<friend-contact 
			name="Shohan" 
			email-address="shohan5917@gmail.com">
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