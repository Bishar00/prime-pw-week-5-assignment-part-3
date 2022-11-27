console.log('***** Music Collection *****')
1.
// - Create a variable `collection` that starts as an empty array.
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
let collection = []
let albumInfo= {title:"", artist:"", yearPublished:""}

function addToCollection (title,artist,yearPublished){
    collection.push({title, artist, yearPublished});
    return albumInfo
}


// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
addToCollection('get rich or die trying','50 cent', 2005)
addToCollection('The Massacre','50 cent',2005)
addToCollection('The voice','Lil durk',2020)
addToCollection('Before you go','Blsxt', 2022)
addToCollection('Made in Lagos','Wizkid', 2022)
addToCollection('African gaint','Burna', 2019)

console.log(collection)

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection(collection){
    for(let i=0;i < collection.length; i++)
        console.log("TITLE by ARTIST " + collection[i].title + " published in YEAR " + collection[i].yearPublished)
    
    }
    
    showCollection(collection);
    console.log(collection.length);


// - Test the `showCollection` function.

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
function findByartist(artist){
    resultsarray= []
   for(let i=0;i < collection.length; i++){
    
   if(artist === collection[i].artist){
   resultsarray.push(collection[i])
   }
   }
    console.log(resultsarray);
  }
  
  findByartist('50 cent');
  findByartist('Lil durk');
  findByartist("Blsxt");
  findByartist ("drake");


