import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';
import { getAllEvents } from '@/data/dummy';
import { useRouter } from 'next/router';

/**
 * Home page for the route - /events
 */

function Events() {
  const events = getAllEvents();
  const router = useRouter();
  const findEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventSearch onSearch={findEvents} />
      <EventList events={events} />
    </>
  );
}
export default Events;
