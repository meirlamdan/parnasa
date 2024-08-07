<script lang="ts" setup>
const { data } = await useFetch('/api/jobs')
</script>

<template>
  <div class="min-h-screen bg-gold-light text-blue-custom">
    <UContainer class="pt-36">
      <UAccordion v-if="data?.rows" class="max-w-2xl mx-auto"
        :items="data?.rows.map((job) => ({ label: job.title, content: job.description, ...job }))">
        <!-- <template #default="{ item }">
          
        </template> -->
        <template #item="{ item }">
          <p class="italic text-gray-900 dark:text-white text-center ">
            {{ item }}
          </p>
        </template>

      </UAccordion>
    </UContainer>
  </div>
</template>