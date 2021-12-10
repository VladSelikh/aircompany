const { expect } = require("chai");

const { CLASSIFICATIONLEVEL } = require("../models/ClassificationLevel");
const { PassengerPlane } = require("../planes/Passenger");
const { Airport } = require("../Airport");
const { planes } = require("../index");

describe("Test airport:", () => {

  it("should have at least one military plane with transport type", () => {
    expect(new Airport(planes).getTransportMilitaryPlanes()).not.empty
  });

  it("should check passenger plane with max capacity", () => {
    let listPassangerPlane = new Airport(planes).getPassengerPlaneWithMaxPassengersCapacity();
    let planeWithMaxPassengerCapacity = new PassengerPlane("Boeing-747", 980, 16100, 70500, 242);
    expect(listPassangerPlane).deep.equal(planeWithMaxPassengerCapacity)
  });

  it("should check sorting by max capacity", () => {
    expect(new Airport(planes).getPassengerPlaneWithMaxPassengersCapacity()).not.empty
  });

  it("should have at least one military plane with bomber type", () => {
    expect(new Airport(planes).getBomberMilitaryPlanes()).not.empty
  });

  it("should check that experimental planes have classification level higher than unclassified", () => {
    let listExperementalPlanes = new Airport(planes).getExperimentalPlanes();
    expect(listExperementalPlanes.filter(experimentalPlanes => experimentalPlanes.classificationLevel == CLASSIFICATIONLEVEL.Unclassified)).empty
  });
});
