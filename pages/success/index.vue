<template>
  <div>
    <successPage />
  </div>
</template>

<script>
import successPage from "../../components/pageComponents/Main/successPage.vue";

export default {
  components: { successPage },
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.login.email) {
      return redirect("/");
    }
  },
};
</script>

<style></style>
