const _ = require('lodash');
const { schedule, assignTripsDrivers } = require('../scheduler/scheduler');
let trips = require('../trips/trips');

function reformatTripsDates(trips) {
  trips.forEach((trip) => {
    trip.startTime = (new Date(trip.startTime)).toLocaleString();
    trip.endTime = (new Date(trip.endTime)).toLocaleString();
  });
}

function injectIds(trips) {
  return trips.map((trip, index) => ({ tripId: index + 1, ...trip }))
}

trips = injectIds(trips);
const buses = schedule(_.cloneDeep(trips));
reformatTripsDates(trips);
assignTripsDrivers(trips, buses);

exports.trips = trips;
exports.buses = buses;