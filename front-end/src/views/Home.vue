<template>
<div class="home mainDirectory" >
  <div id="info">
      <h2>Information</h2>
      These study groups are completely optional, but a great way to ensure 
      that you are retaining the information taught in class. Each study session 
      will have at least one TA in attendance to answer questions. Extra credit will
      be given to students who maintain at least 80% attendance in a study group. Sometime 
      during the second week of the semester, you will be added to a discord group for 
      your study group number.
      <br><br>
   </div>
   <div id="signup">
      <h2>Sign up for a Group</h2>
      <div class="add">
        <input v-model="groupNumber" placeholder="Study Group Number">
        <input v-model="firstName" placeholder="Last Name">
        <input v-model="lastName" placeholder="First Name">
        <input v-model="email" placeholder="Email">
        <button @click="add">Add Study Group</button>
      </div>
      <br><br>
      <h2>Study Groups</h2>
      <ul class="leadershipGroup">
      <div v-for="group in groups" :key="group.id">
         <li>Group {{group.number}}: {{group.days}} {{group.time}}</li>
      </div>
      </ul>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Study Group #</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col"> </th>
          </tr>
        </thead>
      <tbody>
          <tr v-for="student in students" :key="student.id">
            <th scope="row">{{student.groupNumber}}</th>
            <td>{{student.lastName}}</td>
            <td>{{student.firstName}}</td>
            <td>{{student.email}}</td>
            <td><button v-on:click="deleteStudent(student)" class="delete">X</button></td>
          </tr>
        </tbody>
      </table>
   </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
     students: [],
     groupNumber: "",
     lastName: "",
     firstName: "",
     email: "",
     groups: [],
   }
  },
  created() {
    this.getStudents();
    this.getGroups();
  },
  methods: {
    async getGroups() {
      try { 
        let response = await axios.get("/api/groups");
        this.groups = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getStudents() {
      try {
        let response = await axios.get("/api/students");
        this.students = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async add() {
      try {
        await axios.post('/api/students', {
          groupNumber: this.groupNumber,
          lastName: this.lastName,
          firstName: this.firstName,
          email: this.email
        });
        this.groupNumber = "";
        this.lastName = "";
        this.firstName = "";
        this.email = "";
        this.getStudents();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteStudent(student) {
      try {
        await axios.delete("/api/students/" + student._id);
        this.getStudents();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style>
#info {
   padding-top: 110px;
   margin-left: 100px;
   padding-right: 1em;
}

th, td {
  padding: 10px;
}

#signup {
  margin-left: 100px;
  padding-right: 1em;
}
</style>
