<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Banknote, LayoutDashboard, ShoppingCart, Store, Users } from 'lucide-vue-next'

import { SidebarHeader } from '@components/ui/sidebar'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from '@/components/ui/sidebar'

const route = useRoute()
// Menu items.
const items = [
  {
    title: 'Дашборд',
    url: '/',
    icon: LayoutDashboard
  },
  {
    title: 'Магазин',
    url: '#',
    icon: Store
  },
  {
    title: 'Заказы',
    url: '#',
    icon: ShoppingCart
  },
  {
    title: 'Платежи',
    url: '#',
    icon: Banknote
  },
  {
    title: 'Клиенты',
    url: '/users',
    icon: Users
  }
]
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader> <SidebarTrigger /></SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
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
