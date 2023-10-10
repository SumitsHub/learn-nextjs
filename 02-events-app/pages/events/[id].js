import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import { getEventById } from '@/data/dummy';
import { useRouter } from 'next/router';

function EventDetail() {
  const router = useRouter();

  const { id: eventId } = router.query;
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
