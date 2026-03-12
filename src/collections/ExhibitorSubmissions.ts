import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../lib/access'

export const ExhibitorSubmissions: CollectionConfig = {
    slug: 'exhibitor-submissions',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'company', 'createdAt'],
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
            name: 'company',
            type: 'text',
            required: true,
        },
        {
            name: 'website',
            type: 'text',
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'notes',
            type: 'textarea',
        },
    ],
    hooks: {
        afterChange: [
            async ({ doc, req, operation }) => {
                if (operation === 'create') {
                    await req.payload.sendEmail({
                        to: 'info@muskegoninnovatorssummit.com',
                        subject: `New Exhibitor Submission: ${doc.company}`,
                        html: `
                            <h1>New Exhibitor Submission</h1>
                            <p><strong>Name:</strong> ${doc.name}</p>
                            <p><strong>Email:</strong> ${doc.email}</p>
                            <p><strong>Phone:</strong> ${doc.phone}</p>
                            <p><strong>Company:</strong> ${doc.company}</p>
                            <p><strong>Website:</strong> ${doc.website || 'N/A'}</p>
                            <p><strong>Description:</strong> ${doc.description}</p>
                            <p><strong>Notes:</strong> ${doc.notes || 'N/A'}</p>
                        `,
                    })
                }
            },
        ],
    },
}
