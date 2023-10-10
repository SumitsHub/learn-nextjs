import Link from 'next/link';

function EventItem(props) {
  const { id, title, image, date, location } = props;
  const formatedDateString = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  return (
    <li>
      <img src={'/' + image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{formatedDateString}</time>
          </div>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={`/events/${id}`}>Explore Event</Link>
      </div>
    </li>
  );
}
export default EventItem;
