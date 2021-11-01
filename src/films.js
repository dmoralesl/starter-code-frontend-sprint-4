// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(film => film.director);
  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(film => film.director === director);
  console.log("EXERCISE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  // Using previous method to get array filtered by director
  let moviesOfDirector = getMoviesFromDirector(array, director);
  // Calling helper function "getAvegare" that takes an array of films and return their avegare score
  let result = getAverage(moviesOfDirector);

  console.log("EXERCISE 3 ->", result);
  return result;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  // Extracting only title with map first. 
  // Then using sort (by default sort alphabetically string arrays, no need a custom comparision function)
  // Finally slicing array from index 0 up to 20 to return just 20 elements.
  let result = array.map(film => film.title).sort().slice(0,20);
  console.log("EXERCISE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.sort( (film1, film2) => {
    if (film1.year === film2.year) {
      // Sorting by title when years are equal
      if (film1.title > film2.title) { 
        return 1; 
      }
      else { 
        return -1; 
      }
    } else {
      // Sorting by year (default)
      return film1.year - film2.year; 
    }
  });
  console.log("EXERCISE 5 ->", result);
  // To return a new array it's so simple as destructuring original array sorted
  return [...result];

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  // Filtering by movies getting in their genre array the provided genre
  const filmsFiltered = array.filter(film => film.genre.includes(genre));
  // Calling helper function "getAverage" to get the average of filtered films
  const result = getAverage(filmsFiltered);
  console.log("EXERCISE 6 ->", result);
  
  return result;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  const result = array.map(film => {
    let [hour, minutes] = film.duration.split(' ');
    // Using ternary operator for check if value exists
    hour = hour ? parseInt(hour.replace('h', '')) : 0;
    minutes = minutes ? parseInt(minutes.replace('min', '')) : 0;

    const totalTime = (hour * 60) + minutes;
    
    // Return with object destructuring to update duration and not change original array
    return {
      ...film,
      duration: totalTime
    };
  });

  console.log("EXERCISE 7 ->", result);

  return result;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  // Filtering by year of the films
  const filteredFilmsArray = array.filter(film => film.year === year);
  // Sorting descendent the films of the selected year
  const result = filteredFilmsArray.sort((film1, film2) => film2.score - film1.score);

  console.log("EXERCISE 8 ->", result);
  // Returning only the first film (bigger score) in array format
  return [result[0]];
}

// Helper functions
function getAverage(array) {
  // Removing elements from array that not have score
  const cleanedArray = array.filter(film => film.score !== '' && film.score !== null && typeof(film.score) !== 'undefined');
  // Getting the mean using length of filtered array and forcing type to float
  const result = cleanedArray.map(film => film.score)
    .reduce((current, previous) => current + previous);
  return parseFloat(result / cleanedArray.length);
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
