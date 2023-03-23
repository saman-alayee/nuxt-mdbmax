<template>
  <nav class="navbar navbar-container d-flex justify-content-between">
    <a class="navbar-brand">
      <img class="mobile-size" src="@/assets/images/main-logo.png" width="250" alt="" />
    </a>
    <div class="d-flex">
   <div>  <b-dropdown
        :text="$t('lan')"
        variant="light"
        class="m-1"
        style="height: 42px"
      >
        <b-dropdown-item-button>
         <b-dropdown-item> <nuxt-link :to="switchLocalePath('en')"><div class="d-flex">
            <div class="pr-1 p-1">
              <img
                src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg"
                width="25px"
                alt=""
              />
            </div>
            <div class="p-1">
             English
            </div>
          </div></nuxt-link></b-dropdown-item>
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-dropdown-item><nuxt-link :to="switchLocalePath('fa')"><div class="d-flex">
            <div class="pr-1 p-1">
              <img
                src="data:image/png;base64,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"
                width="25px"
                alt=""
              />
            </div>
            <div class="mt-1 pr-2 p-1">
           Persian
            </div>
          </div></nuxt-link></b-dropdown-item> 
        </b-dropdown-item-button>
      </b-dropdown></div> 

     <div><nuxt-link to="/"
        ><base-button style="font-size: 1rem; margin: 5px" :text="$t('login')"
      /></nuxt-link></div> 
    </div>
  </nav>
</template>

<script>
import baseButton from "../../UI/Button/baseButton.vue";

export default {
  components: { baseButton },
  name: "TheHeader",
  data() {
    return {
      text: "English",
    };
  },
  methods: {
    changeLan(event) {
      if (this.text == "English") {
        this.text = "Persian";
        this.$router.replace(this.switchLocalePath(event));
      } else {
        this.text = "English";
        this.$router.replace(this.switchLocalePath(event));
      }
    },
  },
};
</script>

<style scoped>
.navbar-container {
  background-color: var(--dark--green);
}
@media (max-width: 468px) {
  .mobile-size {
   width: 140px;
  }
}
</style>
