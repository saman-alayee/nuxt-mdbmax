<template>
  <div>
    <permiumPlan/>
  </div>
</template>

<script>
import permiumPlan from '../../../components/pageComponents/Main/permiumPlan.vue';

export default {
    components: { permiumPlan },
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