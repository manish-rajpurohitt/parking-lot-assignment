# parking-lot-assignment



To Run:
1. Install NodeJs
2. node index.js

Data Storing Structure:

```

ParkingLot : {
  numOfLevels: 1,
  numOfRowsInEachLevel: 3,
  numOfSlotsInEachRow: 40,
  levels: [ Level { totalRows: x, rowSize: y, rows: [Array] } ] 
}

Level : { 
    totalRows: 3, 
    rowSize: 40, 
    rows: [ [Row], [Row], [Row] ] 
}

Row : {
    totalSpots: 40, 
    remainingSpots: 40,
    vehiclesOccupied: [] 
}

Vehicle : {
    vehicleType: 'CAR',
    regNum: 'REG-NUMBER06',
    fromTime: '17:49:14',
    spotSize: 3 
}
