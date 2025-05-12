<script setup lang="ts">
import { onMounted } from 'vue'

import { useUsers } from '@/composables/useUsers.ts'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table'

const { fetchUsers, users } = useUsers()

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <Table class="my-4 bg-white">
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
        <TableCell>{{ user.birthDate }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
