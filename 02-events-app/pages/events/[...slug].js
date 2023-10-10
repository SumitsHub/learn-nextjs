import Button from '@/components/common/Button';
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/ResultTitle';
import { getFilteredEvents } from '@/data/dummy';
import { useRouter } from 'next/router';

function FilteredEvents() {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return <h4 className="center">Loading...</h4>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear,
    numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <h4 className="center">Invalid Filters</h4>;
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <h4>No events found based on filter</h4>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}
export default FilteredEvents;
