import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

// Collections
import { Media } from './collections/Media.ts'
import { Speakers } from './collections/Speakers.ts'
import { Sponsors } from './collections/Sponsors.ts'
import { Sessions } from './collections/Sessions.ts'
import { Users } from './collections/Users.ts'

// Globals
import { EventSettings } from './globals/EventSettings.ts'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  
  editor: lexicalEditor(),
  sharp,
  
  collections: [
    Media,
    Speakers,
    Sponsors,
    Sessions,
    Users,
  ],
  
  globals: [
    EventSettings,
  ],
  
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- MKG Summit CMS',
    },
  },
  
  typescript: {
    outputFile: './src/payload-types.ts',
  },
  
  cors: [
    'http://localhost:3000',
  ],
  
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
})