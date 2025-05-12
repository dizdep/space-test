<script setup lang="ts">
import { useVModel } from '@vueuse/core'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select'

const props = defineProps<{
  modelValue: string
  placeholder: string
  items: {
    value: string
    label: string
  }[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

const model = useVModel(props, 'modelValue', emit)
</script>

<template>
  <Select v-model="model">
    <SelectTrigger>
      <SelectValue :placeholder />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="item in items" :key="item.value" :value="item.value"> {{ item.label }} </SelectItem>
    </SelectContent>
  </Select>
</template>
