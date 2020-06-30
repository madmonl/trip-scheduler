function shouldAddCurrTrip(lastTrip, currTrip) {
  const fiveMinutesInMS = 300000;
  const isOriginAlsoDestination = (currTrip.originCode === lastTrip.destinationCode);
  const ridesTimeDifference = (new Date(currTrip.startTime) - new Date(lastTrip.endTime));

  return (
    (!isOriginAlsoDestination && (ridesTimeDifference > fiveMinutesInMS)) ||
    (isOriginAlsoDestination && (ridesTimeDifference > 0))
  );
}

function scheduleBusRides(trips) {
  let lastScheduledTrip = trips[0];
  const tripsTaken = { [lastScheduledTrip.tripId]: lastScheduledTrip };
  const busType = lastScheduledTrip.busType;
  trips.splice(0, 1);

  for (let i = 0; i < trips.length; i++) {
    const currTrip = trips[i];
    if (currTrip.busType === busType) {
      const shouldAddTrip = shouldAddCurrTrip(lastScheduledTrip, currTrip);
      if (shouldAddTrip) {
        lastScheduledTrip = currTrip;
        tripsTaken[lastScheduledTrip.tripId] = lastScheduledTrip;
        trips.splice(i, 1);
      }
    }
  }

  return { busType, trips: tripsTaken };
}

function schedule(trips) {
  const buses = [];

  trips = trips.sort((tripA, tripB) => (
    tripA.startTime < tripB.startTime ? -1 : 1
  ));

  let busId = 1;
  while (trips.length > 0) {
    const tripsBusShouldTake = scheduleBusRides(trips);
    buses.push({ ...tripsBusShouldTake, busId });
    busId++;
  }

  return buses;
}

function assignTripsDrivers(trips, buses) {
  trips.forEach((trip) => {
    buses.forEach(({ busId, trips }) => {
      if (trips[trip.tripId]) {
        trip.busId = busId;
      }
    })
  })
}

exports.schedule = schedule;
exports.assignTripsDrivers = assignTripsDrivers;
