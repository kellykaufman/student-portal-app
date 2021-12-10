<template>
  <div class="students-dashboard">
    <h1>{{ student.photo }} {{ student.first_name }} {{ student.last_name }}</h1>
    <p>{{ student.email }} {{ student.phone_number }}</p>
    <p>{{ student.short_bio }}</p>
    <p>{{ student.linkedin }} {{ student.github }}</p>
    <p>{{ student.website }}</p>
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
        // console.log("all students", this.student);
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
