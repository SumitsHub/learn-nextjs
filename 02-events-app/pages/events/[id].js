import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import { getEventById } from '@/data/dummy';
import { useRouter } from 'next/router';

/**
 * Example Page for dynamic route
 * Route - /events/{id}, where id is dynamic value
 */

function EventDetail() {
  const router = useRouter();

  const { id: eventId } = router.query; // accessing dynamic route paramter using router.query
  // router.query is an object containing key value pairs for dynamic route values
  const event = getEventById(eventId);

  if (!event) {
    return <h4>No event found!</h4>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
export default EventDetail;
