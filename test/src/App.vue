<template>
  <Demo @hello="showHelloMsg" msg="你好" school="依旧归七学院">
    <template v-slot:qwe>
      <span>
        测试卡槽
      </span>
    </template>
  </Demo>
  <h1>以上是demo组件</h1>
  <el-button>我是 ElButton</el-button>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>
  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>
  <el-row class="mb-4">
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
  <Layoutdemo></Layoutdemo>
</template>

<script>
import Demo from './components/Demo'

import { ElButton } from 'element-plus'
import { Check, Delete, Edit, Message, Search, Star, } from '@element-plus/icons-vue'

export default {
  name: 'app',
  components: { Demo, ElButton, Check, Delete, Edit, Message, Search, Star,},
  setup() {
    function showHelloMsg(value) {
      alert(`出发了hello事件，收到的参数是:${value}`)
    }
    return {
      showHelloMsg, Check, Edit, Message, Search, Star, Delete
    }
  }
}
</script>