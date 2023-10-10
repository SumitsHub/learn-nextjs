import EventList from '@/components/events/EventList';
import { getAllEvents } from '@/data/dummy';

function Events() {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
export default Events;
