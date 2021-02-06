<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >

    <component :is="selectedTab"></component>
  </base-card>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  props: [],
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: '1',
          title: 'Official Guide',
          description: 'The official vuejs documentation',
          link: 'https://vuejs.org',
        },
        {
          id: '2',
          title: 'Google',
          description: 'The biggest resource of learning stuffs',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      storedResources: this.storedResources
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>