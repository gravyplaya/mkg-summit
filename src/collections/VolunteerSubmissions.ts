import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../lib/access'

export const VolunteerSubmissions: CollectionConfig = {
    slug: 'volunteer-submissions',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'phone', 'createdAt'],
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
            name: 'phone',
            type: 'text',
            required: true,
        },
        {
            name: 'interests',
            type: 'select',
            hasMany: true,
            options: [
                { label: 'Registration & Check-in', value: 'registration' },
                { label: 'Event Setup & Teardown', value: 'setup' },
                { label: 'Speaker Support', value: 'speakers' },
                { label: 'Networking Support', value: 'networking' },
                { label: 'Social Media & Photography', value: 'social' },
                { label: 'General Assistance', value: 'general' },
            ],
        },
        {
            name: 'availability',
            type: 'select',
            required: true,
            options: [
                { label: 'Morning (Setup & Registration)', value: 'morning' },
                { label: 'Afternoon (Event Support)', value: 'afternoon' },
                { label: 'Evening (Teardown & Cleanup)', value: 'evening' },
                { label: 'All Day', value: 'allday' },
            ],
        },
        {
            name: 'experience',
            type: 'textarea',
        },
    ],
}
