import { getFeaturedEvents } from '@/data/dummy';
import EventItem from './EventItem';
function EventList() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h2>Events List</h2>
      {featuredEvents.map(event => (
        <EventItem key={event.id} {...event} />
      ))}
    </div>
  );
}
export default EventList;
