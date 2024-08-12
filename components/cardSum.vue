<script lang="ts" setup>
import CountUp from 'vue-countup-v3'
defineProps<{
  title: string
  number: number
  logo?: string
}>()
</script>

<template>
  <div class="text-center w-56 border-gold-light border rounded-lg p-4 space-y-4">
    <UIcon v-if="logo" :name="logo" class="text-blue-light text-5xl" />
    <ClientOnly>
      <CountUp class="text-4xl font-bold" :end-val="number" duration="3" />
    </ClientOnly>
    <div class="text-2xl">{{ title }}</div>
  </div>
</template>