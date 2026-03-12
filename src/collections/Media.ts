import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../lib/access'
import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  upload: {
    staticDir: path.resolve(process.cwd(), 'media'),
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
