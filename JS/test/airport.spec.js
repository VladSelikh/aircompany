const { expect } = require("chai");

const { CLASSIFICATION_LEVEL } = require("../models/ClassificationLevel");
const { PassengerPlane } = require("../planes/PassengerPlane");
const { Airport } = require("../Airport");
const { planes } = require("../index");

let airport = new Airport(planes);

describe("Test airport:", () => {
  it("should have at least one military plane with transport type", () => {
    expect(airport.getTransportMilitaryPlanes()).not.empty;
  });

  it("should check passenger plane with max capacity", () => {
    let listPassangerPlane =
      airport.getPassengerPlaneWithMaxPassengersCapacity();
    let planeWithMaxPassengerCapacity = new PassengerPlane({ model: "Boeing-747", maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, passengersCapacity: 242, });
    expect(listPassangerPlane).deep.equal(planeWithMaxPassengerCapacity);
  });

  it("should check sorting by max capacity", () => {
    expect(airport.getPassengerPlaneWithMaxPassengersCapacity()).not.empty;
  });

  it("should have at least one military plane with bomber type", () => {
    expect(airport.getBomberMilitaryPlanes()).not.empty;
  });

  it("should check that experimental planes have classification level higher than unclassified", () => {
    let listExperementalPlanes = airport.getExperimentalPlanes();
    expect(
      listExperementalPlanes.filter(
        (experimentalPlanes) =>
          experimentalPlanes.classificationLevel ===
          CLASSIFICATION_LEVEL.Unclassified
      )
    ).empty;
  });
});
