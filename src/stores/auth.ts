import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { Auth, IUser } from '@/types'

import { Token } from '@/types/enums.ts'
import { http } from '@/services/http.ts'

export const useAuthStore = defineStore('auth', () => {
  const me = ref<IUser | null>(null)

  const userPermission = computed(() => {
    return {
      admin: me.value?.role === 'admin',
      user: me.value?.role === 'user',
      moderator: me.value?.role === 'moderator'
    }
  })

  function login({ username, password }: { username: string; password: string }) {
    return new Promise((resolve, reject) => {
      http
        .post<Auth>('/auth/login', { username, password })
        .then(({ data }) => {
          localStorage.setItem(`${Token.ACCESS}`, data[Token.ACCESS])
          localStorage.setItem(`${Token.REFRESH}`, data[Token.REFRESH])
          resolve(data)
        })
        .catch(reject)
    })
  }

  function getMe() {
    return new Promise((resolve, reject) => {
      http
        .get<IUser>('/auth/me')
        .then(({ data }) => {
          me.value = data
          resolve(data)
        })
        .catch(reject)
    })
  }

  return {
    me,
    userPermission,
    getMe,
    login
  }
})
