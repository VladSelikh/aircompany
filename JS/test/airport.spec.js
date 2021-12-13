const { expect } = require("chai");
const { planesTestGrid } = require("../index");
const { PassengerPlane } = require("../planes/PassengerPlane");
const { Airport } = require("../airport/Airport");
const { CLASSIFICATION_LEVEL } = require("../models/ClassificationLevel");

describe("airport-smoke-test.js", () => {
  it("Should check that at least one military transport plane is present", () => {
    expect(new Airport(planesTestGrid).getTransportMilitaryPlanes()).not.empty;
  });

  it("Should check passenger plane with requested capacity is present", () => {
    const requestedPassengerPlane = new PassengerPlane({ aircraftModel: "Boeing-747", speedLimit: 980, distanceLimit: 16100, loadCapacity: 70500, passengersCapacity: 242 });
    const actualPassengerPlaneGrid = new Airport(planesTestGrid).getPassengerPlaneWithMaxPassengersCapacity();
    expect(actualPassengerPlaneGrid).deep.equal(requestedPassengerPlane);
  });

  it("Should check passenger plane with max capacity", () => {
    expect(new Airport(planesTestGrid).getPassengerPlaneWithMaxPassengersCapacity()).not.empty;
  });

  it("Should check that at least one militaly bomber is present ", () => {
    expect(new Airport(planesTestGrid).getBomberMilitaryPlanes()).not.empty;
  });

  it("Should check that experimental planes has classification level higher than unclassified", () => {
    const experimentalPlanes = new Airport(planesTestGrid).getExperimentalPlanes();
    expect(experimentalPlanes.filter((experimentalPlanes) => experimentalPlanes.classificationLevel == CLASSIFICATION_LEVEL.UNCLASSIFIED)).empty;
  });
});
