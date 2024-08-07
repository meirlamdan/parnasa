<script setup lang="ts">
const route = useRoute()

const links = [
  {
    label: 'משרות',
    icon: 'i-heroicons-chart-bar',
    to: '/dashboard/jobs'
  },
  // {
  //   label: 'users',
  //   icon: 'i-heroicons-users',
  //   to: '/dashboard/users'
  // }
]
</script>

<template>
  <div class="w-64 min-h-screen border-e border-gray-200 px-2">
    <div class="w-full p-8">
      <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" width="100" alt="" class="mx-auto">
    </div>
    <UVerticalNavigation :links="links" />
  </div>
</template>
