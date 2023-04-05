import { randomUUID } from 'node:crypto'
import { Environment } from 'vitest'

function generateDataURL(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable.')
  }

  const url = new URL(process.env.DATABASE_URL)
}

export default <Environment>{
  name: 'prisma',
  async setup() {
    const schema = randomUUID()

    return {
      async teardown() {
        console.log('Teardown')
      },
    }
  },
}
