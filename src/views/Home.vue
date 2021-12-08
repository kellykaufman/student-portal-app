<template>
  <div class="home">
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
      message: "Welcome to Vue.js!",
      student: {
        first_name: "Jarret",
        last_name: "Nachtigal",
        email: "jn@example.com",
        phone_number: "123-456-789",
        short_bio: "Jarret is the best!",
        linkedin_url: "linkedin.com/in/jarret-nachtigal-42a849220",
        twitter_handle: "N/A",
        website_url: "https://github.com/JarretNachtigal",
        online_resume_url: "N/A",
        github_url: "https://github.com/JarretNachtigal",
        photo: "jarret.png",
      },
    };
  },
  created: function () {},
  methods: {
    showStudent: function () {
      // axios.get("/students").then((response) => {
      // this.student = response.data;
      // console.log("One student", this.student);
      document.querySelector("#edit-student-info").showModal();
      // });
    },
    updateStudent: function (student) {
      axios.patch("/students/" + student.id, student).then((response) => {
        console.log("Success", response.data);
      });
    },
  },
};
</script>
