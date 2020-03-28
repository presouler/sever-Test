<template>
  <div>
    <div>信雄的站点</div>
    <el-button @click="loginPage">Login</el-button>
    <el-button @click="signUpPage">Register</el-button>
    <el-button @click="Secret">Secret</el-button>

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
    Secret() {
      this.$router.push({ name: 'Secret' });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
