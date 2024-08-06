<script setup lang='ts'>

</script>

<template>
  <div class="min-h-screen">
    <div class="flex gap-5 ms-5">
      <div class="text-7xl">פרנסה </div>
      <nav>
        <div class="flex gap-4 my-10 text-lg">
          <NuxtLink to="/">בית</NuxtLink>
          <NuxtLink to="/about">אודות</NuxtLink>
          <NuxtLink to="/contact">צור קשר</NuxtLink>
          <NuxtLink to="/dashboard">Dashboard</NuxtLink>
        </div>
      </nav>
    </div>
    <UContainer class="min-h-[90vh]">
      <slot />
    </UContainer>
  </div>
</template>

<style scoped>
.router-link-active{
  text-decoration: underline;
}
</style>