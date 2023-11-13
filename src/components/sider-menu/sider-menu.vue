<script lang="jsx">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import RenderIcon from '@/components/render-icon/render-icon.vue'
import { listenerRouteChange, removeRouteListener } from '@/router/listener'
import { siderMenus } from '@/router/routes/'
import { validUrl } from '@/utils/validate'

export default defineComponent({
  components: {
    RenderIcon
  },

  setup() {
    const router = useRouter()

    const selectedKey = ref([])
    const openKeys = ref([])

    const goto = (item) => {
      // 如果 path 是外部链接，则直接跳转
      if (validUrl(item.path)) {
        window.open(item.path, '_blank')
        return
      }

      selectedKey.value = [item.name]

      router.push({
        name: item.name
      })
    }

    listenerRouteChange((toRoute) => {
      if (!toRoute?.meta) return

      const menuOpenKeys = findMenuOpenKeys(toRoute.name)

      const keySet = new Set([...menuOpenKeys, ...openKeys.value])
      openKeys.value = [...keySet]

      selectedKey.value = [menuOpenKeys.at(-1)]
    }, true)

    const renderSubMenu = () => {
      return travel(siderMenus)

      function travel(menus) {
        if (!menus) return []

        const nodes = []

        menus.forEach((menu) => {
          if (!menu?.meta) return

          const { children, meta, name } = menu
          const { hideInMenu, icon: _icon, title } = meta

          if (hideInMenu) return

          const icon = () => <render-icon name={_icon} />

          if (children?.length > 0) {
            nodes.push(
              <a-sub-menu key={name} title={title} v-slots={{ icon }}>
                {travel(children)}
              </a-sub-menu>
            )
          } else {
            nodes.push(
              <a-menu-item key={name} v-slots={{ icon }} onClick={() => goto(menu)}>
                {title}
              </a-menu-item>
            )
          }
        })

        return nodes
      }
    }

    return () => (
      <div class="sider-menu">
        <a-menu
          v-model:open-keys={openKeys.value}
          selected-keys={selectedKey.value}
          level-indent={34}
          auto-open-selected={true}
        >
          {renderSubMenu()}
        </a-menu>
      </div>
    )
  },

  unmounted() {
    removeRouteListener()
  }
})

function findMenuOpenKeys(target) {
  const result = []
  let isFind = false
  const backtrack = (item, keys) => {
    if (item.name === target) {
      isFind = true
      result.push(...keys)
      return
    }
    if (item.children?.length) {
      item.children.forEach((el) => {
        backtrack(el, [...keys, el.name])
      })
    }
  }
  siderMenus.forEach((el) => {
    if (isFind) return // Performance optimization
    backtrack(el, [el.name])
  })
  return result
}
</script>

<style lang="scss" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }

  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style>
