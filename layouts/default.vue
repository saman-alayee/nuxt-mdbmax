<template>
  <div class="main">
    <TheHeader />

    <div class="container application-animation">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/pageComponents/Navigation/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}
</script>
<style scoped>
html {
  font-size: 30px;
}
.main {
  margin: 0;
  height: 100vh;
  overflow-x: hidden;
  padding-bottom: 7rem;
  background-color: var(--light--green) !important;
}
a {
  text-decoration: none;
  color: var(--white);
}
.application-animation {
  animation: 0.9s applicationAnimation;
}
@keyframes applicationAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
