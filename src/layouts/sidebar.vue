<script setup lang="ts">
import { computed, onMounted } from 'vue'

import { AppSidebar } from '@components/layout'
import { useAuthStore } from '@/stores/auth.ts'
import { Skeleton } from '@components/ui/skeleton'
import { SidebarProvider } from '@components/ui/sidebar'

const authStore = useAuthStore()

const me = computed(() => authStore.me)

onMounted(() => {
  authStore.getMe()
})
</script>

<template>
  <SidebarProvider>
    <AppSidebar />

    <main class="w-full">
      <nav class="flex h-16 items-center justify-between px-4">
        <p class="text-2xl font-semibold">Клиенты</p>

        <div v-if="me?.id" class="flex items-center gap-2">
          <img alt="avatar" :src="me.image" width="38" height="38" class="rounded-full border" />
          <div>
            <p class="font-semibold">{{ me?.firstName }}</p>
            <p class="text-[12px] font-medium text-[#8A8F94]">{{ me?.phone }}</p>
          </div>
        </div>
        <Skeleton v-else class="h-7 w-10" />
      </nav>
      <div class="bg-[#F7F8FC] px-4">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </div>
    </main>
  </SidebarProvider>
</template>
