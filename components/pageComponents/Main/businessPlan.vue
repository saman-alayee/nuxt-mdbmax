<template>
  <div>
    <div class="stepper-wrapper mt-4 w-100">
      <div class="stepper-item completed">
        <nuxt-link :to="localePath('/')"
          ><div class="step-counter">1</div></nuxt-link
        >
        <div class="step-name">{{ $t("stepOne") }}</div>
      </div>
      <div class="stepper-item completed">
        <div
          class="step-counter"
          style="background-color: var(--white); color: var(--black)"
        >
          2
        </div>
        <div class="step-name">{{ $t("stepTwo") }}</div>
      </div>
    </div>
    <BaseCard>
      <template slot="content">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div style="text-align: justify">
              <p class="header-text" :dir="$dir()">
                {{ $t("headerText") }}
              </p>
            </div>
            <div class="d-flex flex-column justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  @input="handleInput"
                  id="exampleRadios1"
                  value="7-6JvVP0jtQ3KbyywZcaEqdVucpoYQtmt5yQyN-Business PUB Plan"
                  v-model="product"
                />
                <label class="form-check-label" for="exampleRadios1">
                  {{ $t("businessPlan1") }}
                </label>
              </div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  @input="handleInput"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="8-W1UIqwhUBxL6UViryNZTqoVmPFpyzVD5U0Yk-Business PUB Plan: 3 month subscription & 16M CPM"
                  v-model="product"
                />
                <label class="form-check-label" for="exampleRadios2">
                  {{ $t("businessPlan3") }}
                </label>
              </div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  @input="handleInput"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="9-CfL26TqUjJJ1uhFDxZ7ocOJmeHxKQEQ0K4LP-Business PUB Plan: 6 month subscription & 35M CPM"
                  v-model="product"
                />
                <label class="form-check-label" for="exampleRadios3">
                  {{ $t("businessPlan6") }}
                </label>
              </div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  @input="handleInput"
                  name="exampleRadios"
                  id="exampleRadios4"
                  value="10-cmN3G7OKds7ZMZIS8FNK6818efJ3VkBnc8rC-Business PUB Plan: 12 month subscription & 80M CPM"
                  v-model="product"
                />
                <label class="form-check-label" for="exampleRadios4">
                  {{ $t("businessPlan12") }}
                </label>
              </div>
              <div class="mt-5" style="text-align: justify">
                <p :dir="$dir()">
                  {{ $t("trustText_one") }}
                </p>
                <p :dir="$dir()">
                  {{ $t("trustText_two") }}
                </p>
                <p :dir="$dir()">
                  {{ $t("trustText_three") }}
                </p>
                <p :dir="$dir()">
                  {{ $t("trustText_four") }}
                </p>
              </div>
            </div>
            <div class="btn-end">
              <nuxt-link :to="localePath('/Pricing')">
                <base-button
                  class=""
                  backgroundColor="var(--dark--green)"
                  textColor="var(--white)"
                  :text="$t('back')"
              /></nuxt-link>
              <base-button
                class=""
                backgroundColor="var(--yellow)"
                textColor="var(--white)"
                outline="true"
                :text="$t('continue')"
                @click="setProduct"
              />
            </div>
          </div>
          <div class="d-flex verticalLine" style="width: 60px"></div>

          <div class="col-md-5 col-sm-12 mobile-size">
            <div>
              <p class="text-center">{{ $t("paymentText") }}</p>
            </div>
            <div class="d-flex flex-wrap">
              <div class="p-1">
                <img src="@/assets/images/paypal.png" width="45px" alt="" />
              </div>
              <div class="p-1">
                <img src="@/assets/images/visa.png" width="45px" alt="" />
              </div>
              <div class="p-1">
                <img
                  src="@/assets/images/mastercard.png"
                  width="45px"
                  height="30px"
                  alt=""
                />
              </div>
              <div class="p-1">
                <img
                  src="@/assets/images/american-express.png"
                  width="45px"
                  height="30px"
                  alt=""
                />
              </div>
              <div class="p-1">
                <img
                  src="@/assets/images/discover.png"
                  width="45px"
                  height="30px"
                  alt=""
                />
              </div>
              <div class="p-1">
                <img
                  src="@/assets/images/cartes bancaires.png"
                  width="45px"
                  height="30px"
                  alt=""
                />
              </div>
              <div class="p-1">
                <img
                  src="@/assets/images/google pay.png"
                  width="45px"
                  height="30px"
                  alt=""
                />
              </div>
              <div class="p-1">
                <img
                  src="@/assets/images/apple pay.png"
                  width="45px"
                  height="30px"
                  alt=""
                />
              </div>
              <div class="p-1">
                <img
                  src="@/assets/images/china unionpay.png"
                  width="45px"
                  height="30px"
                  alt=""
                />
              </div>
            </div>
            <hr class="bg-light" />
            <div class="text-justify" :dir="$dir()">
              <h6>{{ text_plan }}</h6>
              <p>&#10003; {{ $t("featureOne") }}</p>
              <p>&#10003; {{ $t("featureTwo") }}</p>
              <p>&#10003; {{ $t("featureThree") }}</p>
              <p>&#10003; {{ $t("featureSix") }}</p>
              <p>&#10003; {{ $t("featureSeven") }}</p>
              <p>&#10003; {{ $t("featureEight") }}</p>
              <!-- <p>&#10003; {{ $t("featureNine") }}</p> -->
            </div>
            <hr class="bg-light" />
            <div class="d-flex protect-card">
              <div class="p-1">
                <img
                  src="@/assets/images/payment.png"
                  width="80px"
                  alt="SSL logo"
                />
              </div>
              <div class="p-1" style="text-align: justify" :dir="$dir()">
                <h6>{{ $t("SSL_header") }}</h6>
                <p>{{ $t("SSL") }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "../../UI/Cards/baseCard.vue";
import BaseButton from "../../UI/Button/baseButton.vue";
import Swal from "sweetalert2";

export default {
  components: { BaseCard, BaseButton },
  data() {
    return {
      product: "",
      productID: "",
      nameID: "",
      text_plan: "",
    };
  },
  methods: {
    setProduct() {
      if (this.product !== "") {
        this.productID = parseInt(this.product.split("-")[0]);
        this.nameID = this.product.split("-")[1];
        localStorage.setItem("productID", JSON.stringify(this.productID));
        localStorage.setItem("nameID", JSON.stringify(this.nameID));
        this.$store.dispatch("login/setId", {
          productID: this.productID,
          nameID: this.nameID,
        });
        this.$store.dispatch("login/loadItems");
      } else {
        Swal.fire({
          text: this.$t("planError"),
          icon: "error",
          confirmButtonText: this.$t("continue"),
          confirmButtonColor: "red",
        });
      }
    },
    handleInput(event) {
      if (event.target.value.split("-")[2] == "Business PUB Plan") {
        this.text_plan = this.$t("PUBPlan1");
      } else if (
        event.target.value.split("-")[2] ==
        "Business PUB Plan: 3 month subscription & 16M CPM"
      ) {
        this.text_plan = this.$t("PUBPlan3");
      } else if (
        event.target.value.split("-")[2] ==
        "Business PUB Plan: 6 month subscription & 35M CPM"
      ) {
        this.text_plan = this.$t("PUBPlan6");
      } else if (
        event.target.value.split("-")[2] ==
        "Business PUB Plan: 12 month subscription & 80M CPM"
      ) {
        this.text_plan = this.$t("PUBPlan12");
      }
    },
  },
};
</script>

<style scoped>
input[type="radio"] {
  accent-color: var(--yellow);
}
.verticalLine {
  border-left: 1px solid #9c9c9c;
}
.protect-card {
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px;
}
.btn-end {
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-top: 7rem;
}

.stepper-wrapper {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
@media (max-width: 768px) {
  .mobile-size {
    margin-top: 2rem;
    padding: 8px;
    border-top: 1px solid gray;
  }
}

.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: -50%;
  z-index: 2;
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  margin-bottom: 6px;
}

.stepper-item.active {
  font-weight: bold;
}

.stepper-item.completed .step-counter {
  background-color: var(--black);
  color: var(--white);
}

.stepper-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #b6b6b6;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 3;
}

.stepper-item:first-child::before {
  content: none;
}
.step-name {
  color: var(--white);
}
.stepper-item:last-child::after {
  content: none;
}
label {
  font-size: 16px;
}
.text-justify {
  text-align: justify;
}
</style>
