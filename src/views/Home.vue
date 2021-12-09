<template>
  <div class="home">

    <p>{{ message }}</p>

    <button v-on:click="showStudent(student)">Dashboard</button>
    <dialog id="edit-student-info">
      <form method="dialog">
        <!-- <h1>Student Information:</h1>
        <p>
          First Name: Jarret Last Name: Nachtigal Email: jn@example.com Phone
          Number: 123-456-789 Short Bio: Jarret is the best! Linkedin Url:
          linkedin.com/in/jarret-nachtigal-42a849220 Twitter Handle: N/A Website
          Url:https://github.com/JarretNachtigal online_resume_url: N/A
          github_url: https://github.com/JarretNachtigal photo: jarret.png
        </p> -->

    <img :src="student.photo" :alt="student.first_name" />
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <button v-on:click="showStudent(student)">Contact Info</button>
    <dialog id="edit-student-info">
      <form method="dialog">
        <h1>Contact Info:</h1>
        <h3>Email:</h3>
        <p>{{ student.email }}</p>
        <h3>Phone Number:</h3>
        <p>{{ student.phone_number }}</p>

        <button>close</button>
      </form>
    </dialog>
    <h2>About</h2>
    <p>{{ student.short_bio }}</p>
    <h2>Experience</h2>
    <h2>Education</h2>
    <h2>Skills</h2>
    <h2>Capstone</h2>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the student portal.",
      student: {},
    };
  },
  created: function () {
    // if user is not logged in, reroute to login page
    this.isLoggedIn();
  },
  methods: {
    showStudent: function () {
      this.$router.push("/dashboard");
      // axios.get("/students").then((response) => {
      // this.student = response.data;
      // console.log("One student", this.student);
      // });
    },
    updateStudent: function (student) {
      axios.patch("/students/" + student.id, student).then((response) => {
        console.log("Success", response.data);
      });
    },
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        // this.$router.push("/login"); // commented out for now
      }
    },
  },
};
</script>
