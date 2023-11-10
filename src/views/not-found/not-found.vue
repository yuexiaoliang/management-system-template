<template>
  <div class="not-found">
    <span class="text">页面未找到！<RouterLink to="/" class="home-link">去首页</RouterLink></span>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  @include flex-center;

  width: 100vw;
  height: 100vh;

  .text {
    font-size: 16px;
  }
}
</style>
