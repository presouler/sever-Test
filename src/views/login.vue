<template>
  <div>
    this is login page
    <el-form>
      <el-form-item label="用户名:">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="user.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="btnSub" type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
    btnSub() {
      services.login(this.user).then();
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
