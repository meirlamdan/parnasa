<template>
  <div class="font-[Heebo]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <UNotifications />
</template>

<style>
@font-face {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  src: local('Heebo'), url('/Heebo-Regular.ttf') format('truetype');
}
</style>
