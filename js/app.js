var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// create vehicles array
var vehicles = [vehicle1,vehicle2,vehicle3];

// build findVehicle function expression
var findVehicle = function(name, list){
  for(var i=0; i < list.length ; i++){
  	console.log(name);

    console.log(list[i]);
    if(list[i].type == name ){
    	console.log("type matches...", list[i].type);
    	console.log("The vehicle is stored at...", list[i].storedAt);
    	return list[i].storedAt;
    }
  }
};

// call findVehicle
findVehicle("Submarine", vehicles);