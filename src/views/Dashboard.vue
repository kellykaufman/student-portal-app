<template>
  <div class="students-dashboard">
    <h1>{{ student.first_name + " " + student.last_name }}</h1>
    <p>{{ message }}</p>

    <button v-on:click="dashboardStudent(student)">Dashboard</button>
    <dialog id="display student resume and capstone">
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
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
