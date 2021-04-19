<template>
<ul class="leadershipGroup">
   <div v-for="group in groups" :key="group.id">
      <li>Group {{group.number}}: {{group.days}} {{group.time}}</li>
    </div>
</ul>
</template>

<script>
import axios from 'axios';
import 'MyGroup from './MyGroup.vue';
export default {
  name: 'Display',
  data() {
    return {
      number: "",
      days: "",
      time: "",
      file: null,
      groups: [],
      findNumber: "",
      findTime: null,
    };
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
    },
   };

</script>
