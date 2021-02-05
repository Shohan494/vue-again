<template>
	<ul>
		
	</ul>
</template>

<script>
export default {
  data() {
    return {
    	storedResources: [
    		{ 
    			id: '1', 
    			title: 'Official Guide', 
    			description: 'The official vuejs documentation', 
    			link: 'https://vuejs.org' 
    		},
    		{ 
    			id: '2', 
    			title: 'Google', 
    			description: 'The biggest resource of learning stuffs', 
    			link: 'https://google.com' 
    		}
    	]
  },
  provide() {

  },
  methods: {

  },
  mounted() {

  }
};
</script>
