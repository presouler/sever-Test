<template>
  <div>
    Please Sign up
    <el-form>
      <el-form-item label="用户名:">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="user.pwd"></el-input>
      </el-form-item>
      <el-form-item label="请再次输入密码:">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="register"> 提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import axios from 'axios';
import services from '../../frontServices/services';

export default {
  data() {
    return {
      user: {
        username: '',
        pwd: '',
      },
    };
  },
  methods: {
    register() {
      services.register(this.user).then(() => {
        this.$router.push({ name: 'HomePage' });
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
