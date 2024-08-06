import jobsCtrl from "~/server/controllers/jobs"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')!
  const item = await jobsCtrl.getJobById(id)
  return item
})