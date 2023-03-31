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
            <div style="text-align: justify" :dir="$dir()">
              <div
                v-if="errors.length !== 0"
                class="alert alert-danger mt-4"
                role="alert"
              >
                {{ errors[0] }}
                <br />
                {{ errors[1] }}
                <br />
                {{ errors[2] }}
                <br />
                {{ errors[3] }}
              </div>
              <p class="header-text" :dir="$dir()">
                {{ $t("headerText") }}
              </p>
            </div>
            <div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="2-price_1Mrc5sASPJf0SxA0eG87nDko-2.00"
                  v-model="product"
                />
                <label class="form-check-label" for="exampleRadios1">
                  {{ $t("baaicPlan") }}
                </label>
              </div>
              <div class="mt-5" style="text-align: justify">
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
            <div class="text-justify" :dir="$dir()">
              <form class="p-1">
                <h4>{{ $t("account") }}</h4>
                <div class="alert alert-warning mt-4" role="alert">
                  {{ $t("trustText_one") }}
                </div>

                <div class="form-group">
                  <label :dir="$dir()" for="exampleInputEmail1">{{
                    $t("username")
                  }}</label>
                  <input
                    type="text"
                    class="form-control input-style"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="username"
                  />
                </div>
                <div class="form-group">
                  <label :dir="$dir()" for="exampleInputEmail1">{{
                    $t("email")
                  }}</label>
                  <input
                    type="email"
                    class="form-control input-style"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="email"
                  />
                </div>
                <div class="form-group" :dir="$dir()">
                  <label :dir="$dir()" for="exampleInputPassword1">{{
                    $t("password")
                  }}</label>
                  <input
                    type="password"
                    class="form-control input-style"
                    id="exampleInputPassword1"
                    v-model="password"
                  />
                </div>
              </form>
            </div>
            <div class="btn-end">
              <nuxt-link :to="localePath('/')">
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
                @click="storeData"
              />

              
            </div>
            <div v-if="factor == true" class="price-container">
              <div class="d-flex justify-content-between">
                <p>Total</p>
                <p>$2.00</p>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <no-ssr>
                  <paypal-checkout
                    amount="2.00"
                    :button-style="myStyle"
                    :invoice-number="'P-8NX90009DH167960JMQS47PA'"
                    :client="paypal"
                  >
                  </paypal-checkout>
                </no-ssr>
                <base-button
                  class="w-100 px-2"
                  style="height: 45px"
                  backgroundColor="var(--yellow)"
                  textColor="var(--white)"
                  outline="true"
                  text="Pay with Stripe"
                  @click="goStripe"
                />
              </div>
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
              <h6>{{ $t("featureTextbasic_plan") }}</h6>
              <p>&#10003; {{ $t("featureOne") }}</p>
              <p>&#10003; {{ $t("featureTwo") }}</p>
              <p>&#10003; {{ $t("featureThree") }}</p>
              <p>&#10003; {{ $t("featureFour") }}</p>
            </div>
            <hr class="bg-light" />
            <div class="d-flex protect-card">
              <div class="p-1">
                <img
                  src="@/assets/images/payment.png"
                  width="80px"
                  alt="SSl logo"
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
      factor: false,
      paypal_id: "",
      paypal_price: "",
      product: "",
      productID: "",
      nameID: "",
      username: "",
      email: "",
      password: "",
      errors: [],
      paypal: {
        sandbox:
          "AUH9w8WPfW10a6u1SCZkX8KktgLTQ6mEs-tAc5H8r7mpxH-mfgQsz6XM1h0-u6cKLgNGLuNKsnfPJOmw",
        production:
          "AQDUkIOEEB1ic6y8JOalAcd_i6p9h_jzp7xmpEz4TYwGJrn_M4KIQkngGycNtEbrB64rPoVAGF7jmcTY",
      },
      myStyle: {
        size: "medium",
        shape: "rect",
        color: "blue",
      },
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
     goStripe() {
      this.$store.dispatch("login/loadItems");
    },
    storeData() {
      if (
        this.username == "" ||
        this.password == "" ||
        this.email == "" ||
        !/^[^@]+@\w+(\.\w+)+\w$/.test(this.email) ||
        this.password.length < 8 ||
        this.product == ""
      ) {
        this.errors = [];
        if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)) {
          this.errors.push(this.$t("emailError"));
        }
        if (!/^([a-zA-Z0-9]+)$/.test(this.email)) {
          this.errors.push(this.$t("usernameError"));
        }
        if (this.password.length < 8) {
          this.errors.push(this.$t("passwordError"));
        }
        if (this.product == "") {
          this.errors.push(this.$t("planError"));
        }
      } else {
        this.factor = true;
        this.paypal_price = parseInt(this.product.split("_")[2]);
        this.paypal_id = parseInt(this.product.split("_")[4]);
        localStorage.setItem("username", JSON.stringify(this.username));
        localStorage.setItem("email", JSON.stringify(this.email));
        localStorage.setItem("password", JSON.stringify(this.password));
        this.productID = parseInt(this.product.split("-")[0]);
        this.nameID = this.product.split("-")[1];
        localStorage.setItem("productID", JSON.stringify(this.productID));
        localStorage.setItem("nameID", JSON.stringify(this.nameID));
        this.$store.dispatch("login/setId", {
          productID: this.productID,
          nameID: this.nameID,
        });
        this.$store.dispatch("login/setItems", {
          email: this.email,
          password: this.password,
          username: this.username,
        });
        this.$store.dispatch("login/checkUsername");
        this.$store.dispatch("login/checkEmail");
        if (
          this.$store.state.login.existUsername == false &&
          this.$store.state.login.existEmail == false
        ) {
          this.$store.dispatch("login/loadItems");
        } else if (
          this.$store.state.login.existUsername == true ||
          this.$store.state.login.existEmail == true
        ) {
          Swal.fire({
            text: this.$t("existError"),
            icon: "error",
            confirmButtonText: this.$t("continue"),
            confirmButtonColor: "red",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
input[type="radio"]:checked {
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
  font-size: 17px;
}
.text-justify {
  text-align: justify;
}
</style>
