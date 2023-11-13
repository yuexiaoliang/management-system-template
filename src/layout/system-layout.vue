<script setup>
import { computed, ref } from 'vue'

import { useElementSize } from '@vueuse/core'

import Breadcrumb from '@/components/breadcrumb/breadcrumb.vue'
import Footer from '@/components/footer/footer.vue'
import Navbar from '@/components/navbar/navbar.vue'
import SiderMenu from '@/components/sider-menu/sider-menu.vue'

import PageLayout from './page-layout.vue'

const breadcrumbRef = ref(null)
const { height: _breadcrumbHeight } = useElementSize(breadcrumbRef)
const breadcrumbHeight = computed(() => {
  return _breadcrumbHeight.value ? `${_breadcrumbHeight.value + 20}px` : '0px'
})

const footerRef = ref(null)
const { height: _footerHeight } = useElementSize(footerRef)
const footerHeight = computed(() => `${_footerHeight.value + 20}px`)
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
        <a-layout-content
          class="system-layout-content"
          :style="{
            '--breadcrumb-height': breadcrumbHeight,
            '--footer-height': footerHeight
          }"
        >
          <Breadcrumb ref="breadcrumbRef" class="system-layout-breadcrumb" />

          <PageLayout class="system-layout-body" />
        </a-layout-content>

        <Footer ref="footerRef" />
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
    padding: 20px;
  }

  &-breadcrumb {
    margin-bottom: 20px;
  }

  &-body {
    min-height: calc(100vh - var(--header-height) - var(--footer-height) - var(--breadcrumb-height) - 40px);
    background-color: var(--body-bg);
    border-radius: var(--border-radius);
  }
}
</style>
