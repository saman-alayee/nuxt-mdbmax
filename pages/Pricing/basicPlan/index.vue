<template>
  <div>
    <BasicPlan/>
  </div>
</template>

<script>
import BasicPlan from '../../../components/pageComponents/Main/basicPlan.vue';

export default {
    components: { BasicPlan },
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