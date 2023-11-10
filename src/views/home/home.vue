<script setup>
import { Message } from '@arco-design/web-vue'

const onClick = () => {
  Message.success('hello world')
}
</script>

<template>
  <div class="home">
    <a-button type="primary" @click="onClick">点我</a-button>

    <router-link to="/page1/page2">Page2</router-link>
  </div>
</template>

<style lang="scss">
.home {
  @include flex-center;
}
</style>
