<script lang="jsx">
import { defineComponent } from 'vue'

import { Message } from '@arco-design/web-vue'

export default defineComponent({
  setup() {
    const handleClick = () => {
      Message.info('Hello JSX')
    }

    return () => (
      <div class="page2">
        <a-button type="primary" class="btn" onClick={handleClick}>
          点我
        </a-button>
      </div>
    )
  }
})
</script>

<style lang="scss" scoped>
.page2 {
  background-color: #f2f2f2;
}

.btn {
  color: red;
}
</style>
