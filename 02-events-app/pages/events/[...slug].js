import EventList from '@/components/events/EventList';
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
    return <h4 className="center">Invalid Filters</h4>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <h4>No events found based on filter</h4>;
  }

  return (
    <div>
      <EventList events={filteredEvents} />
    </div>
  );
}
export default FilteredEvents;
