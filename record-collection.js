// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) { 

  if (prop != "tracks" && value != ""){ 
    collection[id][prop] = value;
  } 
  if (prop == "tracks" && collection[id]["tracks"] == undefined){ 
    let empt = []; 
    collection[id][prop] = empt; 
  } 
  if (prop == "tracks" && collection[id]["tracks"] != undefined){ 
    collection[id][prop].push(value); 
  }  
  if (value == ""){ 
    delete collection[id][prop];
    }
  return collection;
}

updateRecords(5439, "artist", "ABBA"); 
console.log(collection)
