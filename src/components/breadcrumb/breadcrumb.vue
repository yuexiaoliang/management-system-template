<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import RenderIcon from '@/components/render-icon/render-icon.vue'

const route = useRoute()

const breadcrumb = computed(() => {
  const filtered = route.matched.filter((item) => !['System', 'Home'].includes(item.name))

  return [
    {
      name: 'apps',
      icon: 'icon-apps'
    },
    ...filtered.map((item) => {
      return {
        name: item.name,
        title: item.meta.title
      }
    })
  ]
})
</script>

<template>
  <a-breadcrumb class="breadcrumb" :class="{ hide: breadcrumb.length <= 1 }">
    <a-breadcrumb-item v-for="item in breadcrumb" :key="item.name">
      <RenderIcon v-if="item.icon" :name="item.icon" />
      {{ item.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<style lang="scss">
.breadcrumb {
  &.hide {
    display: none;
  }
}
</style>
