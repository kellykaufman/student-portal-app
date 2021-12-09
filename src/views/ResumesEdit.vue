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
          <textarea name="input" cols="10" rows="1" v-model="experience.company"></textarea>
        </div>
        <div>
          <label>Details:</label>
          <textarea name="input" cols="30" rows="5" v-model="experience.detail"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <button v-on:click="deleteExperience()">Delete</button>
    </div>
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
          <textarea name="input" cols="10" rows="1" v-model="education.university_name"></textarea>
        </div>
        <div>
          <label>Details:</label>
          <textarea name="input" cols="30" rows="5" v-model="education.detail"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <button v-on:click="deleteEducation()">Delete</button>
    </div>
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
      <button v-on:click="deleteExperience()">Delete</button>
    </div>
    <div v-for="capstone in currentCapstoneParams" :key="capstone.id">
      <form v-on:submit.prevent="updateCapstone()">
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
          <textarea name="input" cols="30" rows="10" v-model="capstone.description"></textarea>
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
      <button v-on:click="deleteExperience()">Delete</button>
    </div>
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
      errors: [],
    };
  },
  created: function () {
    axios.get(`/experience/${this.$route.params.id}`).then((response) => {
      this.currentExperienceParams = response.data;
    });
    axios.get(`/education/${this.$route.params.id}`).then((response) => {
      this.currentExperienceParams = response.data;
    });
    axios.get(`/skills/${this.$route.params.id}`).then((response) => {
      this.currentExperienceParams = response.data;
    });
    axios.get(`/capstones/${this.$route.params.id}`).then((response) => {
      this.currentExperienceParams = response.data;
    });
  },
  methods: {
    updateExperience: function () {
      axios
        .patch(`/experiences/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push(`/experience/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    updateEducation: function () {
      axios
        .patch(`/educations/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push(`/experience/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    updateSkills: function () {
      axios
        .patch(`/skills/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push(`/experience/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    updateCapstone: function () {
      axios
        .patch(`/capstones/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push(`/experience/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
  },
  deleteExperience: function () {
    axios.delete(`/experiences/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
    });
  },
  deleteEducation: function () {
    axios.delete(`/educations/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
    });
  },
  deleteSkill: function () {
    axios.delete(`/skills/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
    });
  },
  deleteCapstone: function () {
    axios.delete(`/capstones/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
    });
  },
};
</script>
