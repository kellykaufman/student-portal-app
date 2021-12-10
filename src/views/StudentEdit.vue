<template>
  <div class="students-edit">
    <!-- <img :src="student.photo" :alt="student.id" />
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <p>{{ student.email }}</p>
    <p>{{ student.phone_number }}</p>
    <p>{{ student.short_bio }}</p>
    <p>{{ student.linkedin }}</p>
    <p>{{ student.github }}</p>
    <p>{{ student.website }}</p> -->
    <form v-on:submit.prevent="updateStudent()">
      <h1>Editing Student</h1>
      <!-- <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul> -->
      <div>
        <label>first name:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.first_name"></textarea>
      </div>
      <div>
        <label>last name:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.last_name"></textarea>
      </div>
      <div>
        <label>phone_number:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.phone_number"></textarea>
      </div>
      <div>
        <label>bio:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.short_bio"></textarea>
      </div>
      <div>
        <label>linkedin:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.linkedin"></textarea>
      </div>
      <div>
        <label>twitter:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.twitter"></textarea>
      </div>
      <div>
        <label>website:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.website"></textarea>
      </div>
      <div>
        <label>online resume:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.online_resume"></textarea>
      </div>
      <div>
        <label>github:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.github"></textarea>
      </div>
      <div>
        <label>photo:</label>
        <textarea name="input" cols="10" rows="1" v-model="student.photo"></textarea>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      student: {},
      student_id: localStorage.getItem("student_id"),
      errors: [],
    };
  },
  created: function () {
    this.isLoggedIn();
    this.showStudent();
  },
  methods: {
    showStudent: function () {
      axios.get("/students/" + this.student_id).then((response) => {
        this.student = response.data;
        console.log("all students", this.student);
      });
    },
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
