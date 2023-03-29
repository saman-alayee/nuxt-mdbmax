<template>
  <div>
    <businessPlan/>
  </div>
</template>

<script>
import businessPlan from '../../../components/pageComponents/Main/businessPlan.vue';

export default {
    components: { businessPlan },
         middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.login.email) {
      return redirect("/");
    }
  },

}
</script>

<style>

</style>