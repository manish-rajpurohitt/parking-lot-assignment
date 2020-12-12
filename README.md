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

