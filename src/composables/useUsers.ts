import { ref } from 'vue'

import type { IUser } from '@/types'

import { http } from '@/services/http.ts'

export const useUsers = () => {
  const users = ref<IUser[]>([])

  function fetchUsers() {
    return new Promise((resolve, reject) => {
      http
        .get<{ limit: number; skip: number; total: number; users: IUser[] }>('/users')
        .then(({ data }) => {
          users.value = data.users
          resolve(data)
        })
        .catch(reject)
    })
  }

  return {
    fetchUsers,
    users
  }
}
