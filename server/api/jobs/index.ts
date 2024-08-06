import jobsCtrl from "~/server/controllers/jobs"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const items = await jobsCtrl.getJobs(query)
  return items
})