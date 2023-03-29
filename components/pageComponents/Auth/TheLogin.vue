<template>
  <div class="login-container" style="text-align: initial" :dir="$dir()">
    <div class="logo-container">
      <img
        @click="goMdb"
        class="logo"
        src="@/assets/images/main-logo.png"
        alt="logo image "
      />
    </div>

    <base-card class="mt-4">
      <template slot="content"
        ><form class="p-4">
          <h4>{{ $t("account") }}</h4>
          <div class="alert alert-warning mt-4" role="alert">
            {{ $t("trustText_one") }}
          </div>
          <div v-if="errors.length !== 0" class="alert alert-danger mt-4" role="alert">
            {{ errors[0] }}
            <br>
            {{ errors[1] }}
            <br>
            {{ errors[2] }}
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
        <div class="p-4">
          <button class="inside-btn w-100" type="button" @click="storeData">
            {{ $t("continue") }}
          </button>
        </div></template
      >
    </base-card>
  </div>
</template>

<script>
import baseCard from "../../UI/Cards/baseCard.vue";
import Swal from "sweetalert2";

export default {
  components: { baseCard },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    storeData() {
      if (
        this.username == "" ||
        this.password == "" ||
        this.email == "" ||
        !/^[^@]+@\w+(\.\w+)+\w$/.test(this.email) ||
        this.password.length < 8
      ) {
        this.errors = [];
        if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)) {
          this.errors.push(this.$t("emailError"));
        }
        if (this.username == "") {
          this.errors.push(this.$t("usernameError"));
        }
        if (this.password.length < 8) {
          this.errors.push(this.$t("passwordError"));
        }
      } else {
        localStorage.setItem("username", JSON.stringify(this.username));
        localStorage.setItem("email", JSON.stringify(this.email));
        localStorage.setItem("password", JSON.stringify(this.password));
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
          this.$router.push(this.localePath({ name: "Pricing" }));
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

    goMdb() {
      window.location.href = "https://mdbmax.com/";
    },
  },
};
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}
.input-style {
  background-color: var(--dark--green);
}
label {
  font-size: 18px;
}
input[type="email"] {
  color: var(--white);
}
input[type="text"] {
  color: var(--white);
}
input[type="password"] {
  color: var(--white);
}
.inside-btn {
  background-color: var(--yellow);
  color: var(--white);
  padding: 8px 20px;
  border-radius: 4px;
  border: none;
  font-size: 1.1rem;
  font-weight: 400;
}
.inside-btn:hover {
  background-color: rgb(255, 247, 0);
}
.logo {
  cursor: pointer;
  width: 250px;
}
</style>
