import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../lib/access'

export const ContactSubmissions: CollectionConfig = {
    slug: 'contact-submissions',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'subject', 'createdAt'],
    },
    access: {
        create: () => true, // Allow public submissions
        read: isAdminOrEditor,
        update: isAdminOrEditor,
        delete: isAdminOrEditor,
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
