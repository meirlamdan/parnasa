export default defineNuxtRouteMiddleware(async (to) => {
  const { loggedIn } = useUserSession()
  if (to.path.startsWith('/dashboard')) {
    if (!loggedIn.value) {
      return navigateTo('/login')
    }
    to.meta.layout = 'dashboard'
  }
})
