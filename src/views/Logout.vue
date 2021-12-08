<template>
  <div class="logout"></div>
</template>

<script>
import axios from "axios";

export default {
  created: function () {
    // remove jwt from default header
    delete axios.defaults.headers.common["Authorization"];
    // remove jwt from browser local storage
    localStorage.removeItem("jwt");
    // redirect to home
    this.$router.push("/");
  },
};
</script>
