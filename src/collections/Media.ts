import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
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
