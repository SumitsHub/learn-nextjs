import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/data/dummy';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList events={featuredEvents} />
    </>
  );
}
