<template>
  <nav class="bg-orange-400">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggle = !toggle"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 gap-3 items-center">
            <img class="h-10 w-auto" src="../assets/images/logo.png" alt="Your Company" />
            <p class="text-3xl text-white font-bold">Gaushala</p>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-orange-400 text-white", Default: "text-gray-300 hover:bg-orange-400 hover:text-white" -->
              <router-link
                class="bg-orange-400 text-white rounded-md px-3 py-2 text-base font-medium"
                v-for="(navItem, index) of navigation"
                :key="index"
                :to="navItem.path"
              >
                {{ navItem.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="toggle" class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-orange-400 text-white", Default: "text-gray-300 hover:bg-orange-400 hover:text-white" -->
        <router-link
          class="bg-orange-400 text-white block rounded-md px-3 py-2 text-base font-medium"
          v-for="(navItem, index) of navigation"
          :key="index"
          :to="navItem.path"
          @click="toggle = false"
        >
          {{ navItem.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'

const toggle = ref(false)

const navigation = [
  { name: 'Home', path: '/', current: true },
  { name: 'Events', path: '/events', current: false },
  { name: 'Gallery', path: '/gallery', current: false },
  { name: 'Legal Documents', path: '/legal-documents', current: false },
  { name: 'Contact US', path: '/contact-us', current: false },
  { name: 'About US', path: '/about', current: false },
  { name: 'Donate', path: '/donate', current: false }
]
</script>
<style lang="scss">
nav {
  a.router-link-active {
    @apply font-bold text-xl text-white;
  }
}
</style>
