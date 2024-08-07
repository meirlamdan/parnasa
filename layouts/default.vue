<script setup lang='ts'>

</script>

<template>
  <div class="bg-blue-dark min-h-screen text-white">
    <div class="sticky top-0 z-10 bg-[#293f52] border-b border-gold-light border-opacity-10">
      <UContainer class="text-gold">
        <div class="flex sm:justify-start justify-between items-center gap-20">
          <NuxtLink to="/">
            <div class="h-36 sm:h-48 -mb-20 sm:-mb-24 bg-gold-light shadow-2xl border border-blue-dark rounded-full">
              <img src="/logo.png" class="h-full">
            </div>
          </NuxtLink>
          <nav class="hidden sm:block">
            <div class="flex justify-center gap-8 my-10 text-xl text-custom-gold">
              <NuxtLink to="/#about">אודות</NuxtLink>
              <NuxtLink to="/#contact">צור קשר</NuxtLink>
              <NuxtLink to="/jobs"
                class="bg-gold text-white px-4 py-1 rounded-full hover:bg-white hover:text-gold hover:border-gold  transition-colors">
                המשרות שלנו
              </NuxtLink>
              <!-- <UButton icon="i-heroicons-book-open" to="/jobs" :ui="{ rounded: 'rounded-full'}" color="white">המשרות שלנו</UButton> -->
              <!-- <NuxtLink to="/dashboard">Dashboard</NuxtLink> -->
            </div>
          </nav>
          <UPopover class="sm:hidden">
            <button class="text-5xl my-[30px]">
              <UIcon name="i-ic-sharp-menu" />
            </button>
            <template #panel="{ close }">
              <div class="p-4">
                <div class="flex flex-col justify-center gap-6 my-4 text-xl text-custom-gold">
                  <NuxtLink to="/" @click="close">בית</NuxtLink>
                  <NuxtLink to="/#about" @click="close">אודות</NuxtLink>
                  <NuxtLink to="/#contact" @click="close">צור קשר</NuxtLink>
                  <NuxtLink to="/jobs" @click="close"
                    class="bg-gold text-white px-4 py-1 rounded-full hover:bg-white hover:text-gold hover:border-gold  transition-colors">
                    המשרות שלנו
                  </NuxtLink>
                </div>
              </div>
            </template>
          </UPopover>

        </div>
      </UContainer>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>