# parking-lot-assignment

ParkingLot{
    numOfLevels:x,
    numOfSpotsInEachLevel:x,
    parkVehicle():function,
    leaveVehicle:function(),
    Level:[Level1,Level2]
    
}

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
