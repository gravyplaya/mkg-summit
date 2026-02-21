# Payload CMS Implementation Plan for MKG Summit

## Overview

This plan outlines the implementation of Payload CMS as a backend for the MKG Summit website. Payload will be integrated directly into the existing Next.js application, providing a seamless content management experience for the event team.

## Current Project State

- **Framework**: Next.js 16.1.6 with App Router
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **TypeScript**: Yes
- **Package Manager**: pnpm

## Architecture

```mermaid
graph TB
    subgraph Next.js Application
        A[App Router Pages] --> B[Payload CMS]
        B --> C[(Database)]
        B --> D[Media Storage]
        
        subgraph Payload Collections
            E[Speakers]
            F[Sponsors]
            G[Sessions]
            H[Media]
            I[Users]
        end
    end
    
    subgraph Admin Panel
        J[Content Editors] --> K[Admin UI at /admin]
        K --> B
    end
    
    subgraph API Layer
        B --> L[REST API /api/*]
        B --> M[GraphQL /api/graphql]
    end
    
    L --> A
    M --> A
```

---

## Phase 1: Foundation Setup

### Step 1.1: Install Dependencies

Install Payload CMS core and required packages:

```bash
pnpm add payload @payloadcms/next @payloadcms/richtext-lexical sharp
```

Install PostgreSQL database adapter:

```bash
pnpm add @payloadcms/db-postgres
```

### Step 1.2: Update Next.js Configuration

Convert [`next.config.ts`](next.config.ts) to use the Payload plugin:

```typescript
// next.config.ts
import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Your existing config
}

export default withPayload(nextConfig)
```

### Step 1.3: Create Environment Variables

Add to `.env`:

```env
# Payload
PAYLOAD_SECRET=your-secret-key-here

# PostgreSQL Database
DATABASE_URL=postgresql://user:password@localhost:5432/mkg_summit

# Server
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Step 1.4: Create Payload Configuration

Create `src/payload.config.ts`:

```typescript
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

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
    // Will be defined in Phase 2
  ],
  
  globals: [
    // Will be defined in Phase 2
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
})
```

---

## Phase 2: Content Schema Definition

### Step 2.1: Create Collection - Media

`src/collections/Media.ts`:

```typescript
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    imageSizes: [
      { name: 'thumbnail', width: 300, height: 300 },
      { name: 'small', width: 600, height: 600 },
      { name: 'medium', width: 900, height: 900 },
      { name: 'large', width: 1200, height: 1200 },
    ],
    adminThumbnail: 'thumbnail',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
}
```

### Step 2.2: Create Collection - Speakers

`src/collections/Speakers.ts`:

```typescript
import type { CollectionConfig } from 'payload'

