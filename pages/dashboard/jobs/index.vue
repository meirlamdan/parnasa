<script setup lang="ts">

const page = ref(Number(useRoute().query.page || 1))
const itemsPerPage = 5

const openLink = (id: string) => {
  navigateTo(`/dashboard/jobs/${id}`)
}
const filters = ref({
  job: '',
  city: '',
  id: ''
})

const query = computed(() => {
  return {
    limit: itemsPerPage,
    offset: (page.value - 1) * itemsPerPage,
    order: 'createdAt DESC',
    filters: filters.value
  }
})

const { data: items, pending } = await useFetch('/api/jobs', {
  query
})

const columns = [
  {
    key: 'id',
    label: 'ID'
  },
  {
    key: 'job',
    label: 'משרה'
  },
  {
    key: 'description',
    label: 'תיאור',
  },
  {
    key: 'hours',
    label: 'שעות',
  },
  {
    key: 'salary',
    label: 'שכר',
  },
  {
    key: 'requirements',
    label: 'דרישות',
  },
  {
    key: 'city',
    label: 'עיר',
  },
  // {
  //   key: 'created_at',
  //   label: 'תאריך'
  // },
  // {
  //   key: 'updated_at',
  //   label: 'עודכן'
  // }
]

watch(page, () => {
  navigateTo({ query: { page: page.value } })
})

</script>
<template>
  <div>
    <!-- <dashboardHeader title="items" :breadcrumb="['items']" /> -->
    <div>
      <UCard>
        <template #header>
          <div class="flex justify-between">
            <div class="flex gap-4">
              <UInput v-model="filters.id" @change="page = 1" placeholder="סנן לפי ID" />
              <UInput v-model="filters.job" @change="page = 1" placeholder="סנן לפי משרה" />
              <UInput v-model="filters.city" @change="page = 1" placeholder="סנן לפי עיר" />
            </div>
            <UButton label="משרה חדשה" @click="navigateTo('/dashboard/jobs/add')" />
          </div>

        </template>
        <template #default>
          <!-- <UTable v-if="items"
            :rows="items?.rows?.map((row) => ({ ...row, createdAt: dateFormat(row.createdAt!) })) || []" :columns
            @select="openLink($event.id)" :loading="pending" /> -->
          <UTable v-if="items" :rows="items?.rows || []" :columns @select="openLink($event.id)" :loading="pending" />

        </template>
        <template #footer>
          <div class="flex justify-between">
            <CountItems :count="items?.count" :itemsPerPage :page :itemsLength="items?.rows?.length || 0" />
            <UPagination v-model="page" :page-count="itemsPerPage" :total="items?.count || 0" />
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>