<script setup lang='ts'>
import type { FormError, FormErrorEvent } from '#ui/types'

definePageMeta({
  alias: ['/dashboard/jobs/add'],
})

const toast = useToast()

const model = ref({
  id: '',
  job: '',
  description: '',
  hours: '',
  salary: '',
  requirements: '',
  city: '',
  created_at: '',
  updated_at: '',
})

const id = useRoute().params.id
if (id) {
  const { data } = await useFetch(`/api/jobs/${id}`)
  if (data.value) {
    Object.entries(data.value).forEach(([key, value]) => {
      model.value[key as keyof typeof model.value] = value
    })
  }
}

const validate = (state: any) => {
  const errors: FormError[] = []
  if (!state.id) {
    errors.push({
      path: 'id',
      message: 'שדה id הינו חובה'
    })
  }
  if (!state.job) {
    errors.push({
      path: 'job',
      message: 'שדה משרה הינו חובה'
    })
  }
  return errors
}

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const save = async () => {
  const { data, pending, error } = await useFetch(`/api/jobs/${id ? id : ''}`, {
    method: id ? 'put' : 'post',
    body: model.value
  })
  if (data.value) {
    toast.add({ title: id ? 'the item has been updated' : 'the item has been created' })
    navigateTo('/dashboard/jobs')
  }
}
const breadcrumb = [{
  label: 'משרות', icon: 'i-heroicons-briefcase', to: '/dashboard/jobs'
}]

if(id) {
  breadcrumb.push({
    label: 'עריכת משרה', icon: 'i-heroicons-pencil', to: `/dashboard/jobs/${id}/edit`
  })
}

</script>

<template>
  <titleAndBreadcrumbs :title="id ? 'עריכת משרה' : 'הוספת משרה'" :breadcrumb />
  <UForm :validate="validate" :state="model" @submit="save" @error="onError">
    <UCard>
      <template #header>
        פרטי משרה
      </template>

      <div class="flex gap-4">

        <UFormGroup label="ID" name="id">
          <UInput v-model="model.id" />
        </UFormGroup>

        <UFormGroup label="משרה" name="job">
          <UInput v-model="model.job" />
        </UFormGroup>

        <UFormGroup label="תיאור" name="description">
          <UTextarea v-model="model.description" />
        </UFormGroup>

        <UFormGroup label="שעות עבודה" name="hours">
          <UInput v-model="model.hours" />
        </UFormGroup>

        <UFormGroup label="שכר" name="salary">
          <UInput v-model="model.salary" />
        </UFormGroup>

        <UFormGroup label="דרישות" name="requirements">
          <UTextarea v-model="model.requirements" />
        </UFormGroup>

        <UFormGroup label="עיר" name="city">
          <UInput v-model="model.city" />
        </UFormGroup>
      </div>


      <template #footer>
        <div class="flex gap-2 w-full justify-center">
          <UButton type="submit">שמור</UButton>
          <UButton variant="outline" @click="navigateTo('/dashboard/jobs')">בטל</UButton>
        </div>
      </template>
    </UCard>
  </UForm>
</template>

<style scoped></style>