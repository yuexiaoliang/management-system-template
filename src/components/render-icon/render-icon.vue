<script lang="tsx">
import { compile, defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    if (!props.name) return () => null

    return () => h(compile(`<${props.name}/>`))
  }
})
</script>
