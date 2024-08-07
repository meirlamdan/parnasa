<script setup lang='ts'>
import type { FormError, FormErrorEvent } from '#ui/types'

definePageMeta({
  alias: ['/dashboard/jobs/add'],
})

const toast = useToast()

const model = ref({
  title: '',
  description: '',
})

const id = useRoute().params.id
if (id) {
  const { data } = await useFetch(`/api/jobs/${id}`)
  if (data.value) {
    const { title, description } = data.value
    model.value = { title, description }
  }
}

const validate = (state: any) => {
  const errors: FormError[] = []
  if (!state.title) {
    errors.push({
      path: 'title',
      message: 'title is required'
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
</script>

<template>
  <!-- <DashboardHeader :title="id ? 'edit item' : 'add item'" :breadcrumb="['items']" /> -->
  <UForm :validate="validate" :state="model" @submit="save" @error="onError">
    <UCard>
      <template #header>
        item details
      </template>

      <div class="flex gap-4">
        <UFormGroup label="name" name="name">
          <UInput v-model="model.title" />
        </UFormGroup>

        <UFormGroup label="description" name="description">
          <UInput v-model="model.description" />
        </UFormGroup>
      </div>


      <template #footer>
        <div class="flex gap-2 w-full justify-center">
          <UButton type="submit">save</UButton>
          <UButton variant="outline" @click="navigateTo('/dashboard/jobs')">cancel</UButton>
        </div>
      </template>
    </UCard>
  </UForm>
</template>

<style scoped></style>