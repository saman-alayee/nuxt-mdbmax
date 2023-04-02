<template>
  <div class="price-card-container">
    <base-card
      v-if="borderTop"
      style="
        border-top: 5px solid var(--yellow);
        height: 44rem;
        margin-top: -2rem;
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
            <p>{{ feature_seven }}</p>
          </div>
          <div class="btn-container mt-4">
            <nuxt-link :to="localePath('/permiumPlan')">
              <BaseButton
                :text="$t('choose')"
                backgroundColor="var(--yellow)"
                textColor="var(--white)"
                outline="true"
            /></nuxt-link>
          </div>
          <div class="img-container mt-5 m-2 pt-5">
            <img src="@/assets/images/2.50.png" width="320px" alt="" />
          </div>
        </div>
      </template>
    </base-card>
    <base-card v-else-if="basic" style="height: 42rem">
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
            <p>{{ feature_seven }}</p>
          </div>
          <div class="btn-container mt-4">
            <nuxt-link :to="localePath(`/${link}`)">
              <BaseButton :text="$t('choose')" outline="true"
            /></nuxt-link>
          </div>
          <div class="img-container" style="margin-top: 8rem">
            <img
              :src="require(`@/assets/images/${image}`)"
              width="320px"
              alt=""
            />
          </div>
        </div>
      </template>
    </base-card>
    <base-card v-else style="height: 42rem">
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
            <p>{{ feature_seven }}</p>
          </div>
          <div class="btn-container mt-4">
            <nuxt-link :to="localePath(`/${link}`)">
              <BaseButton :text="$t('choose')" outline="true"
            /></nuxt-link>
          </div>
          <div class="img-container mt-2">
            <img
              :src="require(`@/assets/images/${image}`)"
              width="320px"
              alt=""
            />
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
    feature_seven: {
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
    image: {
      type: String,
      require: true,
    },
    basic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.price-card-container {
  margin-top: 4rem;
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
  font-size: 17px;
}
@media (max-width: 768px) {
  .price-card-container {
    margin-left: 15px;
    width: 20rem;
    margin-top: 0rem;
  }
}
@media (max-width: 968px) {
  .img-container img {
    width: 210px;
  }
}
</style>
