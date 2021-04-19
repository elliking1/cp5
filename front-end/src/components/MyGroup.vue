<template>
<div class="main">
  <div class="menu">
    <p></p>
    <h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>
    
 </div>
  
   <div class="admin mainDirectory">
    <h1>Instructor Page</h1>
    <div class="heading">
      <h2>Add a Study Group</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="number" placeholder="Number" />
        <p></p>
        <input v-model="time" placeholder="Dates and Time" />
        <p></p>
        <button @click="upload"><a href="javascript:history.go(0)">Add</a></button>
      </div>
      <div class="upload" v-if="addGroup">
        <h2>{{ addGroup.number }}</h2>
      </div>
    </div>
    <br><br>
    <div class="heading">
      <h2>Delete a Study Group</h2>
    </div>
    <table class="table table-hover">
    <tbody>
          <tr v-for="group in groups" :key="group.id">
            <th scope="row">Group {{group.number}}</th>
            <td>{{group.days}} {{group.time}}</td>
            <td><button v-on:click="deleteGroup(group)" class="delete">Delete</button></td>
          </tr>
        </tbody>
      </table>
   <div class="admin mainDirectory">
     <div class="heading">
       <h2>Edit a Study Group</h2>
     </div>
     <div class="form">
       <input v-model="findTitle" placeholder="Group Number" />
       <div class="suggestions" v-if="suggestions.length > 0">
         <div
           class="suggestion"
            v-for="s in suggestions"
            :key="s.id"
            @click="selectGroup(s)"
          >
            {{ s.number }}
         </div>
       </div>
        <div class="upload" v-if="findGroup">
        <input v-model="findGroup.number" />
        <p></p>
        <img :src="findGroup.path" />
      </div>
      <div class="actions" v-if="findGroup">
        <button @click="editGroup(findGroup)">Edit</button>
      </div>
      </div>
  </div>
</div>
  
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MyGroup',
  data() {
    return {
      number: "",
      days: "",
      time: "",
      file: null,
      addGroup: null,
      groups: [],
      findNumber: "",
      findTime: null,
    };
  },
  created() {
    this.getGroups();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
    suggestions() {
      let groups = this.groups.filter((group) =>
        group.number.toLowerCase().startsWith(this.findGroup.toLowerCase())
      );
      return groups.sort((a, b) => a.number > b.number);
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getGroups() {
      try {
        let response = await axios.get("/api/groups");
        this.groups = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectGroup(group) {
      this.findNumber = "";
      this.findGroup = group;
    },
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        let r2 = await axios.post("/api/groups", {
          number: this.number,
          days: this.days,
          time: this.time,
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteGroup(group) {
      try {
        await axios.delete("/api/groups/" + group._id);
        this.findGroup = null;
        this.getGroups();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editGroup(group) {
      try {
        await axios.put("/api/groups/" + group._id, {
          number: this.findGroup.number,
          time: this.findGroup.time,
        });
        this.findGroup = null;
        this.getGroups();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
 };
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.menu h2 {
  font-size: 14px;
}


</style>
