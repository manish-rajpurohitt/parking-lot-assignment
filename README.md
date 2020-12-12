# parking-lot-assignment



To Run:
1. Install NodeJs
2. node index.js
```JSONParkingLot {
  numOfLevels: 1,
  numOfRowsInEachLevel: 3,
  numOfSlotsInEachRow: 40,
  levels: [ Level { totalRows: x, rowSize: y, rows: [Array] } ] }```

Level{
    rows:[Row,Row]
}

Row{
    totalSpots:x,
    remainingSpots:function,
    vehiclesOccupied:[
        vehiche1,vehicle2
    ],
    totalVehicles:x
}

Vehicle{
        type:x(bus,car,mcycle),
        numOfSlotsRequired:x,
        regNo:x,
        from:x,
        to:x
}
