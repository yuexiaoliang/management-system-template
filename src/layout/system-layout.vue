<script setup>
import Footer from '@/components/footer/footer.vue'
import Navbar from '@/components/navbar/navbar.vue'
import SiderMenu from '@/components/sider-menu/sider-menu.vue'

import PageLayout from './page-layout.vue'
</script>

<template>
  <a-layout class="system-layout">
    <a-layout-header class="system-layout-header">
      <Navbar />
    </a-layout-header>

    <a-layout-sider class="system-layout-sider">
      <a-scrollbar>
        <SiderMenu />
      </a-scrollbar>
    </a-layout-sider>

    <a-layout class="system-layout-main">
      <a-scrollbar>
        <a-layout class="system-layout-content">
          <PageLayout />
        </a-layout>
        <Footer />
      </a-scrollbar>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.system-layout {
  height: 100vh;

  &-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: var(--z-index);
    height: var(--header-height);
    background-color: var(--header-bg);
    border-bottom: 1px solid var(--border-color);
  }

  &-sider {
    position: fixed;
    top: var(--header-height);
    bottom: 0;
    left: 0;
    z-index: var(--z-index);
    width: var(--sider-width) !important;
    height: 100vh;
    overflow: auto;
    background-color: var(--sider-bg);
    border-right: 1px solid var(--border-color);
    box-shadow: none;

    :deep(.arco-scrollbar-container) {
      height: calc(100vh - var(--header-height));
      overflow: auto;
    }

    :deep(.arco-scrollbar-track-direction-vertical) {
      width: 10px;
    }

    :deep(.arco-scrollbar-thumb-direction-vertical .arco-scrollbar-thumb-bar) {
      width: 4px;
    }
  }

  &-main {
    margin: var(--header-height) 0 0 var(--sider-width);
    background-color: var(--main-bg);

    :deep(.arco-scrollbar-container) {
      height: calc(100vh - var(--header-height));
      overflow: auto;
    }
  }

  &-content {
    padding: 15px 20px;
  }
}
</style>
