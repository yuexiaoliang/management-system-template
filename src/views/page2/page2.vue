<script lang="jsx">
import { defineComponent } from 'vue'

import { Message } from '@arco-design/web-vue'

export default defineComponent({
  setup() {
    const handleClick = () => {
      Message.info('Hello JSX')
    }

    return () => (
      <a-button class="btn" onClick={handleClick}>
        点我
      </a-button>
    )
  }
})
</script>

<style lang="scss" scoped>
.btn {
  color: red;
}
</style>
