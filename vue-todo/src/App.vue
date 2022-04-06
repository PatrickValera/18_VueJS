<script setup>
import { RouterLink, RouterView,useRouter,useRoute } from 'vue-router'
</script>

<script>


</script>




<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  /* border:1px solid blue; */
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>

