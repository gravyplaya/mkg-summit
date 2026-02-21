import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
    slug: 'contact-submissions',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'subject', 'createdAt'],
    },
    access: {
        create: () => true, // Allow public submissions
        read: ({ req: { user } }) => Boolean(user), // Only authenticated users can read
        update: ({ req: { user } }) => Boolean(user), // Only authenticated users can update
        delete: ({ req: { user } }) => Boolean(user), // Only authenticated users can delete
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'subject',
            type: 'select',
            required: true,
            options: [
                { label: 'General Inquiry', value: 'general' },
                { label: 'Sponsorship Opportunities', value: 'sponsorship' },
                { label: 'Speaking Opportunities', value: 'speaking' },
                { label: 'Media & Press', value: 'media' },
                { label: 'Other', value: 'other' },
            ],
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
        },
    ],
}
