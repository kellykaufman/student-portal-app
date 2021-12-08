<template>
  <div class="home">
    <p>{{ student }}</p>

    <button v-on:click="showStudent(student)">Show Student</button>
    <dialog id="edit-student-info">
      <form method="dialog">
        <h1>Student Information:</h1>
        <p></p>
        <button>close</button>
      </form>
    </dialog>
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
