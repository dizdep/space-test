<script setup lang="ts">
import { Banknote, LayoutDashboard, ShoppingCart, Store, Users } from 'lucide-vue-next'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Дашборд',
    url: '#',
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
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
