<script setup lang="ts">
import { AppSidebar } from '@components/layout'
import { SidebarProvider, SidebarTrigger } from '@components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="container-size">
      <SidebarTrigger />
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
      <slot />
    </main>
  </SidebarProvider>
</template>
