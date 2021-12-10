<template>
  <div class="resumeshow">
    <h1>My Resume</h1>
    <button>Update Resume Details</button>
    <h2>My Experiences</h2>
    <div v-for="experience in studentExperiences" :key="experience.id">
      <p>Job Title: {{ experience.job_title }}</p>
      <p>Company: {{ experience.company }}</p>
      <p>Details: {{ experience.details }}</p>
      <p>Start Date: {{ experience.start_date }}</p>
      <p>End Date: {{ experience.end_date }}</p>
      <hr />
    </div>
    <h2>My Education</h2>
    <div v-for="education in studentEducations" :key="education.id">
      <p>Degree: {{ education.degree }}</p>
      <p>University: {{ education.university }}</p>
      <p>Details: {{ education.details }}</p>
      <p>Start Date: {{ education.start_date }}</p>
      <p>End Date: {{ education.end_date }}</p>
      <hr />
    </div>
    <h2>My Skills</h2>
    <div v-for="skill in studentSkills" :key="skill.id">
      <p>skill: {{ skill.skill }}</p>
    </div>
    <hr />
    <h2>My Capstone</h2>
    <div v-for="capstone in studentCapstones" :key="capstone.id">
      <p>name: {{ capstone.name }}</p>
      <p>description: {{ capstone.description }}</p>
      <p>link: {{ capstone.URL }}</p>
      <img src="capstone.screenshot" alt="capstone screenshot" />
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function () {
    this.isLoggedIn();
  },
  mounted: function () {
    this.showStudent();
  },
  data: function () {
    return {
      studentExperiences: [],
      studentSkills: [],
      studentEducations: [],
      studentCapstones: [],
      student_id: localStorage.getItem("student_id"),
    };
  },
  methods: {
    showStudent: function () {
      axios.get("/students/" + this.student_id).then((response) => {
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
        this.$router.push("/login"); // commented out for now
      }
    },
  },
};
</script>
