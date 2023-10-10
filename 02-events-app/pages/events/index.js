import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';
import { getAllEvents } from '@/data/dummy';

function Events() {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}
export default Events;
