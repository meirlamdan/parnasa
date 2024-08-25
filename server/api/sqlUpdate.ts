const db = useDatabase()

export default defineEventHandler(async (event) => {
  // drop table
  await db.sql`DROP TABLE jobs`
  await db.sql`CREATE TABLE IF NOT EXISTS jobs (
  id INTEGER PRIMARY KEY,
  job TEXT NOT NULL,
  description TEXT,
  hours TEXT,
  salary TEXT,
  requirements TEXT,
  city TEXT,
  created_at TEXT DEFAULT (datetime('now','localtime')),
  updated_at TEXT DEFAULT (datetime('now','localtime'))
)`


  //add columns salary and date  
  // await db.sql`ALTER TABLE jobs ADD COLUMN salary TEXT, ADD COLUMN date TEXT`

  return 'success';
})
