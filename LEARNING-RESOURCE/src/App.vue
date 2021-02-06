<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id">
      {{ resource.title }}
    </li>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';
export default {
  components: {
    LearningResource
  },
  data() {
    return {
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
};
</script>
