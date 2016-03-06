var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// add and adjust object properties here
vehicle1.capacity =10;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity = 16;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

var vehicles = [vehicle1,vehicle2,vehicle3];

// build findVehicle function expression
var findVehicle = function(name, list){
  for(var i=0; i < list.length ; i++){
  	// console.log(name);
    console.log(list[i]);
    if(list[i].type == name ){
    	// console.log("type matches...", list[i].type);
    	// console.log("The vehicle is stored at...", list[i].storedAt);
    	return list[i].storedAt;
    }
  }
};

// call findVehicle
findVehicle("Submarine", vehicles);