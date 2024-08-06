<script setup lang='ts'>

const { id } = useRoute().params
const { data } = await useFetch(`/api/jobs/${id}`)

const deleteItem = async () => {
  if (!confirm('are you sure?')) return
  await useFetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  })
  navigateTo('/dashboard/jobs')
}
</script>

<template>
  <!-- <DashboardHeader title="item details" :breadcrumb="['items']" /> -->
  <UCard>
    <template #header>
      <div class="flex gap-2 justify-end">
        <UButton label="edit" @click="navigateTo({ path: `/dashboard/jobs/${id}/edit` })" />
        <UButton label="delete" @click="deleteItem()" />
      </div>
    </template>
    <div class="flex gap-10 flex-wrap">
      <!-- <ColValue :value="dateFormat(data?.createdAt || '')" label="createdAt" /> -->
      <ColValue label="ID" :value="data?.id" />
      <ColValue label="title" :value="data?.title" />
      <ColValue label="description" :value="data?.description" />
    </div>
  </UCard>
</template>

<style scoped></style>