<template>
<div class="dashboard">
  <MyGroup v-if="user" />
  <Login v-else />
</div>
</template>

<script>
import MyGroup from '@/components/MyGroup.vue';
import Login from '@/components/Login.vue';
import axios from 'axios';
export default {
  name: 'dashboard',
  components: {
    MyGroup,
    Login,
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding-top: 10px;
}
</style>
