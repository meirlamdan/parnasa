import jobsCtrl from "~/server/controllers/jobs"

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  const body = await readBody(event)
  const item = await jobsCtrl.createJob(body)
  return item
})