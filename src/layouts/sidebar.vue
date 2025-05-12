<script setup lang="ts">
import { AppSidebar } from '@components/layout'
import { SidebarProvider } from '@components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />

    <main class="w-full">
      <nav class="container-size flex h-16 items-center border-b text-2xl font-semibold">
        <p>Клиенты</p>
      </nav>
      <div class="container-size bg-[#F7F8FC]">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </div>
    </main>
  </SidebarProvider>
</template>
