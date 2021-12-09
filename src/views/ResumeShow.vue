<template>
  <div class="resumeshow">
    <h1>My Resume</h1>
    <button>Update Resume Details</button>
    <h2>My Experiences</h2>
    <div v-for="experience in studentExperiences" :key="experience.id">
      <p>{{ experience }}</p>
    </div>
    <h2>My Education</h2>
    <div v-for="education in studentExperiences" :key="education.id">
      <p>{{ education }}</p>
    </div>
    <h2>My Skills</h2>
    <div v-for="skill in studentSkills" :key="skill.id">
      <p>{{ skill }}</p>
    </div>
    <h2>My Capstone</h2>
    <div v-for="capstone in studentCapstones" :key="capstone.id">
      <p>{{ capstone }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function () {
    this.isLoggedIn();
    this.showStudent();
  },
  data: function () {
    return {
      studentExperiences: [],
      studentSkills: [],
      studentEducations: [],
      studentCapstones: [],
    };
  },
  methods: {
    showStudent: function () {
      axios.get("/students/" + this.$route.params["id"]).then((response) => {
        this.studentExperiences = response.data.experiences;
        this.studentSkills = response.data.skills;
        this.studentEducations = response.data.educations;
        this.studentCapstones = response.data.capstones;
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
