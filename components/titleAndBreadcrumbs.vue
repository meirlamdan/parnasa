<script setup lang='ts'>
const props = defineProps<{
  title: string
  breadcrumb?: [{ label: string, icon?: string, to?: string }]
}>()

const links = [{
  label: 'בית',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'דשבורד',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/dashboard'
}, ...(props.breadcrumb || [])]
</script>

<template>
  <div class="mt-10">
    <UBreadcrumb :links="links" />
  </div>

  <div class="text-2xl font-bold my-14">{{ props.title }}</div>

</template>

<style scoped></style>