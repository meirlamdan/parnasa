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
const cols = [
  { name: 'id', label: 'ID' },
  { name: 'job', label: 'משרה' },
  { name: 'description', label: 'תיאור' },
  { name: 'hours', label: 'שעות עבודה' },
  { name: 'salary', label: 'שכר' },
  { name: 'requirements', label: 'דרישות' },
  { name: 'city', label: 'עיר' },
  { name: 'created_at', label: 'תאריך יצירה' },
  { name: 'updated_at', label: 'עודכן' },
]

const breadcrumb = [{
  label: 'משרות', icon: 'i-heroicons-briefcase', to: '/dashboard/jobs'
}, {
  label: id
}]
</script>


<template>
  <titleAndBreadcrumbs title="פרטי משרה" :breadcrumb />
  <UCard>
    <template #header>
      <div class="flex gap-2 justify-end">
        <UButton label="ערוך" @click="navigateTo(`/dashboard/jobs/${id}/edit`)" />
        <UButton label="מחק" @click="deleteItem()" />
      </div>
    </template>
    <div class="flex gap-10 flex-wrap">
      <ColValue v-for="col in cols" :key="col.name" :label="col.label" :value="data?.[col.name]" />
    </div>
  </UCard>
</template>

<style scoped></style>