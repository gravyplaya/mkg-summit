import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

// Collections
import { Media } from './collections/Media'
import { Speakers } from './collections/Speakers'
import { Sponsors } from './collections/Sponsors'
import { Sessions } from './collections/Sessions'
import { Users } from './collections/Users'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { VolunteerSubmissions } from './collections/VolunteerSubmissions'

// Globals
import { EventSettings } from './globals/EventSettings'

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
    ContactSubmissions,
    VolunteerSubmissions,
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
    'https://muskegoninnovatorssummit.com',
  ],

  serverURL: process.env.NODE_ENV === 'production'
    ? 'https://muskegoninnovatorssummit.com'
    : process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
})