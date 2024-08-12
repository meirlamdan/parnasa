<script lang="ts" setup>

const parnasaSum = [
  {
    title: 'שיחות ופניות',
    number: 4617,
    logo: 'i-heroicons-user-group'
  },
  {
    title: 'אבחונים מקצועיים',
    number: 442,
    logo: 'i-heroicons-user-group'
  },
  {
    title: 'משרות עבודה',
    number: 1100,
    logo: 'i-heroicons-user-group'
  },
  {
    title: 'ראיונות עבודה',
    number: 634,
    logo: 'i-heroicons-users'
  },
  {
    title: 'נקלטו בעבודה',
    number: 634,
    logo: 'i-heroicons-users'
  },
  {
    title: 'עסקים עצמאיים הוקמו',
    number: 25,
    logo: 'i-heroicons-users'
  }
]

</script>

<template>
  <div class="text-center">
    <UContainer class="py-20">
      <div class="text-7xl text-gold">{{ $t('main.title') }}</div>
      <div class="text-3xl mt-10 md:px-20 ">{{ $t('main.content') }}</div>
      <div class="flex justify-center gap-10 flex-wrap my-20">
        <CardSum v-for="obj in parnasaSum" :title="obj.title" :number="obj.number" :logo="obj.logo" />
      </div>
    </UContainer>

    <div class="bg-gold-light text-blue-custom">
      <UContainer id="about" class="py-20">
        <div class="text-3xl mb-14 text-gold text-center font-bold">{{ $t('about.title') }}</div>
        <div class="flex flex-wrap justify-center gap-20 text-xl">
          <div class="max-w-[500px]">
            <div class="font-bold text-2xl mb-4"> 
              {{ $t('about.part1.title') }}
            </div>
            <div class="text-justify">
              {{ $t('about.part1.content') }}
            </div>
          </div>
          <div class="max-w-[500px]">
            <div class="font-bold text-2xl mb-4"> 
              {{ $t('about.part2.title') }}
            </div>
            <div class="text-justify">
              {{ $t('about.part2.content') }}
            </div>
          </div>
          <div class="max-w-[500px]">
            <div class="font-bold text-2xl mb-4">
              {{ $t('about.part3.title') }}
            </div>

            <div class="text-justify"> 
              {{ $t('about.part3.content') }}
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-20">
      <div id="contact" class="mb-12">
        <div class="text-3xl text-custom-gold text-center mt-10">צור קשר</div>
        <form class="flex flex-col gap-4 max-w-96 mx-auto my-12">
          <div class="w-full">
            <UInput placeholder="שם" />
          </div>
          <div class="w-full">
            <UInput :placeholder="$t('form.email')" />
          </div>
          <UTextarea :placeholder="$t('form.message')" />
          <UButton  class=" bg-gold hover:bg-gold-light rounded-full justify-center">{{ $t('form.submit') }}</UButton>
        </form>
        <div>
          <div class="text-center text-3xl text-custom-gold">כתובת</div>
          <div class="text-center text-3xl text-gold">ישראל, ישראל</div>
        </div>
      </div>
    </UContainer>
  </div>

</template>

