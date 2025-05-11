<template>
  <RouterView v-slot="{ Component }">
    <Transition
      enter-active-class="transition-opacity duration-100 ease-in"
      leave-active-class="transition-opacity duration-100 ease-in"
      leave-to-class="opacity-0"
      enter-from-class="opacity-0"
      name="fade"
      mode="out-in"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
