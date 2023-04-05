import 'dontenv/config'
import { randomUUID } from 'node:crypto'
import { Environment } from 'vitest'

function generateDataURL(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable.')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  name: 'prisma',
  async setup() {
    const schema = randomUUID()
    const databseURL = generateDataURL(schema)

    process.env.DATABASE_URL = databseURL

    return {
      async teardown() {
        console.log('Teardown')
      },
    }
  },
}
