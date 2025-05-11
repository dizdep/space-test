import type { NavigationGuardNext, RouteLocation, RouteLocationNormalized } from 'vue-router'

export async function loadLayout(to: RouteLocation, __: RouteLocationNormalized, next: NavigationGuardNext) {
  try {
    const layout = to.meta.layout || 'sidebar'
    const layoutComponent = await import(`@/layouts/${layout}.vue`)
    to.meta.layoutComponent = layoutComponent.default
  } catch {
    const layout = 'sidebar'
    const layoutComponent = await import(`@/layouts/${layout}.vue`)
    to.meta.layoutComponent = layoutComponent.default
  }
  next()
}
