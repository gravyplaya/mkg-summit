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
      name: 'eventTime',
      type: 'text',
      defaultValue: '12:00 PM',
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
    {
      name: 'aboutDescription',
      type: 'textarea',
      defaultValue: 'The Innovators Summit is a half-day regional event celebrating creativity, entrepreneurship, and innovation across the Muskegon Lakeshore and surrounding areas. The summit will bring together 300+ entrepreneurs, creators, business leaders, and community partners to be informed, inspired, and encouraged to be bold and innovative. This will be the who’s who among leaders, innovators, movers, and shakers. Big and small all in one place!',
    },
    {
      name: 'stats',
      type: 'group',
      fields: [
        { name: 'attendees', type: 'text', defaultValue: '500+' },
        { name: 'speakers', type: 'text', defaultValue: '20+' },
        { name: 'workshops', type: 'text', defaultValue: '10+' },
        { name: 'days', type: 'text', defaultValue: '1' },
      ],
    },
  ],
}