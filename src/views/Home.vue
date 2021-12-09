<template>
  <div class="home">
    <p>{{ message }}</p>

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
      message: "Welcome to the student portal.",
      student: {},
    };
  },
  created: function () {},
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
  },
};
</script>
