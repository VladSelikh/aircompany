const { PassengerPlane } = require('./planes/PassengerPlane');
const { MilitaryPlane } = require('./planes/MilitaryPlane');
const { ExperimentalPlane } = require('./planes/ExperimentalPlane');
const { MILITARY_TYPE } = require('./constants/militaryType');

class Airport {
  constructor(planes) {
    this.planes = planes;
}

     getPassengerPlanes() {
        let passengerPlanes = [];
        this.planes.forEach(plane => {
          if (plane instanceof PassengerPlane) {
              passengerPlanes.push(plane);
          }
      });
        return passengerPlanes;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        });
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        return passengerPlanes.sort((a, b) => {
          return a.getPassengersCapacity() > b.getPassengersCapacity() ? -1 : 1;
        })[0];
    }

    getTransportMilitaryPlanes(){
        return this.getMilitaryPlanes().filter(plane => {
          return plane.getMilitaryType() === MILITARY_TYPE.TRANSPORT;
        })
    }

    getBomberMilitaryPlanes() {
      return this.getMilitaryPlanes().filter(plane => {
        return plane.getMilitaryType() === MILITARY_TYPE.BOMBER;
      })
    }


    getExperimentalPlanes() {
        let experimentalPlanes  = [];
        this.planes.forEach(plane => {
            if (plane instanceof ExperimentalPlane) {
                experimentalPlanes.push(plane);
            }
        });
        return experimentalPlanes;
    }

    getSortedPlanesByMaxDistance() {
        this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
        return this.planes;
    }

    /**
     * Sorts by max speed
     * @return Airport
     */
    getSortedPlanesByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
        return this.planes;
    }

    getSortedPlanesByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity()) ? 1 : -1);
        return this.planes;
    }

    getPlanes() {
        return this.planes;
    }
}

module.exports = {
  Airport
};
