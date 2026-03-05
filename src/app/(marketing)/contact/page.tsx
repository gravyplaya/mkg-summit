import { getEventSettings } from '@/lib/api';
import type { EventSettings } from '@/payload-types';
import ContactClient from './ContactClient';

export default async function ContactPage() {
  const settings = await getEventSettings() as unknown as EventSettings;

  return <ContactClient settings={settings} />;
}
