import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/data/dummy';

/**
 * Home Page of the NextJS application
 * will be accessed at route '/'
 * file name must be index.js
 */

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList events={featuredEvents} />
    </>
  );
}
