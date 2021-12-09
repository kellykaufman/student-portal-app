<template>
  <div class="students-dashboard">
    <h1>{{ student.first_name + " " + student.last_name }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the student portal.",
      student: {},
    };
  },
  created: function () {},
  methods: {
    dashboardStudent: function () {
      // document.querySelector("#edit-student-info").dashboardModal();
    },
  },
};
</script>
