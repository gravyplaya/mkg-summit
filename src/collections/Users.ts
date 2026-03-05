import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminField, isAdminOrSelf } from '../lib/access'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 7200,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000,
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      saveToJWT: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      access: {
        update: isAdminField,
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],
}