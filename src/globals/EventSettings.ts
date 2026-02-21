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