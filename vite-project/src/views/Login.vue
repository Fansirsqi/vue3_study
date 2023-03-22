<template>
    <h2>登录</h2>
    <el-form :model="form" label-width="120px">
        <el-form-item label="用户">
            <el-input v-model="user" />
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="pwd" type="password" />
        </el-form-item>
        <el-form-item label="角色">
            <el-radio-group v-model="role">
                <el-radio label="admin" />
                <el-radio label="user" />
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Login</el-button>
        </el-form-item>
    </el-form>
</template>
      
<script setup>
import { reactive, toRefs } from 'vue'
const form = reactive({
    user: null,
    pwd: null,
    role: 'user'
});
const { user, pwd, role } = toRefs(form)
const onSubmit = () => {
    console.log(user.value);
    console.log(pwd);
    console.log(role);
};
</script>