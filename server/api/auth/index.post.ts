import { useError } from "nuxt/app";

export default defineEventHandler(async (event) => {
  const { name, password } = await readBody(event)

  const a = process.env.USER || ''
  const [n, pas] = a.split(':')

  if (n === name && pas === password) {
    const session = await setUserSession(event, { user: name });
    return session
  }
  else {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized', message: 'Unauthorized' })
  }
})