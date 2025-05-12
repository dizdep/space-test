import { Banknote, LayoutDashboard, ShoppingCart, Store, Users } from 'lucide-vue-next'

export const tabs = [
  {
    title: 'Дашборд',
    url: '/',
    icon: LayoutDashboard
  },
  {
    title: 'Магазин',
    url: '/auth',
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