export const Speakers: CollectionConfig = {
  slug: 'speakers',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'featured'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'jobTitle',
      type: 'text',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'shortBio',
      type: 'textarea',
      maxLength: 200,
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'twitter', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'website', type: 'text' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sessions',
      type: 'relationship',
      relationTo: 'sessions',
      hasMany: true,
    },
  ],
}
```

### Step 2.3: Create Collection - Sponsors

`src/collections/Sponsors.ts`:

```typescript
import type { CollectionConfig } from 'payload'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'tier', 'featured'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'tier',
      type: 'select',
      required: true,
      options: [
        { label: 'Platinum', value: 'platinum' },
        { label: 'Gold', value: 'gold' },
        { label: 'Silver', value: 'silver' },
        { label: 'Bronze', value: 'bronze' },
        { label: 'Partner', value: 'partner' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
```

### Step 2.4: Create Collection - Sessions

`src/collections/Sessions.ts`:

```typescript
import type { CollectionConfig } from 'payload'

export const Sessions: CollectionConfig = {
  slug: 'sessions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sessionType', 'startTime'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'sessionType',
      type: 'select',
      required: true,
      options: [
        { label: 'Keynote', value: 'keynote' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Panel', value: 'panel' },
        { label: 'Lightning Talk', value: 'lightning' },
        { label: 'Break', value: 'break' },
      ],
    },
    {
      name: 'speakers',
      type: 'relationship',
      relationTo: 'speakers',
      hasMany: true,
    },
    {
      name: 'startTime',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'endTime',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'track',
      type: 'select',
      options: [
        { label: 'Main Stage', value: 'main' },
        { label: 'Workshop Room A', value: 'workshop-a' },
        { label: 'Workshop Room B', value: 'workshop-b' },
      ],
    },
  ],
}
```

### Step 2.5: Create Collection - Users

`src/collections/Users.ts`:

```typescript
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 7200,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
```

### Step 2.6: Create Global - Event Settings

`src/globals/EventSettings.ts`:

```typescript
import type { GlobalConfig } from 'payload'

export const EventSettings: GlobalConfig = {
  slug: 'event-settings',
  fields: [
    {
      name: 'eventName',
      type: 'text',
      required: true,
      defaultValue: 'MKG Summit',
    },
    {
      name: 'eventDate',
      type: 'date',
    },
    {
      name: 'venue',
      type: 'group',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'address', type: 'text' },
        { name: 'city', type: 'text' },
      ],
    },
    {
      name: 'registrationUrl',
      type: 'text',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
```

---

## Phase 3: Integration

### Step 3.1: Create Payload Client Utility

`src/lib/payload.ts`:

```typescript
import { getPayload } from 'payload'
import config from '@payload-config'

export const payload = await getPayload({ config })
```

### Step 3.2: Create API Route for Payload

`src/app/api/[...payload]/route.ts`:

```typescript
import { GET, POST } from '@payloadcms/next/routes'

export const { GET: payloadGET, POST: payloadPOST } = GET({
  config: Promise.resolve({}),
})

export { payloadGET as GET, payloadPOST as POST }
```

### Step 3.3: Create Admin Route

`src/app/(payload)/admin/[[...segments]]/page.tsx`:

```typescript
import { AdminView } from '@payloadcms/next/views'

export default AdminView
```

### Step 3.4: Update TypeScript Config

Add to [`tsconfig.json`](tsconfig.json):

```json
{
  "compilerOptions": {
    "paths": {
      "@payload-config": ["./src/payload.config.ts"]
    }
  }
}
```

---

## Phase 4: Frontend Integration

### Step 4.1: Create Data Fetching Utilities

`src/lib/api.ts`:

```typescript
import { payload } from './payload'

export async function getSpeakers() {
  return payload.find({
    collection: 'speakers',
    sort: 'name',
  })
}

export async function getFeaturedSpeakers() {
  return payload.find({
    collection: 'speakers',
    where: {
      featured: { equals: true },
    },
  })
}

export async function getSponsors() {
  return payload.find({
    collection: 'sponsors',
    sort: '-tier',
  })
}

export async function getSponsorsByTier(tier: string) {
  return payload.find({
    collection: 'sponsors',
    where: {
      tier: { equals: tier },
    },
  })
}

export async function getSessions() {
  return payload.find({
    collection: 'sessions',
    sort: 'startTime',
  })
}

export async function getEventSettings() {
  return payload.findGlobal({
    slug: 'event-settings',
  })
}
```

### Step 4.2: Update Existing Pages

Update [`src/app/speakers/page.tsx`](src/app/speakers/page.tsx) to fetch from Payload:

```typescript
import { getSpeakers } from '@/lib/api'

export default async function SpeakersPage() {
  const { docs: speakers } = await getSpeakers()
  
  return (
    // Render speakers from CMS
  )
}
```

Update [`src/app/sponsors/page.tsx`](src/app/sponsors/page.tsx) to fetch from Payload:

```typescript
import { getSponsors, getSponsorsByTier } from '@/lib/api'

export default async function SponsorsPage() {
  const { docs: sponsors } = await getSponsors()
  
  // Group by tier
  const platinum = await getSponsorsByTier('platinum')
  const gold = await getSponsorsByTier('gold')
  // etc.
  
  return (
    // Render sponsors from CMS
  )
}
```

---

## Phase 5: Deployment Configuration

### Step 5.1: Docker Configuration (Optional)

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Step 5.2: Vercel Configuration

Ensure `output: 'standalone'` is set in next.config.ts for Vercel deployment.

---

## File Structure After Implementation

```
mkg-summit/
├── src/
│   ├── app/
│   │   ├── (payload)/
│   │   │   └── admin/
│   │   │       └── [[...segments]]/
│   │   │           └── page.tsx
│   │   ├── api/
│   │   │   └── [...payload]/
│   │   │       └── route.ts
│   │   ├── speakers/
│   │   │   └── page.tsx (updated)
│   │   ├── sponsors/
│   │   │   └── page.tsx (updated)
│   │   └── ...
│   ├── collections/
│   │   ├── Media.ts
│   │   ├── Speakers.ts
│   │   ├── Sponsors.ts
│   │   ├── Sessions.ts
│   │   └── Users.ts
│   ├── globals/
│   │   └── EventSettings.ts
│   ├── lib/
│   │   ├── payload.ts
│   │   └── api.ts
│   ├── payload.config.ts
│   └── payload-types.ts (generated)
├── media/ (uploaded files)
├── .env
├── next.config.ts (updated)
└── tsconfig.json (updated)
```

---

## Access Control Configuration

For a mixed team of developers and editors, implement role-based access:

```typescript
// In payload.config.ts
import { accessByRole } from 'payload'

export default buildConfig({
  // ... other config
  access: {
    // Default access control
  },
})
```

Collection-level access example:

```typescript
// In Speakers collection
access: {
  read: () => true, // Public read
  create: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
  update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
  delete: ({ req: { user } }) => user?.role === 'admin',
}
```

---

## Summary

This implementation plan provides:

1. **Seamless Integration**: Payload runs inside your Next.js app
2. **Type Safety**: Auto-generated TypeScript types
3. **Admin Panel**: Ready-to-use admin UI at `/admin`
4. **API Layer**: REST and GraphQL APIs automatically generated
5. **Media Management**: Image uploads with automatic resizing
6. **Role-Based Access**: Admin and Editor roles for team management

The CMS will manage:
- **Speakers** - Name, photo, bio, company, social links, sessions
- **Sponsors** - Name, logo, tier, website, description
- **Sessions** - Title, description, speakers, time, location
- **Media** - Images with automatic size variants
- **Event Settings** - Global event configuration

---

## Next Steps

1. Confirm database choice (MongoDB, PostgreSQL, or SQLite)
2. Switch to Code mode to begin implementation
3. Follow phases sequentially
4. Test admin panel and API endpoints
5. Migrate existing content to CMS
