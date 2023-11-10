import { ref, watch } from 'vue'

export default (defaultParams = {}, options = { currentKey: 'pageNum', sizeKey: 'pageSize', closeWatch: false }) => {
  const { currentKey, sizeKey, closeWatch } = options

  const formData = ref({})

  const initFormData = (call = () => {}) => {
    formData.value = {
      [currentKey]: 1,
      [sizeKey]: 10,
      ...defaultParams
    }

    if (typeof call === 'function') call(formData)
  }
  initFormData()

  if (!closeWatch) {
    watch(
      () => formData,
      () => {
        Object.entries(formData.value).forEach(([key, value]) => {
          if (value === '') delete formData.value[key]
        })
      },
      {
        deep: true
      }
    )
  }

  return [formData, initFormData]
}
