<script setup lang="ts">
import { useRoute } from 'vue-router'

import { tabs } from '@/data'
import logo from '@assets/images/logo.webp'
import { SidebarHeader, useSidebar } from '@components/ui/sidebar'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from '@components/ui/sidebar'

const route = useRoute()
const { state } = useSidebar()
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader
      class="flex flex-row items-center border-b transition-all"
      :class="[state === 'collapsed' ? 'justify-center' : 'justify-between']"
    >
      <img :src="logo" alt="logo" width="122" :class="[state === 'collapsed' && 'hidden']" />
      <SidebarTrigger :class="[state === 'collapsed' && 'rotate-180']" />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in tabs" :key="item.title">
              <SidebarMenuButton
                class="h-10 text-base font-medium transition-colors [&>svg]:size-[22px]"
                :class="[route.path === item.url && 'bg-mint text-white']"
                asChild
              >
                <RouterLink :to="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
