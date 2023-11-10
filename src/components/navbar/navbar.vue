<template>
  <div class="navbar">
    <a class="navbar-left" href="/">
      <img src="~@/assets/images/logo.png" />
      <h1>管理系统</h1>
    </a>

    <div class="navbar-center"></div>

    <div class="navbar-right">
      <span class="nickname">用户名称</span>

      <span class="logout"> <icon-export />退出 </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  @include flex-center();
  justify-content: space-between;
  padding: 0 20px;
  height: 100%;

  &-left {
    @include flex-center($direction: row);

    height: 100%;
    text-decoration: none;

    img {
      height: calc(var(--header-height) * 0.6);
    }

    h1 {
      margin-left: 5px;
      font-size: 17px;
      font-weight: bold;
      font-family: '黑体', 'Microsoft YaHei', sans-serif;
      color: #000;
    }
  }

  &-right {
    @include flex-center(y);

    .nickname {
      margin-right: 15px;
      font-size: 14px;
      cursor: pointer;
    }

    .logout {
      font-size: 12px;
      color: rgb(var(--primary-6));
      cursor: pointer;
    }
  }
}
</style>
