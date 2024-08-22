<script setup lang='ts'>
definePageMeta({
  layout: false,
})

const toast = useToast()
const model = ref({
  name: '',
  password: ''
})

const { loggedIn, user, session, fetch, clear } = useUserSession()

const login = async () => {
  const { data, error } = await useFetch('/api/auth', {
    method: 'POST',
    body: model.value
  })
  if (error.value) {
    toast.add({
      title: 'שגיאה בהתחברות',
    })
  }
  if (data.value) {
    toast.add({
      title: 'התחברת בהצלחה',
    })
    await fetch()
    // const history = useRouter().go(-1)
    //example:
    return navigateTo('/dashboard')
  }
}
</script>

<template>
  <div class="w-40 mx-auto mt-40 text-center">
    <form @submit.prevent="login">
      <div class="space-y-2">
        <UInput v-model="model.name" placeholder="שם משתמש" required />
        <UInput v-model="model.password" placeholder="סיסמה" required />
        <UButton type="submit">login</UButton>
      </div>
    </form>
  </div>
</template>

<style scoped></style>