# parking-lot-assignment



Setup:
1. Install NodeJs
2. node index.js

Data Storing Structure:

```

ParkingLot : {
  numOfLevels: x,
  numOfRowsInEachLevel: x,
  numOfSlotsInEachRow: x,
  levels: [ Level, Level ] 
}

Level : { 
    totalRows: x, 
    rowSize: x, 
    rows: [ [Row], [Row], [Row] ] 
}

Row : {
    totalSpots: x, 
    remainingSpots: x,
    vehiclesOccupied: [ Vehicle, Vehicle ] 
}

Vehicle : {
    vehicleType: 'VEHICLE_TYPE',
    regNum: 'REGISTERED_NUMBER',
    fromTime: 'DEFAULT_TIME_NOW',
    spotSize: 'SLOT_SIZE'
}
```

How to use:

1. import ParkingLot and Vehicle.
``` 
const parkingLotModule = require('./ParkingLot')
const ParkingLot = parkingLotModule.parkingLot;
const Vehicle = parkingLotModule.vehicle;
```
2. Create a Parking Lot with relevant levels, number of rows in each level and number of slots in each row.
``` 
let parkingLot = new ParkingLot(numOfLevels,numOfRowsInEachLevel,numOfSlotsInEachRow);
parkingLot.createParkingLot();
```
3. Store Vehicle's in Parking Lot with Registered Number and Type of Vehicle.
```
let vehicleObj = new Vehicle(typeOfVehicle,registeredNumber); // Vehicle("CAR","REG-NUM-01");
```
