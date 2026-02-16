
import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
    slug: 'projects',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'location', 'type'],
    },
    access: {
        read: () => true,
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
            required: true,
            unique: true,
        },
        {
            name: 'category',
            type: 'select',
            options: [
                { label: 'Residential', value: 'RESIDENTIAL' },
                { label: 'Commercial', value: 'COMMERCIAL' },
                { label: 'Hotel', value: 'HOTEL' },
            ],
            required: true,
        },
        {
            name: 'location',
            type: 'text',
            required: true,
        },
        {
            name: 'type',
            type: 'text', // e.g., "Glass Railings"
            required: true,
        },
        {
            name: 'description',
            type: 'richText',
        },
        {
            name: 'client',
            type: 'text',
        },
        {
            name: 'completionDate',
            type: 'date',
        },
        {
            name: 'images',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'caption',
                    type: 'text',
                },
            ],
        },
    ],
}
