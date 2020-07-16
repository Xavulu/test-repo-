var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add a record here
];

let newAlbum = { 
  "artist": "April March",
    "title": "Chick Habit",
    "release_year": 1990,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": false
} 

myMusic.push(newAlbum); 
console.log(myMusic);