<template>
  <div class="price-card-container">
    <base-card
      v-if="borderTop"
      style="
        border-top: 5px solid var(--yellow);
        height: 38rem;
        margin-top: 0rem;
      "
    >
      <template slot="content">
        <div class="text-container">
          <div class="title--card">
            <h3 style="color: var(--yellow)">{{ title }}</h3>
            <h5 class="text-muted">{{ price }}</h5>
          </div>
          <div class="text--card mt-4">
            <p>{{ feature_one }}</p>
            <p>{{ feature_two }}</p>
            <p>{{ feature_three }}</p>
            <p>{{ feature_four }}</p>
            <p>{{ feature_five }}</p>
            <p>{{ feature_six }}</p>
          </div>
          <div class="btn-container mt-4">
            <nuxt-link :to="`/pricing/${link}`">
              <BaseButton
                text="Choose Plan"
                backgroundColor="var(--yellow)"
                textColor="var(--white)"
                outline="true"
            /></nuxt-link>
          </div>
        </div>
      </template>
    </base-card>
    <base-card v-else style="height: 30rem;">
      <template slot="content">
        <div class="text-container">
          <div class="title--card">
            <h3>{{ title }}</h3>
            <h5 class="text-muted">{{ price }}</h5>
          </div>
          <div class="text--card mt-4">
            <p>{{ feature_one }}</p>
            <p>{{ feature_two }}</p>
            <p>{{ feature_three }}</p>
            <p>{{ feature_four }}</p>
            <p>{{ feature_five }}</p>
            <p>{{ feature_six }}</p>
          </div>
          <div class="btn-container mt-4">
            <nuxt-link :to="`/pricing/${link}`">
              <BaseButton text="Choose Plan" outline="true"
            /></nuxt-link>
          </div>
        </div>
      </template>
    </base-card>
  </div>
</template>

<script>
import BaseButton from "../Button/baseButton.vue";
import baseCard from "./baseCard.vue";
export default {
  components: { baseCard, BaseButton },
  data() {
    return {
      borderTop: false,
    };
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    feature_one: {
      type: String,
      require: true,
    },
    feature_two: {
      type: String,
      require: true,
    },
    feature_three: {
      type: String,
      require: true,
    },
    feature_four: {
      type: String,
      require: true,
    },
    feature_five: {
      type: String,
      require: false,
    },
    feature_six: {
      type: String,
      require: false,
    },
    borderTop: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.price-card-container {
  height: 100%;
  width: 550px;
  padding: 48px 26px;
  margin-left: -6rem;
}
.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title--card,
.text--card {
  text-align: center;
}
.text--card p {
  font-size: 20px;
}
@media (max-width: 768px) {
  .price-card-container {
    margin-left: 0;
    margin-top: -3rem;
  }
}
</style>
