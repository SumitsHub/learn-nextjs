import classes from './EventList.module.css';
import EventItem from './EventItem';
function EventList({ events }) {
  return (
    <div className={classes.list}>
      {events.map(event => (
        <EventItem key={event.id} {...event} />
      ))}
    </div>
  );
}
export default EventList;
