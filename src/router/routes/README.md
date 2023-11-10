# Route 配置

## `name`

- Type: `string`
- Required: `true`

路由名称，主要用于匹配用户配置的路由以及路由跳转。

## `meta.title`

- Type: `string`
- Required: `false`

路由标题。

## `meta.icon`

- Type: `string`
- Required: `false`

路由图标，查看 [图标库](https://arco.design/vue/component/icon) 选择可用图表。

## `meta.skipLogin`

- Type: `boolean`
- Required: `false`

是否跳过登录验证，如果设置为 `true`，则不会进行登录验证，直接进入路由。

## `meta.hideInMenu`

- Type: `boolean`
- Required: `false`

是否在菜单中隐藏，如果设置为 `true`，则不会在菜单中显示。
