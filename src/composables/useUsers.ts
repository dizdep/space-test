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

  function fetchFilteredUsers(key: string, value: string) {
    return new Promise((resolve, reject) => {
      http
        .get<{ limit: number; skip: number; total: number; users: IUser[] }>('/users/filter', {
          params: {
            key,
            value
          }
        })
        .then(({ data }) => {
          users.value = data.users
          resolve(data)
        })
        .catch(reject)
    })
  }

  return {
    fetchFilteredUsers,
    fetchUsers,
    users
  }
}
