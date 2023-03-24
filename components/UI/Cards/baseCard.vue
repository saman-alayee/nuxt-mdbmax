<template>
  <div class="base-card-container"  >
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props:{
    borderTop:{
      type:String,
      
    }
  }
};
</script>

<style scoped>
.base-card-container {
  background-color: var(--dark--green);
  padding: 24px;
  color: var(--white);
  box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: 100%;

}
</style>
