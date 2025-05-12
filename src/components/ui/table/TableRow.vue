<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tr
    data-slot="table-row"
    :class="cn('data-[state=selected]:bg-muted border-b transition-colors hover:bg-[#F7F8FC]', props.class)"
  >
    <slot />
  </tr>
</template>
