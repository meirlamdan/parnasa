<script setup lang="ts">
const route = useRoute()

const links = [
  {
    label: 'משרות',
    icon: 'i-tabler-briefcase',
    to: '/dashboard/jobs'
  },
  {
    label: 'שונות',
    icon: 'i-tabler-star',
    to: '/dashboard/'
  }
]
</script>

<template>
  <div class="w-64 min-h-screen border-e border-gray-200 px-2">
    <div class="w-full p-8">
      <img src="/logo.png" width="150" alt="" class="mx-auto">
    </div>
    <UVerticalNavigation :links="links" />
  </div>
</template>
