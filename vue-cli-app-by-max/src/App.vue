<template>
	<section>
		<h2>My Friends</h2>
		<ul>
			<friend-contact
				v-for="friend in friends"
				:key="friend.id"
				:id="friend.id"
				:name="friend.name"
				:phone-number="friend.phone"
				:email-address="friend.email"
				:is-favorite="friend.isFavorite"
				@toggle-favorite="toggleFavoriteStatus"
			>
			</friend-contact>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			friends: [
				{
					id: "shohan",
					name: "Shohanul Alam",
					phone: "0188923974",
					email: "shohan5917@gmail.com",
					isFavorite: true
				},
				{
					id: "abul",
					name: "Abul Abul",
					phone: "0188923974",
					email: "abul@gmail.com",
					isFavorite: false
				}
			]
		};
	},
	methods: {
		toggleFavoriteStatus(friendId) {
			const identifiedFriend = this.friends.find(
				friend => friend.id === friendId
			);
			identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
		}
	}
};
</script>
