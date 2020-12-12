const ParkingLotModule = require('./ParkingLot');

const ParkingLot = ParkingLotModule.parkingLot;
const Vehicle = ParkingLotModule.vehicle;


const main = ()=>{
    //We Create a Parking Lot with ParkingLot(NumberOfLevels,NumberOfRowsInEachLevel,NumberOfSlotsInEachRow). Example with ParkingLot(4,5,40)
    let parkingLot = new ParkingLot(1,3,40);
    parkingLot.createParkingLot(); // Create Parking Lot(Allocate given Level's, Row's and Spot's given above).
    
    // Let's Create Vehicle's with Vehicle(typeOfVehicle,registeredNumber);
    let vehicleObj1 = new Vehicle("CAR","REG-NUMBER01");
    let vehicleObj2 = new Vehicle("BUS","REG-NUMBER02");
    let vehicleObj3 = new Vehicle("CAR","REG-NUMBER03");
    let vehicleObj4 = new Vehicle("CAR","REG-NUMBER04");
    let vehicleObj5 = new Vehicle("MOTORCYCLE","REG-NUMBER05");
    let vehicleObj6 = new Vehicle("CAR","REG-NUMBER06");
    let vehicleObj7 = new Vehicle("BUS","REG-NUMBER07");
    let vehicleObj8 = new Vehicle("BUS","REG-NUMBER08");
    let vehicleObj9 = new Vehicle("CAR","REG-NUMBER09");
    let vehicleObj10 = new Vehicle("MOTORCYCLE","REG-NUMBER10");
    let vehicleObj11 = new Vehicle("CAR","REG-NUMBER11");
    let vehicleObj12 = new Vehicle("CAR","REG-NUMBER12");
    
    //Vehicles array which store all vehicle objects so that vehicle's can be added easily to our parking lot!
    let vehicles= [vehicleObj1,vehicleObj2,vehicleObj3,vehicleObj4,vehicleObj5,vehicleObj6,vehicleObj7,vehicleObj8,vehicleObj9,vehicleObj10,vehicleObj11,vehicleObj12];
    
    //Add vehicle's to parking lot
    vehicles.forEach((ele)=>parkingLot.parkVehicle(ele));

    //Get Vehicle Location
    parkingLot.getVehicleLocation("REG-NUMBER10");
    parkingLot.getVehicleLocation("RANDOM-REG-NUMBER");

    //Get Empty Spot's!
    parkingLot.getEmptySpots();

    //Check for Already Added Vehicle
    parkingLot.parkVehicle(new Vehicle("CAR","REG-NUMBER06"));

    //Let's see vehicles added to our parking lot!
    parkingLot.status();
    
    //Let's remove first five vehicles and see our parking lot!
    let removedVehicles = vehicles.splice(0,5);
    removedVehicles.forEach((ele)=>parkingLot.leave(ele.regNum));
    parkingLot.status();
    
    //Let's Remove all Vehicle's from Parking Lot!
    vehicles.forEach((ele)=>parkingLot.leave(ele.regNum));
    parkingLot.status();

    //Get Empty Spot's!
    parkingLot.getEmptySpots();

}

main();