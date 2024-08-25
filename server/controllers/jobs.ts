type Job = {
  id: string
  job: string
  description?: string
  hours?: string,
  salary?: string,
  requirements?: string,
  city?: string,
  created_at?: string,
  updated_at?: string
}

const db = useDatabase()

const jobsCtrl = {
  createJob: async (body: Job) => {
    const { id, job, description, hours, salary, requirements, city } = body
    // const id = crypto.randomUUID()
    await db.sql`INSERT INTO jobs (id, job, description, hours, salary, requirements, city) VALUES ( ${id}, ${job}, ${description}, ${hours}, ${salary}, ${requirements}, ${city})`
    return {
      id,
      job
    }
  },
  getJobs: async (query: { limit: number, offset: number, order: string, filters: string} = {
    limit: 10,
    offset: 0,
    order: 'createdAt DESC',
    filters: '{}'
  }) => {
    let { limit, offset, order, filters } = query
    filters = JSON.parse(filters)
    let where = ''
    if (Object.keys(filters).length) {
      where = ['job', 'city', 'id'].map((column) => {
        if (filters[column as keyof typeof filters]) {
          return `${column} LIKE '%${filters[column as keyof typeof filters]}%'`
        }
      }).filter(Boolean).join(' AND ')
    }
    const rows = await db.sql`SELECT * FROM jobs {${where? `WHERE ${where}`: '' }} ORDER BY ${order} LIMIT ${limit} OFFSET ${offset}`
    const count = await db.sql`SELECT COUNT(*) FROM jobs {${where? `WHERE ${where}`: '' }}`

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
    const columns = ['job', 'description', 'hours', 'salary', 'requirements', 'city']
    let sqlSET = ''
    columns.forEach((column) => {
      if (body[column as keyof Job]) {
        sqlSET += `${column} = '${body[column as keyof Job]}', `
      }
    })
    sqlSET += `updated_at = datetime('now','localtime')`
    await db.sql`UPDATE jobs SET {${sqlSET}} WHERE id = ${id}`
    return jobsCtrl.getJobById(id)
  }
}

export default jobsCtrl