<template>
  <div>
    <el-button @click="loginPage">Login</el-button>
    <el-button @click="signUpPage">Login</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    loginPage() {
      this.$router.push({ name: 'Login' });
    },
    signUpPage() {
      this.$router.push({ name: 'Register' });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
