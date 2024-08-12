<script setup lang='ts'>
const { locale, locales, setLocale } = useI18n()
const langs = locales.value.map(({ code, name }) => ({
  value: code, name
}))

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
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
              <NuxtLink to="/#about">{{ $t('links.about') }}</NuxtLink>
              <NuxtLink to="/#contact">{{ $t('links.contact') }}</NuxtLink>
              <NuxtLink to="/jobs"
                class="bg-gold text-white px-4 py-1 rounded-full hover:bg-white hover:text-gold hover:border-gold  transition-colors">
                {{ $t('links.jobs') }}
              </NuxtLink>
            </div>
          </nav>
          <UPopover class="sm:hidden text-center">
            <button class="text-5xl my-[30px]">
              <UIcon name="i-ic-sharp-menu" />
            </button>
            <template #panel="{ close }">
              <div class="p-4">
                <div class="flex flex-col justify-center gap-6 mt-4 text-xl text-custom-gold">
                  <NuxtLink to="/" @click="close">{{ $t('links.home') }}</NuxtLink>
                  <NuxtLink to="/#about" @click="close">{{ $t('links.about') }}</NuxtLink>
                  <NuxtLink to="/#contact" @click="close">{{ $t('links.contact') }}</NuxtLink>
                  <NuxtLink to="/jobs" @click="close"
                    class="bg-gold text-white px-4 py-1 rounded-full hover:bg-white hover:text-gold hover:border-gold  transition-colors">
                    {{ $t('links.jobs') }} </NuxtLink>
                  <UButtonGroup size="2xs" orientation="horizontal" class="mx-auto">
                    <UButton @click="setLocale('he')" label="עברית" color="white"
                      :class="locale === 'he' && 'border border-gold'" />
                    <UButton @click="setLocale('en')" label="English" color="white"
                      :class="locale === 'en' && 'border border-gold'" />
                  </UButtonGroup>

                </div>
              </div>
            </template>
          </UPopover>
          <USelect class="-mt-14 ms-auto hidden sm:block" variant="none" size="sm" v-model="locale" @change="setLocale"
            :options="langs" option-attribute="name" />
        </div>
      </UContainer>
    </div>
    <div>
      <slot />
    </div>
  </div>

  </Html>
</template>

<style scoped></style>