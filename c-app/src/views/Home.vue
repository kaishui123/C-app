<template>
  <div class="home-container">
    <RouterView />
    <Tabber />
  </div>
</template>

<script>
import Tabber from '@/components/Tabber.vue';

export default {
  components: {
    Tabber,
  },
};
</script>

<style>
</style>
