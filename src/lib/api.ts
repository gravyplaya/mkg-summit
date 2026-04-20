import { payload } from './payload'

export async function getSpeakers() {
  return payload.find({
    collection: 'speakers',
    sort: 'name',
    limit: 0,
  })
}

export async function getFeaturedSpeakers() {
  return payload.find({
    collection: 'speakers',
    where: {
      featured: { equals: true },
    },
  })
}

export async function getSpeakerBySlug(slug: string) {
  return payload.find({
    collection: 'speakers',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  })
}

export async function getSponsors() {
  return payload.find({
    collection: 'sponsors',
    sort: '-tier',
  })
}

export async function getSponsorsByTier(tier: string) {
  return payload.find({
    collection: 'sponsors',
    where: {
      tier: { equals: tier },
    },
  })
}

export async function getSessions() {
  return payload.find({
    collection: 'sessions',
    sort: 'startTime',
  })
}

export async function getSessionsByTrack(track: string) {
  return payload.find({
    collection: 'sessions',
    where: {
      track: { equals: track },
    },
    sort: 'startTime',
  })
}

export async function getEventSettings() {
  return payload.findGlobal({
    slug: 'event-settings',
  })
}

export async function getMedia(id: string) {
  return payload.findByID({
    collection: 'media',
    id,
  })
}
