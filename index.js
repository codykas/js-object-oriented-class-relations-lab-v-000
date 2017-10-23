let store = {
  drivers: [],
  passengers: [],
  trips: []
};

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(function(trip){
      return trip.driverId === this.id
    }.bind(this))
  }

  passengers(){
    return this.trips().map(function(trip){
      return trip.passenger()
    })
  }
}