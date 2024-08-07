// const fakeData = [
//   {
//     id: 'randomUUID',
//     title: 'Job 1',
//     description: 'Job 1 description',
//     location: 'Job 1 location',
//     type: 'Job 1 type',
//     company: 'Job 1 company',
//     date: 'Job 1 date',
//   },
// ]

type Job = {
  id: string
  title: string
  description: string
}
const db = useDatabase()

const jobsCtrl = {
  createJob: async (body: Job) => {
    const id = crypto.randomUUID()
    await db.sql`CREATE TABLE IF NOT EXISTS jobs (id TEXT PRIMARY KEY, title TEXT, description TEXT)`
    const rs = await db.sql`INSERT INTO jobs (id, title, description) VALUES ( ${id}, ${body.title}, ${body.description})`
    console.log(rs)
    return {
      id,
      title: body.title,
      description: body.description
    }

    // return fakeData
  },
  getJobs: async (query: any) => {
    await db.sql`CREATE TABLE IF NOT EXISTS jobs (id TEXT PRIMARY KEY, title TEXT, description TEXT)`
    // db.sql`DROP TABLE IF EXISTS jobs`
    const rows = await db.sql`SELECT * FROM jobs`
    const count = await db.sql`SELECT COUNT(*) FROM jobs`

    return {
      rows: rows?.rows?.results as Job[],
      count: count?.rows?.results?.[0]?.['COUNT(*)'] as number
    }
  },
  getJobById: async (id: Job['id']) => {
    const Job = await db.sql`SELECT * FROM jobs WHERE id = ${id}`    
    return Job?.rows?.results?.[0] as Job
  },
  updateJob: async (id: Job['id'], body: Job) => {
    const Job = await db.sql`UPDATE jobs SET title = ${body.title}, description = ${body.description} WHERE id = ${id}`
    // if(!Job.success) return
    return jobsCtrl.getJobById(id)
  }
}

export default jobsCtrl