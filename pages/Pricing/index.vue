<template>
  <div>
    <ThePlans />
  </div>
</template>

<script>
import ThePlans from "../../components/pageComponents/Main/ThePlans.vue";
export default {
  middleware: "auth",
  name: "IndexPage",
  components: { ThePlans },
};
</script>
