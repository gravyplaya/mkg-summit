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