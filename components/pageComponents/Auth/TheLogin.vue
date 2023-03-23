<template>
  <div class="login-container">
    <div class="logo-container">
      <img src="@/assets/images/main-logo.png" width="250" alt="" />
    </div>

    <base-card>
      <template slot="content"
        ><form class="p-4">
          <h4>{{ $t("account") }}</h4>
          <div class="form-group">
            <label :dir="$dir()" for="exampleInputEmail1">{{ $t("username") }}</label>
            <input
              type="text"
              class="form-control input-style"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <label :dir="$dir()" for="exampleInputEmail1">{{ $t("email") }}</label>
            <input
              type="email"
              class="form-control input-style"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
            />
          </div>
          <div class="form-group" :dir="$dir()">
            <label :dir="$dir()" for="exampleInputPassword1">{{ $t("password") }}</label>
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
    };
  },
  methods: {
    storeData() {
      if ((this.username == "") | (this.password == "") | (this.email == "")) {
        Swal.fire({
          title: "Error!",
          text: "Please filled your form",
          icon: "error",
          confirmButtonText: "Okay",
          confirmButtonColor: "red",
        });
      } else {
        localStorage.setItem("username", JSON.stringify(this.username));
        localStorage.setItem("email", JSON.stringify(this.email));
        localStorage.setItem("password", JSON.stringify(this.password));
        this.$store.dispatch("login/setItems", {
          email: this.email,
          password: this.password,
          username: this.username,
        });
        this.$router.push("/pricing");
      }
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
</style>
