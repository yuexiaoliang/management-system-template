import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useLocalStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const token = useLocalStorage('token', '')
  const isLogin = ref(true)

  return {
    userInfo,
    token,
    isLogin
  }
})
