import Button from '../common/Button';
import ArrowRightIcon from '../icons/ArrowRight';

// USing css modules
import styles from './EventItem.module.css';

function EventItem(props) {
  const { id, title, image, date, location } = props;
  const formatedDateString = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  return (
    <li className={styles.item}>
      <img src={'/' + image} alt="" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{formatedDateString}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
