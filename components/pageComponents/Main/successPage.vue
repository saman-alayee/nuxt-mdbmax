<template>
  <div style="height: 37rem">
    <BaseCard>
      <template slot="content">
        <div>
          <p class="text-primary text-center h2">Success</p>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <base-button text="Go to website" @click="callSuccess"/>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "../../UI/Cards/baseCard.vue";
import BaseButton from "../../UI/Button/baseButton.vue";
export default {
  components: { BaseCard, BaseButton },
  methods: {
    callSuccess() {
      this.$store.dispatch("login/sendData");
    },
  },
};
</script>

<style></style>
