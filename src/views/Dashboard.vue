<template>
  <div class="students-dashboard">
    <img v-bind:src="student.photo" :alt="student.id" align="left" />

    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <p><b>Email:</b> {{ student.email }}</p>
    <p><b>Phone Number:</b> {{ student.phone_number }}</p>
    <p><b>Short Bio:</b> {{ student.short_bio }}</p>
    <p><b>Linkedin:</b> {{ student.linkedin }}</p>
    <p><b>Github:</b> {{ student.github }}</p>
    <p><b>Website:</b> {{ student.website }}</p>
    <p><b>Twitter:</b> {{ student.twitter }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      student: {},
      student_id: localStorage.getItem("student_id"),
    };
  },
  created: function () {
    this.isLoggedIn();
    this.dashboardStudent();
  },
  methods: {
    dashboardStudent: function () {
      axios.get("/students/" + this.student_id).then((response) => {
        this.student = response.data;
        console.log("all students", this.student);
      });
    },
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
