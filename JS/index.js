const { MilitaryPlane } = require("./planes/MilitaryPlane");
const { PassengerPlane } = require("./planes/PassengerPlane");
const { Airport } = require("./airport/Airport");
const { MILITARY_TYPE } = require("./models/MilitaryType");
const { ExperimentalPlane } = require("./planes/ExperimentalPlane");
const { EXPERIMENTAL_TYPES } = require("./models/ExperimentalType");
const { CLASSIFICATION_LEVEL } = require("./models/ClassificationLevel");
const { stringifier } = require('./utils/stringifier');

const planesTestGrid = [
  new PassengerPlane({ aircraftModel: "Boeing-737", speedLimit: 900, distanceLimit: 12000, loadCapacity: 60500, passengersCapacity: 164 }),
  new PassengerPlane({ aircraftModel: "Boeing-737-800", speedLimit: 940, distanceLimit: 12300, loadCapacity: 63870, passengersCapacity: 192 }),
  new PassengerPlane({ aircraftModel: "Boeing-747", speedLimit: 980, distanceLimit: 16100, loadCapacity: 70500, passengersCapacity: 242 }),
  new PassengerPlane({ aircraftModel: "Airbus A320", speedLimit: 930, distanceLimit: 11800, loadCapacity: 65500, passengersCapacity: 188 }),
  new PassengerPlane({ aircraftModel: "Airbus A330", speedLimit: 990, distanceLimit: 14800, loadCapacity: 80500, passengersCapacity: 222 }),
  new PassengerPlane({ aircraftModel: "Embraer 190", speedLimit: 870, distanceLimit: 8100, loadCapacity: 30800, passengersCapacity: 64 }),
  new PassengerPlane({ aircraftModel: "Sukhoi Superjet 100", speedLimit: 870, distanceLimit: 11500, loadCapacity: 50500, passengersCapacity: 140 }),
  new PassengerPlane({ aircraftModel: "Bombardier CS300", speedLimit: 920, distanceLimit: 11000, loadCapacity: 60700, passengersCapacity: 196 }),
  new MilitaryPlane({ aircraftModel: "B-1B Lancer", speedLimit: 1050, distanceLimit: 21000, loadCapacity: 80000, militaryType: MILITARY_TYPE.BOMBER }),
  new MilitaryPlane({ aircraftModel: "B-2 Spirit", speedLimit: 1030, distanceLimit: 22000, loadCapacity: 70000, militaryType: MILITARY_TYPE.BOMBER }),
  new MilitaryPlane({ aircraftModel: "B-52 Stratofortress", speedLimit: 1000, distanceLimit: 20000, loadCapacity: 80000, militaryType: MILITARY_TYPE.FIGHTER }),
  new MilitaryPlane({ aircraftModel: "F-15", speedLimit: 1500, distanceLimit: 12000, loadCapacity: 10000, militaryType: MILITARY_TYPE.FIGHTER }),
  new MilitaryPlane({ aircraftModel: "F-22", speedLimit: 1550, distanceLimit: 13000, loadCapacity: 11000, militaryType: MILITARY_TYPE.FIGHTER }),
  new MilitaryPlane({ aircraftModel: "C-130 Hercules", speedLimit: 650, distanceLimit: 5000, loadCapacity: 110000, militaryType: MILITARY_TYPE.TRANSPORT }),
  new ExperimentalPlane({ aircraftModel: "Bell X-14", speedLimit: 277, distanceLimit: 482, loadCapacity: 500, experimentalFeatures: EXPERIMENTAL_TYPES.ALTITUDE_LIMIT, classificationLevel: CLASSIFICATION_LEVEL.SECRET }),
  new ExperimentalPlane({aircraftModel: "Ryan X-13 Vertijet", speedLimit: 560, distanceLimit: 307, loadCapacity: 500, experimentalFeatures: EXPERIMENTAL_TYPES.TAKE_OFF_TYPE, classificationLevel: CLASSIFICATION_LEVEL.TOP_SECRET }),
];

(function testTextOutput() {

  let airport = new Airport(planesTestGrid);
  let militaryAirport = new Airport(airport.getMilitaryPlanes());
  let passengerAirport = new Airport(airport.getPassengerPlanes());
  console.log(`Military airport sorted by max distance: ${"\n"}${stringifier(new Airport(militaryAirport.sortByMaxDistance()))}`);
  console.log(`Passenger airport sorted by max speed: ${"\n"}${stringifier(new Airport(passengerAirport.sortByMaxSpeed()))}`);
  console.log(`Plane with max passenger capacity: ${"\n"}${stringifier(new Airport(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity()))}`);

})();

module.exports = { planesTestGrid };
