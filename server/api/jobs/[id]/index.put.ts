import jobsCtrl from "~/server/controllers/jobs"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')!
  const body = await readBody(event)
  const item = await jobsCtrl.updateJob(id, body)
  return item
})