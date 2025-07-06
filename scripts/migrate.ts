import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import * as dotenv from 'dotenv'

async function runMigrations() {
  // Load environment variables
  dotenv.config({ path: '.env.local' })

  const connectionString = process.env.DATABASE_URL!

  if (!connectionString) {
    console.error('DATABASE_URL is not set in environment variables')
    process.exit(1)
  }

  console.log('Connecting to database...')
  const sql = postgres(connectionString, { max: 1 })
  const db = drizzle(sql)

  try {
    console.log('Running migrations...')
    await migrate(db, { migrationsFolder: './drizzle' })
    console.log('Migrations completed successfully!')
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  } finally {
    await sql.end()
  }
}

runMigrations().catch(console.error) 