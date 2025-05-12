<script setup lang="ts">
import * as z from 'zod'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { toTypedSchema } from '@vee-validate/zod'

import logo from '@assets/images/logo.webp'
import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import { useAuthStore } from '@/stores/auth.ts'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'

const formSchema = toTypedSchema(
  z.object({
    username: z.string({ message: 'Email обязательный' }).min(6, 'Минимальная длина пароля 6').max(12),
    password: z.string({ message: 'Пароль обязательный' }).min(8, 'Минимальная длина пароля 8').max(16)
  })
)
const router = useRouter()
const authStore = useAuthStore()

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit(async values => {
  try {
    await authStore.login(values)
    router.push('/')
  } catch (e) {
    console.log(e?.response?.data?.message)
    alert(e)
  }
})
</script>

<template>
  <div class="flex h-svh items-center justify-center bg-[#F7F8FC]">
    <div class="flex flex-col gap-8 rounded-xl bg-white px-[50px] py-10 shadow-2xs">
      <div class="flex flex-col items-center gap-8">
        <img :src="logo" alt="logo" width="152" />
        <h1 class="text-3xl leading-9 font-semibold">Вход в личный кабинет</h1>
      </div>
      <form class="flex flex-col gap-4" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>Имя пользователя</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Введите имя пользователя" v-bind="componentField" />
            </FormControl>

            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>Пароль</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Введите пароль" v-bind="componentField" />
            </FormControl>

            <FormMessage />
          </FormItem>
        </FormField>
        <Button class="mt-2" size="lg" type="submit">Войти</Button>
        <Button variant="link" class="mt-2" size="sm" type="submit">Забыли пароль?</Button>
      </form>
    </div>
  </div>
</template>
