<template>
  <div style="height: 37rem; margin-top: 5rem">
    <BaseCard>
      <template slot="content">
        <div>
          <h5 class="text-light text-justify" :dir="$dir()">
            {{ $t("successTitle") }}
          </h5>
          <p class="text-light text-justify" :dir="$dir()">
            {{ $t("sucess") }}
          </p>
        </div>
        <div class="d-flex justify-content-center mt-5">
          <base-button :text="$t('continue')" outline= false @click="callSuccess" />
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
      window.location.href = 'https://benameiran.golf/login/';
    },
  },
  mounted() {
    this.$store.dispatch("login/sendData");
  },
};
</script>

<style></style>
