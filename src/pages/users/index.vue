<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { format } from 'date-fns/format'
import { watchDebounced } from '@vueuse/core'

import { Select } from '@components/base'
import { Input } from '@components/ui/input'
import { useUsers } from '@/composables/useUsers.ts'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table'

const { fetchUsers, users, fetchFilteredUsers } = useUsers()

const selectedFilter = ref('')
const search = ref('')

const items = [
  {
    value: 'address.city',
    label: 'Город'
  },
  {
    value: 'phone',
    label: 'Номер телефона'
  }
]

watchDebounced(
  [selectedFilter, search],
  () => {
    if (!selectedFilter.value) return
    if (!search.value) return
    fetchFilteredUsers(selectedFilter.value, search.value)
  },
  {
    debounce: 500
  }
)

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div class="space-y-4 py-4">
    <div class="flex items-center justify-between">
      <Select v-model="selectedFilter" class="w-[230px]" placeholder="Фильтр" :items />
      <Input v-model="search" class="h-11 w-fit" placeholder="Найти клиента" />
    </div>

    <Table class="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead>Имя клиента</TableHead>
          <TableHead>Телефон</TableHead>
          <TableHead>Роль</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Город</TableHead>
          <TableHead>Дата рождения</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="user in users" :key="user.id">
          <TableCell>{{ user.firstName }} </TableCell>
          <TableCell>{{ user.phone }}</TableCell>
          <TableCell>{{ user.role }}</TableCell>
          <TableCell>{{ user.email }}</TableCell>
          <TableCell>{{ user.address.country }}</TableCell>
          <TableCell>{{ format(user.birthDate, 'd MMM yyyy') }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
