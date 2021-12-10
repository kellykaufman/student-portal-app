<template>
  <div class="resume-edit">
    <div v-for="experience in currentExperienceParams" :key="experience.id">
      <form v-on:submit.prevent="updateExperience()">
        <h1>Editing Experience</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Start Date:</label>
          <textarea name="input" cols="10" rows="1" v-model="experience.start_date"></textarea>
        </div>
        <div>
          <label>End Date:</label>
          <textarea name="input" cols="10" rows="1" v-model="experience.end_date"></textarea>
        </div>
        <div>
          <label>Job Title:</label>
          <textarea name="input" cols="10" rows="1" v-model="experience.job_title"></textarea>
        </div>
        <div>
          <label>Company:</label>
          <textarea name="input" cols="20" rows="1" v-model="experience.company"></textarea>
        </div>
        <div>
          <label>Details:</label>
          <textarea name="input" cols="30" rows="5" v-model="experience.detail"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <button v-on:click="addExperience()">Add Experience</button>
      <button v-on:click="deleteExperience()">Delete</button>
    </div>
    <dialog id="experience-details">
      <form method="dialog">
        <h1>Add Experience</h1>
        <p>
          <label>Start Date:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentExperience.start_date"></textarea>
        </p>
        <p>
          <label>End Date:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentExperience.end_date"></textarea>
        </p>
        <p>
          <label>Job Title:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentExperience.job_title"></textarea>
        </p>
        <p>
          <label>Company:</label>
          <textarea name="input" cols="20" rows="1" v-model="currentExperience.company"></textarea>
        </p>
        <p>
          <label>Details:</label>
          <textarea name="input" cols="30" rows="5" v-model="currentExperience.detail"></textarea>
        </p>
        <button v-on:click="createExperience(experience)">Submit</button>
        <button>close</button>
      </form>
    </dialog>
    <div v-for="education in currentEducationParams" :key="education.id">
      <form v-on:submit.prevent="updateEducation()">
        <h1>Editing Education</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Start Date:</label>
          <textarea name="input" cols="10" rows="1" v-model="education.start_date"></textarea>
        </div>
        <div>
          <label>End Date:</label>
          <textarea name="input" cols="10" rows="1" v-model="education.end_date"></textarea>
        </div>
        <div>
          <label>Degree:</label>
          <textarea name="input" cols="10" rows="1" v-model="education.degree"></textarea>
        </div>
        <div>
          <label>University:</label>
          <textarea name="input" cols="20" rows="1" v-model="education.university_name"></textarea>
        </div>
        <div>
          <label>Details:</label>
          <textarea name="input" cols="30" rows="5" v-model="education.detail"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <button v-on:click="addEducation()">Add Education</button>
      <button v-on:click="deleteEducation()">Delete</button>
    </div>
    <dialog id="education-details">
      <form method="dialog">
        <h1>Add Education</h1>
        <p>
          <label>Start Date:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentEducation.start_date"></textarea>
        </p>
        <p>
          <label>End Date:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentEducation.end_date"></textarea>
        </p>
        <p>
          <label>Degree:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentEducation.degree"></textarea>
        </p>
        <p>
          <label>University:</label>
          <textarea name="input" cols="20" rows="1" v-model="currentEducation.university"></textarea>
        </p>
        <p>
          <label>Details:</label>
          <textarea name="input" cols="30" rows="5" v-model="currentEducation.detail"></textarea>
        </p>
        <button v-on:click="createEducation(education)">Submit</button>
        <button>close</button>
      </form>
    </dialog>
    <div v-for="skill in currentSkillParams" :key="skill.id">
      <form v-on:submit.prevent="updateSkills()">
        <h1>Editing Skills</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Skill:</label>
          <textarea name="input" cols="10" rows="1" v-model="skill.skill"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <!-- <button v-on="addSkills()">Add Skill</button> -->
      <button v-on:click="deleteExperience()">Delete</button>
    </div>
    <dialog id="skill-details">
      <form method="dialog">
        <h1>Add Skill</h1>
        <p>
          <label>Details:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentSkill.skill"></textarea>
        </p>
        <button v-on:click="createSkill(skill)">Submit</button>
        <button>close</button>
      </form>
    </dialog>
    <div v-for="capstone in currentCapstoneParams" :key="capstone.id">
      <form v-on:submit.prevent="updateCapstone(capstone)">
        <h1>Editing Capstone</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Name:</label>
          <textarea name="input" cols="10" rows="1" v-model="capstone.name"></textarea>
        </div>
        <div>
          <label>Description:</label>
          <textarea name="input" cols="30" rows="5" v-model="capstone.description"></textarea>
        </div>
        <div>
          <label>URL:</label>
          <textarea name="input" cols="10" rows="1" v-model="capstone.url"></textarea>
        </div>
        <div>
          <label>Screenshot:</label>
          <textarea name="input" cols="10" rows="1" v-model="capstone.screenshot"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <button v-on:click="addCapstone()">Add Capstone</button>
      <button v-on:click="deleteExperience()">Delete</button>
    </div>
    <dialog id="capstone-details">
      <form method="dialog">
        <h1>Add Experience</h1>
        <p>
          <label>Name:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentCapstone.name"></textarea>
        </p>
        <p>
          <label>Description:</label>
          <textarea name="input" cols="30" rows="5" v-model="currentCapstone.description"></textarea>
        </p>
        <p>
          <label>URL:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentCapstone.url"></textarea>
        </p>
        <p>
          <label>Screenshot:</label>
          <textarea name="input" cols="10" rows="1" v-model="currentCapstone.screenshot"></textarea>
        </p>
        <button v-on:click="createCapstone(capstone)">Submit</button>
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentExperienceParams: {},
      currentEducationParams: {},
      currentSkillParams: {},
      currentCapstoneParams: {},
      currentExperience: {},
      currentEducation: {},
      currentSkill: {},
      currentCapstone: {},
      errors: [],
      student_id: localStorage.getItem("student_id"),
    };
  },
  created: function () {
    this.isLoggedIn();
    axios.get("/students/" + this.student_id).then((response) => {
      this.currentExperienceParams = response.data.experiences;
      this.currentEducationParams = response.data.educations;
      this.currentSkillParams = response.data.skills;
      this.currentCapstoneParams = response.data.capstones;
      console.log("Here you go", response.data);
    });
  },
  methods: {
    updateExperience: function () {
      axios
        .patch("/experiences/" + this.experience.id)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    updateEducation: function () {
      axios
        .patch("/education/" + this.education.id)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    updateSkills: function () {
      axios
        .patch("/skills/" + this.skill.id)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    updateCapstone: function (capstone) {
      axios
        .patch("/capstones/" + capstone.id)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    deleteExperience: function () {
      axios.delete("/experiences/" + this.experience.id).then((response) => {
        console.log(response.data);
      });
    },
    deleteEducation: function () {
      axios.delete("/educations/" + this.education.id).then((response) => {
        console.log(response.data);
      });
    },
    deleteSkill: function () {
      axios.delete("/skills/" + this.skill.id).then((response) => {
        console.log(response.data);
      });
    },
    deleteCapstone: function () {
      axios.delete("/capstones/" + this.capstone.id).then((response) => {
        console.log(response.data);
      });
    },
    addExperience: function () {
      document.querySelector("#experience-details").showModal();
    },
    createExperiennce: function (experience) {
      this.currentExperience = experience;
      axios.post("/experiences", this.currentExperience).then((response) => {
        this.currentExperienceParams.push(response.data);
      });
    },
    addEducation: function () {
      document.querySelector("#education-details").showModal();
    },
    createEducation: function (education) {
      this.currentEducation = education;
      axios.post("/education", this.currentEducation).then((response) => {
        this.currentEducationParams.push(response.data);
      });
    },
    addSkills: function () {
      document.querySelector("#skill-details").showModal();
    },
    createSkill: function (skill) {
      this.currentSkill = skill;
      axios.post("/skills", this.currentSkill).then((response) => {
        this.currentSkillParams.push(response.data);
      });
    },
    addCapstone: function () {
      document.querySelector("#capstone-details").showModal();
    },
    createCapstone: function (capstone) {
      this.currentCapstone = capstone;
      axios.post("/capstones", this.currentCapstone).then((response) => {
        this.currentCapstoneParams.push(response.data);
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
