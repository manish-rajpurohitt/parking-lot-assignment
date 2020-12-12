const CYCLE_SPOT = 1;
const COMPACT_SPOT = 3;
const LARGE_SPOT = 5;

const MOTORCYCLE_SPOT = [CYCLE_SPOT];
const CAR_SPOT = [COMPACT_SPOT,LARGE_SPOT];
const BUS_SPOT = [LARGE_SPOT*5];

const CAR = "CAR";
const BUS = "BUS";
const MOTORCYCLE = "MOTORCYCLE"

const vehicleTypeArray = {
    CAR:CAR_SPOT,
    BUS:BUS_SPOT,
    MOTORCYCLE:MOTORCYCLE_SPOT
}


class ParkingLot {
    
    constructor(_numOfLevels,_numOfRowsInEachLevel,_numOfSlotsInEachRow){
        this.numOfLevels = _numOfLevels;
        this.numOfRowsInEachLevel = _numOfRowsInEachLevel;
        this.numOfSlotsInEachRow = _numOfSlotsInEachRow;
        this.levels=[];
    }
    createParkingLot(){
        for(let i=0;i<this.numOfLevels;i++){
            let level = new Level(this.numOfRowsInEachLevel,this.numOfSlotsInEachRow);
            level.createRows();
            this.levels.push(level);
        } 
        
    }
    parkVehicle(vehicle){
        let reqSlot = vehicleTypeArray[vehicle.vehicleType][0];
        //console.log(reqSlot);
        this.levels.every((level,levelIndex)=>{
            let added = false;
            let alreadyAdded = false;
            level.rows.every((ele,rowIndex)=>{
                ele.vehiclesOccupied.forEach((vehicleEle)=>{
                    if(vehicleEle.regNum === vehicle.regNum){
                        console.log("Vehicle with registered number "+vehicle.regNum+" is already present!",'\n');
                        alreadyAdded = true;
                    }
                })
                if(alreadyAdded) return;
                if(ele.remainingSpots>reqSlot){
                    vehicle.spotSize = vehicleTypeArray[vehicle.vehicleType][0];
                    ele.vehiclesOccupied.push(vehicle);
                    ele.remainingSpots -= vehicleTypeArray[vehicle.vehicleType][0];

                    added = true;
                    console.log("--------------------");
                    console.log("Vehicle with "+vehicle.regNum+" of Type "+vehicle.vehicleType+" Added to Row "+rowIndex+" in Level "+levelIndex);
                    console.log(`Remaining Slots in Level ${levelIndex} in Row ${rowIndex} are ${ele.remainingSpots}`);
                    console.log("--------------------");
                    
                    if(vehicle.vehicleType === CAR){
                        if(ele.remainingSpots > reqSlot[1]){
                            vehicle.spotSize = vehicleTypeArray[vehicle.vehicleType][1];
                            ele.vehiclesOccupied.push(vehicle);
                            ele.remainingSpots -= vehicleTypeArray[vehicle.vehicleType][1];
                            added = true;
                        }
                        return !added;
                    }
                }
                return !added;
            })
            
            if(added === false){
                console.log(`No Available Spot for Vehicle with Registered Number ${vehicle.regNum}`,'\n');
                return !added;
            }
            
        })
    }
    
    leave(regNum){
        this.levels.every((level,levelIndex)=>{
            let removed = false;
            level.rows.every((row,rowIndex)=>{
                row.vehiclesOccupied.every((vehicle,vehicleIndex)=>{
                    if(vehicle.regNum === regNum){
                        this.levels[levelIndex].rows[rowIndex].vehiclesOccupied.splice(vehicleIndex,1);
                        row.remainingSpots += vehicle.spotSize;
                        console.log("--------------------");
                        console.log(`Vehicle ${vehicle.vehicleType} with Reg Num ${regNum} and can Leave from Level ${levelIndex} in Row ${rowIndex}. Thank You.`);
                        console.log(`Remaining Slots in Level ${levelIndex} in Row ${rowIndex} are ${row.remainingSpots}`);
                        console.log("--------------------");
                        removed = true;
                    }
                    return !removed;
                })
                return !removed;
            })
            return !removed;
        })
    }

    status(){
        console.log("---------Vehicles in Parking Lot are ---------",'\n');
        let vehicles = [];
        this.levels.forEach((level,levelIndex)=>level.rows.forEach((row,rowIndex)=>{row.vehiclesOccupied.forEach((vehicle,vehicleIndex)=>vehicles.push(`Vehicle in Level ${levelIndex} in Row ${rowIndex} Type is ${vehicle.vehicleType} with Registered Number ${vehicle.regNum}`))}));
        if(vehicles.length === 0){
            console.log("---------No Vehicles in Parking Slot!---------",'\n');
        }else{
            vehicles.forEach(ele=>{console.log(ele,'\n');});
           
        }
    }

    getVehicleLocation(regNum){
        let present = false;
        this.levels.every((level,levelIndex)=>level.rows.every((row,rowIndex)=>row.vehiclesOccupied.every((vehicle,vehicleIndex)=>{
            
            if(vehicle.regNum === regNum){
                present = true;
                console.log(`Vehicle of Type ${vehicle.vehicleType} is located at Level ${levelIndex}, Row ${rowIndex}`,'\n');
            }
            return !present;
        })))
        if(present === false){
            console.log(`Vehicle with Registered Number ${regNum} is not present in the parking lot.`,'\n');
        }
    }

    getEmptySpots(){
        let totalEmpty = 0;
        console.log("---------Empty Slot's ---------");
        this.levels.forEach((level,levelIndex)=>level.rows.forEach((row,rowIndex)=>{
            totalEmpty += row.remainingSpots;
            console.log(`Level ${levelIndex}, Row ${rowIndex}, Remaining Empty Spot's are ${row.remainingSpots}`,'\n');
        }));
        console.log("Total Remaining Empty Spot's are: "+totalEmpty,'\n');
    }
    
}

class Level {
    constructor(_numOfRows,_rowSize){
        
        this.totalRows = _numOfRows;
        this.rowSize = _rowSize;
        this.rows = [];
    }
    createRows(){
        for(let i=0;i<this.totalRows;i++){
            this.rows.push(new Row(this.rowSize));
        }
    }
    
}

class Row {
    constructor(_totalSpots){
        
        this.totalSpots = _totalSpots;
        this.remainingSpots = _totalSpots;
        this.vehiclesOccupied = [];
    }
    
}

class Vehicle {
    constructor(_vehicleType,_regNum){
        this.vehicleType = _vehicleType;
        this.regNum = _regNum;
        this.fromTime = (new Date()).toLocaleTimeString();
    }
}


module.exports =  {
    parkingLot : ParkingLot,
    vehicle : Vehicle
}