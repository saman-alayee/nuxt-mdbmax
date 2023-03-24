<template>
  <div style="height: 37rem; margin-top: 5rem">
    <BaseCard>
      <template slot="content">
        <div>
          <p class="text-primary text-center h2">{{ $t("sucess") }}</p>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <base-button :text="$t('continue')" @click="callSuccess" />
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
