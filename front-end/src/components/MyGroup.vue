<template>
<div class="main">
  <div class="menu">
    <p></p>
    <h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>
    
 </div>
  
   <uploader :show="show" @close="close" @uploadFinished="uploadFinished" />
  
</div>
</template>

<script>
import axios from 'axios';
import Uploader from '@/components/Uploader.vue';
export default {
  name: 'MyGroup',
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$root.$data.user;
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
  }
}

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
