<template>
  <HeaderEmployee title="RESTful API Vue js" />
  <router-view></router-view>
</template>

<script>
import HeaderEmployee from './components/HeaderEmployee.vue';

export default {
  name: 'App',
  components: {
    HeaderEmployee,
  },
};
</script>

<style></style>
