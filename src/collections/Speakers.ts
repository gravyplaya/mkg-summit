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
